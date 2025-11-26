import React, { useState, useEffect, useRef } from 'react';
import { View, Text, PanResponder, Animated, TouchableOpacity, Image } from 'react-native';
import { getCharacterSkill, getCharacterEmoji } from '../utils/characterSkills';
import {
  SCREEN_WIDTH as width,
  SCREEN_HEIGHT as height,
  LANE_WIDTH,
  LANES,
  PLAYER_SIZE,
  OBSTACLE_SIZE,
  COIN_SIZE,
  INITIAL_SPEED,
  MAX_SPEED,
  SPEED_INCREMENT,
  SPEED_INCREMENT_INTERVAL,
  COLLISION_TOLERANCE,
  COIN_COLLECTION_RADIUS,
  SWIPE_THRESHOLD_VERTICAL,
} from '../constants/gameConstants';
import { gameStyles as styles } from '../styles/gameStyles';

export default function GameScreen({ character, onGameOver, highScore }) {
  const [gameRunning, setGameRunning] = useState(true);
  const [score, setScore] = useState(0);
  const [coinsCollected, setCoinsCollected] = useState(0);
  const [currentLane, setCurrentLane] = useState(1); // 0: left, 1: middle, 2: right
  const [isJumping, setIsJumping] = useState(false);
  const [isSliding, setIsSliding] = useState(false);
  const [obstacles, setObstacles] = useState([]);
  const [coins, setCoins] = useState([]);
  const [speed, setSpeed] = useState(INITIAL_SPEED);
  const [milestones, setMilestones] = useState([]);
  const [newRecordTriggered, setNewRecordTriggered] = useState(false);
  const [showNewRecordEffect, setShowNewRecordEffect] = useState(false);
  
  // Revive system
  const [hasUsedRevive, setHasUsedRevive] = useState(false);
  const [showRevivePopup, setShowRevivePopup] = useState(false);
  
  // Character skill states
  const characterSkill = getCharacterSkill(character);
  const [skillActive, setSkillActive] = useState(false);
  const [coinMultiplier, setCoinMultiplier] = useState(1);
  const [canDoubleJump, setCanDoubleJump] = useState(false);
  const [jumpCount, setJumpCount] = useState(0);
  const [hasShield, setHasShield] = useState(false);
  const lastSkillActivation = useRef(0);

  const playerPosX = useRef(new Animated.Value(LANES[1])).current;
  const playerPosY = useRef(new Animated.Value(height - 200)).current;
  const animationFrameRef = useRef(null);
  const lastObstacleSpawn = useRef(0);
  const lastCoinSpawn = useRef(0);
  
  // CRITICAL: Track current lane với useRef để tránh closure issue
  const currentLaneRef = useRef(currentLane);
  
  // CRITICAL: Distance phải dùng useRef để không bị reset khi re-render!
  const distanceRef = useRef(0);
  const lastTimeRef = useRef(Date.now());
  const speedRef = useRef(speed);
  const obstaclesRef = useRef([]);
  const coinsRef = useRef([]);
  const scoreRef = useRef(0); // Track score để pass khi game over
  
  // CRITICAL: Track jumping/sliding state với useRef để collision detection chính xác
  const isJumpingRef = useRef(false);
  const isSlidingRef = useRef(false);
  
  // Animation values for new record effect
  const recordFlashOpacity = useRef(new Animated.Value(0)).current;
  const recordScaleAnim = useRef(new Animated.Value(1)).current;
  const confettiAnim = useRef(new Animated.Value(0)).current;

  // Get character image and emoji
  const getCharacterImage = (characterId) => {
    const imageMap = {
      default: null,
      rhino: require('../../assets/images/character/Rhino-Toasterino.png'),
      cappuccino: require('../../assets/images/character/Cappuccino-Assassino.png'),
      ballerina: require('../../assets/images/character/Ballerina-Cappuccina.png'),
      lirili: require('../../assets/images/character/Lirili-Larila-Elephant.png'),
      tralalero: require('../../assets/images/character/Tralalero-Tralala.png'),
      boneca: require('../../assets/images/character/Boneca-Ambalabu.png'),
      tigroligre: require('../../assets/images/character/Tigroligre-Frutonni.png'),
      bananita: require('../../assets/images/character/Bananita-Dolfinita.png'),
      crocodildo: require('../../assets/images/character/Crocodildo-Penisini.png'),
      ilcacto: require('../../assets/images/character/Il-Cacto-Hipopotamo.png'),
      trictrac: require('../../assets/images/character/Tric-Trac-baraboom.png'),
      burbaloni: require('../../assets/images/character/Burbaloni-Lulilolli.png'),
      patapim: require('../../assets/images/character/Brr-Brr-Patapim.png'),
      tripytrophy: require('../../assets/images/character/Tripy-Trophy.png'),
      trippitroppi: require('../../assets/images/character/Trippi-Troppi.png'),
      tracotucotulu: require('../../assets/images/character/Tracotucotulu-Delapeladustuz.png'),
      tatatata: require('../../assets/images/character/Ta-Ta-Ta-Ta-Ta-Sahur.png'),
      tungtung: require('../../assets/images/character/Tung-Tung-Tung-Sahur.png'),
      brribrribibom: require('../../assets/images/character/Brri-Brri-Bicus-Dicus-Bombicus.png'),
      udindindindindunma: require('../../assets/images/character/U-Din-Din-Din-Din-Dun-Ma.png'),
      trippatroppa: require('../../assets/images/character/Trippa-Troppa-Tralala-Lirili-Rila-Tung-Tung-Sahur.png'),
    };
    return imageMap[characterId] || null;
  };

  const playerImage = getCharacterImage(character);
  const playerEmoji = getCharacterEmoji(character);

  // Sync refs với state
  useEffect(() => {
    currentLaneRef.current = currentLane;
  }, [currentLane]);
  
  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);
  
  useEffect(() => {
    obstaclesRef.current = obstacles;
  }, [obstacles]);
  
  useEffect(() => {
    coinsRef.current = coins;
  }, [coins]);
  
  useEffect(() => {
    isJumpingRef.current = isJumping;
  }, [isJumping]);
  
  useEffect(() => {
    isSlidingRef.current = isSliding;
  }, [isSliding]);

  // Gesture handling - FIXED với gesture state tracking
  const isLaneChanging = useRef(false);
  const gestureStartX = useRef(0);
  const gestureStartY = useRef(0);
  const hasTriggeredSwipe = useRef(false);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      
      onPanResponderGrant: (evt, gestureState) => {
        // Reset flags khi bắt đầu gesture mới
        gestureStartX.current = gestureState.x0;
        gestureStartY.current = gestureState.y0;
        hasTriggeredSwipe.current = false;
      },
      
      onPanResponderMove: (evt, gestureState) => {
        // Nếu đã trigger rồi hoặc đang moving, SKIP
        if (hasTriggeredSwipe.current || isLaneChanging.current) {
          return;
        }
        
        const { dx, dy } = gestureState;
        
        // Check horizontal swipe
        if (Math.abs(dx) > SWIPE_THRESHOLD_VERTICAL && Math.abs(dx) > Math.abs(dy)) {
          // LOCK ngay
          hasTriggeredSwipe.current = true;
          isLaneChanging.current = true;
          
          // CRITICAL: Dùng currentLaneRef.current thay vì currentLane
          // để lấy giá trị THẬT SỰ mới nhất (tránh closure issue)
          const actualCurrentLane = currentLaneRef.current;
          
          // Determine direction - CHỈ +1 hoặc -1
          if (dx > 0 && actualCurrentLane < 2) {
            // Swipe RIGHT → +1 lane THÔI
            const newLane = actualCurrentLane + 1;
            changeLane(newLane);
            currentLaneRef.current = newLane; // Update ref ngay
          } else if (dx < 0 && actualCurrentLane > 0) {
            // Swipe LEFT → -1 lane THÔI
            const newLane = actualCurrentLane - 1;
            changeLane(newLane);
            currentLaneRef.current = newLane; // Update ref ngay
          } else {
            // Ở biên, không move
            isLaneChanging.current = false;
          }
          
          // Unlock sau 300ms
          setTimeout(() => {
            isLaneChanging.current = false;
          }, 300);
        }
        // Check vertical swipe
        else if (Math.abs(dy) > 70 && Math.abs(dy) > Math.abs(dx)) {
          if (!hasTriggeredSwipe.current) {
            hasTriggeredSwipe.current = true;
            
            if (dy < 0 && !isJumping && !isSliding) {
              jump();
            } else if (dy > 0 && !isJumping && !isSliding) {
              slide();
            }
          }
        }
      },
      
      onPanResponderRelease: () => {
        // Reset khi thả tay
        hasTriggeredSwipe.current = false;
      },
    })
  ).current;

  const changeLane = (targetLane) => {
    // Update state ngay lập tức
    setCurrentLane(targetLane);
    
    // Animate smooth
    Animated.timing(playerPosX, {
      toValue: LANES[targetLane],
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const jump = () => {
    // Ballerina double jump ability
    if (characterSkill.id === 'ballerina' && canDoubleJump) {
      if (jumpCount >= 2) return;
      
      setJumpCount(prev => prev + 1);
      
      Animated.sequence([
        Animated.timing(playerPosY, {
          toValue: height - 350,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(playerPosY, {
          toValue: height - 200,
          duration: 300,
          useNativeDriver: false,
        }),
      ]).start(() => {
        if (jumpCount + 1 >= 2) {
          setIsJumping(false);
          isJumpingRef.current = false;
          setJumpCount(0);
        }
      });
      
      setIsJumping(true);
      isJumpingRef.current = true;
      return;
    }
    
    // Normal jump
    if (isJumping || isSliding) return;
    setIsJumping(true);
    isJumpingRef.current = true;
    
    Animated.sequence([
      Animated.timing(playerPosY, {
        toValue: height - 350,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(playerPosY, {
        toValue: height - 200,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start(() => {
      setIsJumping(false);
      isJumpingRef.current = false;
    });
  };

  const slide = () => {
    if (isJumping || isSliding) return;
    setIsSliding(true);
    isSlidingRef.current = true; // Set ref ngay lập tức
    
    setTimeout(() => {
      setIsSliding(false);
      isSlidingRef.current = false;
    }, 500);
  };

  // Trigger new record effect
  const triggerNewRecordEffect = () => {
    setShowNewRecordEffect(true);

    // Flash effect
    Animated.sequence([
      Animated.timing(recordFlashOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(recordFlashOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(recordFlashOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(recordFlashOpacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setShowNewRecordEffect(false);
    });

    // Scale pulse effect
    Animated.sequence([
      Animated.timing(recordScaleAnim, {
        toValue: 1.3,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(recordScaleAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(recordScaleAnim, {
        toValue: 1.2,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(recordScaleAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();

    // Confetti effect
    Animated.timing(confettiAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      confettiAnim.setValue(0);
    });
  };

  // Game loop
  useEffect(() => {
    if (!gameRunning) return;
    
    // Reset distance khi game start
    distanceRef.current = 0;
    lastTimeRef.current = Date.now();

    const gameLoop = () => {
      if (!gameRunning) return;

      const currentTime = Date.now();
      const deltaTime = (currentTime - lastTimeRef.current) / 16.67;
      lastTimeRef.current = currentTime;

      // CRITICAL: Dùng ref để giữ distance không bị reset
      const currentSpeed = speedRef.current;
      distanceRef.current += currentSpeed * deltaTime;
      const currentScore = Math.floor(distanceRef.current / 10);
      
      // Update cả state VÀ ref
      scoreRef.current = currentScore;
      setScore(currentScore);

      // === Character Skill System ===
      // Trigger periodic skills (sound wave, festival, ice trail)
      if (characterSkill.type === 'periodic' && 
          currentTime - lastSkillActivation > (characterSkill.cooldown || 10000)) {
        setSkillActive(true);
        setLastSkillActivation(currentTime);
        
        // Apply skill effect based on character
        if (characterSkill.id === 'tralala') {
          // Sound wave - slow obstacles for duration
          setTimeout(() => setSkillActive(false), characterSkill.duration || 3000);
        } else if (characterSkill.id === 'tung_sahur') {
          // Festival buff - 2x coins
          setCoinMultiplier(2);
          setTimeout(() => {
            setCoinMultiplier(1);
            setSkillActive(false);
          }, characterSkill.duration || 15000);
        } else if (characterSkill.id === 'patapim' && speed > 5) {
          // Ice trail - conditional on speed
          setTimeout(() => setSkillActive(false), characterSkill.duration || 5000);
        }
      }

      // Shield recharge (Camello)
      if (characterSkill.id === 'camello' && !hasShield && 
          currentTime - lastSkillActivation > (characterSkill.cooldown || 60000)) {
        setHasShield(true);
        setLastSkillActivation(currentTime);
      }

      // Check if new high score is achieved
      if (!newRecordTriggered && highScore > 0 && currentScore > highScore) {
        setNewRecordTriggered(true);
        triggerNewRecordEffect();
      }

      // Increase speed over time - Tăng mượt hơn mỗi 50m
      if (currentScore % SPEED_INCREMENT_INTERVAL === 0 && currentScore > 0) {
        setSpeed(prev => Math.min(prev + SPEED_INCREMENT, MAX_SPEED));
      }

      // Check milestones
      if (currentScore > 0 && currentScore % 500 === 0) {
        const milestoneExists = milestones.includes(currentScore);
        if (!milestoneExists) {
          setMilestones(prev => [...prev, currentScore]);
          setCoinsCollected(prev => prev + 100);
        }
      }

      // Spawn obstacles - Điều chỉnh interval theo tốc độ để giữ khoảng cách thực tế cố định
      const obstacleInterval = 2000 / currentSpeed; // Khoảng cách cố định 2000ms ở tốc độ 1
      if (currentTime - lastObstacleSpawn.current > obstacleInterval) {
        spawnObstacle();
        lastObstacleSpawn.current = currentTime;
      }

      // Spawn coins - Giữ interval cố định để dễ thấy
      if (currentTime - lastCoinSpawn.current > 1000) { // Mỗi 1 giây spawn 1 coin
        spawnCoin();
        lastCoinSpawn.current = currentTime;
      }

      // Update obstacles and coins
      const moveAmount = currentSpeed * deltaTime;
      updateObstacles(moveAmount);
      updateCoins(moveAmount);

      // Check collisions
      checkCollisions();

      animationFrameRef.current = requestAnimationFrame(gameLoop);
    };

    animationFrameRef.current = requestAnimationFrame(gameLoop);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [gameRunning]); // CHỈ depend on gameRunning để tránh reset distance!

  const spawnObstacle = () => {
    setObstacles(prev => {
      // Lấy obstacles gần nhất (trong khoảng 400px từ top)
      const recentObstacles = prev.filter(obs => obs.y < 400 && obs.y > -100);
      
      // Tìm lanes đã có obstacle gần đây
      const occupiedLanes = recentObstacles.map(obs => obs.lane);
      
      // Tìm lanes trống (an toàn để spawn)
      let availableLanes = [0, 1, 2].filter(lane => !occupiedLanes.includes(lane));
      
      // Nếu tất cả lanes đều có obstacle gần, chọn random (nhưng ít xảy ra)
      if (availableLanes.length === 0) {
        availableLanes = [0, 1, 2];
      }
      
      // Luôn để ít nhất 1 lane trống nếu có >= 2 obstacles gần
      let selectedLane;
      if (recentObstacles.length >= 2) {
        // Bắt buộc spawn ở lane trống
        selectedLane = availableLanes[Math.floor(Math.random() * availableLanes.length)];
      } else {
        // Spawn ngẫu nhiên nhưng ưu tiên lanes trống (70% chance)
        if (Math.random() < 0.7 && availableLanes.length > 0) {
          selectedLane = availableLanes[Math.floor(Math.random() * availableLanes.length)];
        } else {
          selectedLane = Math.floor(Math.random() * LANES.length);
        }
      }
      
      const type = Math.random() > 0.5 ? 'high' : 'low';
      
      return [
        ...prev,
        {
          id: Date.now() + Math.random(),
          lane: selectedLane,
          y: -OBSTACLE_SIZE,
          type,
          emoji: type === 'high' ? '🚧' : '🔥',
        },
      ];
    });
  };

  const spawnCoin = () => {
    const lane = Math.floor(Math.random() * LANES.length);
    
    setCoins(prev => {
      const newCoin = {
        id: Date.now() + Math.random(),
        lane,
        y: -100, // Spawn xa hơn để không bị collect ngay
      };
      console.log('Spawn coin:', newCoin.id, 'lane:', newCoin.lane, 'y:', newCoin.y);
      return [...prev, newCoin];
    });
  };

  const updateObstacles = (moveAmount) => {
    // Apply skill effects to obstacle speed
    let adjustedMoveAmount = moveAmount;
    
    // Slow obstacles (Tralala sound wave, Patapim ice trail)
    if (skillActive && (characterSkill.id === 'tralala' || characterSkill.id === 'patapim')) {
      adjustedMoveAmount *= (characterSkill.effect?.slowAmount || 0.5);
    }
    
    setObstacles(prev =>
      prev
        .map(obs => ({ ...obs, y: obs.y + adjustedMoveAmount }))
        .filter(obs => obs.y < height + OBSTACLE_SIZE)
    );
  };

  const updateCoins = (moveAmount) => {
    setCoins(prev => {
      const updated = prev
        .map(coin => ({ ...coin, y: coin.y + moveAmount }))
        .filter(coin => coin.y < height + COIN_SIZE);
      
      // Debug: Log số lượng coins
      if (updated.length > 0) {
        console.log('Coins on screen:', updated.length, 'First coin y:', updated[0].y);
      }
      
      return updated;
    });
  };

  const checkCollisions = () => {
    // Dùng ref để lấy giá trị mới nhất
    const actualLane = currentLaneRef.current;
    const actualObstacles = obstaclesRef.current;
    const playerX = LANES[actualLane];
    const playerY = height - 200;
    
    for (const obstacle of actualObstacles) {
      if (obstacle.lane === actualLane && 
          Math.abs(obstacle.y - playerY) < COLLISION_TOLERANCE) {
        // Check if player can avoid - DÙNG REF để check real-time state
        if (obstacle.type === 'high') {
          // High obstacle: phải JUMP để tránh
          if (!isJumpingRef.current) {
            // Shield protection (Camello)
            if (hasShield) {
              setHasShield(false);
              setLastSkillActivation(Date.now());
              setObstacles(prev => prev.filter(o => o.id !== obstacle.id));
              return;
            }
            endGame();
            return;
          }
        }
        if (obstacle.type === 'low') {
          // Low obstacle: phải SLIDE để tránh
          if (!isSlidingRef.current) {
            // Shield protection (Camello)
            if (hasShield) {
              setHasShield(false);
              setLastSkillActivation(Date.now());
              setObstacles(prev => prev.filter(o => o.id !== obstacle.id));
              return;
            }
            endGame();
            return;
          }
        }
      }
    }

    // Check coin collisions - Tăng radius để dễ ăn hơn
    const actualCoins = coinsRef.current;
    setCoins(prev => {
      const remaining = [];
      let collected = 0;

      for (const coin of actualCoins) {
        if (coin.lane === actualLane && 
            Math.abs(coin.y - playerY) < COIN_COLLECTION_RADIUS) {
          collected++;
        } else {
          remaining.push(coin);
        }
      }

      if (collected > 0) {
        // Apply coin multiplier (Festival buff, Cappuccino crit)
        let multiplier = coinMultiplier;
        
        // Cappuccino critical hit (20% chance)
        if (characterSkill.id === 'cappuccino' && Math.random() < 0.2) {
          multiplier *= 2;
          setSkillActive(true);
          setTimeout(() => setSkillActive(false), 500);
        }
        
        setCoinsCollected(prevCoins => prevCoins + (collected * multiplier));
      }

      return remaining;
    });
  };

  const endGame = () => {
    // Nếu chưa dùng revive, hiện popup
    if (!hasUsedRevive) {
      setGameRunning(false);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      setShowRevivePopup(true);
      return;
    }
    
    // Lần chết thứ 2 - Game Over thật sự
    setGameRunning(false);
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    // CRITICAL: Dùng ref để lấy giá trị CHÍNH XÁC nhất
    const finalScore = scoreRef.current;
    const finalCoins = coinsCollected;
    
    console.log('🎮 Game Over - Score:', finalScore, 'Coins:', finalCoins);
    
    setTimeout(() => {
      onGameOver(finalScore, finalCoins);
    }, 100);
  };
  
  const handleRevive = () => {
    // Giả lập xem quảng cáo (sau này có thể tích hợp AdMob)
    setShowRevivePopup(false);
    setHasUsedRevive(true);
    
    // Xóa obstacles gần player để tránh chết ngay
    setObstacles(prev => prev.filter(obs => obs.y < height - 400 || obs.y > height - 100));
    
    // Reset time và restart game
    lastTimeRef.current = Date.now();
    
    // Hồi sinh - setGameRunning(true) sẽ trigger useEffect và restart game loop
    setGameRunning(true);
  };
  
  const handleSkipRevive = () => {
    setShowRevivePopup(false);
    setHasUsedRevive(true);
    
    // Game Over ngay
    const finalScore = scoreRef.current;
    const finalCoins = coinsCollected;
    
    setTimeout(() => {
      onGameOver(finalScore, finalCoins);
    }, 100);
  };

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      {/* Background */}
      <View style={styles.background}>
        <View style={[styles.lane, { left: 0 }]} />
        <View style={[styles.lane, { left: LANE_WIDTH }]} />
        <View style={[styles.lane, { left: LANE_WIDTH * 2 }]} />
      </View>

      {/* Lane Indicators - Hiển thị lane hiện tại */}
      <View style={styles.laneIndicators}>
        {[0, 1, 2].map(lane => (
          <View 
            key={lane} 
            style={[
              styles.laneIndicator,
              currentLane === lane && styles.laneIndicatorActive
            ]}
          />
        ))}
      </View>

      {/* HUD */}
      <View style={styles.hud}>
        <Animated.View style={{ transform: [{ scale: recordScaleAnim }] }}>
          <Text style={[
            styles.scoreText,
            newRecordTriggered && { color: '#FFD700', fontSize: 28 }
          ]}>
            🏃 {score}m {newRecordTriggered && '🔥'}
          </Text>
        </Animated.View>
        <Text style={styles.coinText}>💰 {coinsCollected} {coinMultiplier > 1 && `(x${coinMultiplier})`}</Text>
        <Text style={styles.speedText}>⚡ {speed.toFixed(1)}x</Text>
      </View>

      {/* Character Skill Display */}
      {characterSkill.id !== 'default' && (
        <View style={styles.skillDisplay}>
          <Text style={styles.skillName}>{characterSkill.name}</Text>
          {skillActive && (
            <Text style={styles.skillActive}>✨ ACTIVE</Text>
          )}
          {hasShield && (
            <Text style={styles.shieldText}>🛡️ SHIELD</Text>
          )}
        </View>
      )}

      {/* New Record Flash Effect */}
      {showNewRecordEffect && (
        <Animated.View 
          style={[
            styles.newRecordOverlay,
            { opacity: recordFlashOpacity }
          ]}
        >
          <Text style={styles.newRecordText}>🎉 KỶ LỤC MỚI! 🎉</Text>
          <Text style={styles.newRecordSubtext}>Bạn đang phá kỷ lục!</Text>
        </Animated.View>
      )}

      {/* Confetti Effect */}
      {newRecordTriggered && (
        <Animated.View 
          style={[
            styles.confettiContainer,
            {
              opacity: confettiAnim.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [1, 1, 0]
              })
            }
          ]}
        >
          {[...Array(20)].map((_, i) => (
            <Animated.View
              key={i}
              style={[
                styles.confetti,
                {
                  left: `${(i * 5) % 100}%`,
                  backgroundColor: ['#FFD700', '#FF6B9D', '#00FF88', '#4A90E2'][i % 4],
                  transform: [{
                    translateY: confettiAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, height]
                    })
                  }]
                }
              ]}
            />
          ))}
        </Animated.View>
      )}

      {/* High Score Indicator - Luôn hiển thị */}
      {!newRecordTriggered && (
        <View style={styles.highScoreIndicator}>
          <Text style={styles.highScoreText}>🏆 Kỷ lục: {highScore}m</Text>
        </View>
      )}

      {/* Obstacles */}
      {obstacles.map(obstacle => (
        <View
          key={obstacle.id}
          style={[
            styles.obstacle,
            {
              left: width / 2 + LANES[obstacle.lane] - OBSTACLE_SIZE / 2,
              top: obstacle.y,
            },
          ]}
        >
          <Text style={styles.obstacleEmoji}>{obstacle.emoji}</Text>
        </View>
      ))}

      {/* Coins - Debug: {coins.length} coins */}
      {coins.map(coin => (
        <View
          key={coin.id}
          style={[
            styles.coin,
            {
              left: width / 2 + LANES[coin.lane] - COIN_SIZE / 2,
              top: coin.y,
            },
          ]}
        >
          <Text style={styles.coinEmoji}>💰</Text>
        </View>
      ))}

      {/* Player */}
      <Animated.View
        style={[
          styles.player,
          {
            left: Animated.add(playerPosX, width / 2 - PLAYER_SIZE / 2),
            top: playerPosY,
            height: isSliding ? PLAYER_SIZE / 2 : PLAYER_SIZE,
          },
        ]}
      >
        {playerImage ? (
          <Image 
            source={playerImage} 
            style={styles.playerImage}
            resizeMode="contain"
          />
        ) : (
          <Text style={styles.playerEmoji}>{playerEmoji}</Text>
        )}
      </Animated.View>

      {/* Controls hint */}
      <View style={styles.controlsHint}>
        <Text style={styles.hintText}>⬅️ Trái | ➡️ Phải | ⬆️ Nhảy | ⬇️ Trượt</Text>
      </View>

      {/* Revive Popup */}
      {showRevivePopup && (
        <View style={styles.reviveOverlay}>
          <View style={styles.revivePopup}>
            <Text style={styles.reviveTitle}>💀 ĐÃ CHẾT!</Text>
            <Text style={styles.reviveScore}>Kỷ lục: {Math.floor(distanceRef.current / 10)}m</Text>
            <Text style={styles.reviveMessage}>Xem quảng cáo để hồi sinh?</Text>
            <Text style={styles.reviveWarning}>(Chỉ được hồi sinh 1 lần)</Text>
            
            <View style={styles.reviveButtons}>
              <TouchableOpacity style={styles.reviveButton} onPress={handleRevive}>
                <Text style={styles.reviveButtonText}>📺 XEM QC & HỒI SINH</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.skipButton} onPress={handleSkipRevive}>
                <Text style={styles.skipButtonText}>❌ BỎ QUA</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
