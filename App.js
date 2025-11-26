import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MainMenu from './src/screens/MainMenu';
import GameScreen from './src/screens/GameScreen';
import GameOver from './src/screens/GameOver';
import Shop from './src/screens/Shop';
import DailyMissions from './src/screens/DailyMissions';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('menu');
  const [coins, setCoins] = useState(0);
  const [selectedCharacter, setSelectedCharacter] = useState('default');
  const [unlockedCharacters, setUnlockedCharacters] = useState(['default']);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [dailyMissions, setDailyMissions] = useState([]);

  // Load saved data
  useEffect(() => {
    loadGameData();
  }, []);

  const loadGameData = async () => {
    try {
      const savedCoins = await AsyncStorage.getItem('coins');
      const savedCharacter = await AsyncStorage.getItem('selectedCharacter');
      const savedUnlocked = await AsyncStorage.getItem('unlockedCharacters');
      const savedHighScore = await AsyncStorage.getItem('highScore');
      const savedMissions = await AsyncStorage.getItem('dailyMissions');
      const lastMissionDate = await AsyncStorage.getItem('lastMissionDate');

      console.log('📦 Loading data:', { savedCoins, savedHighScore });

      if (savedCoins) setCoins(parseInt(savedCoins));
      if (savedCharacter) setSelectedCharacter(savedCharacter);
      if (savedUnlocked) setUnlockedCharacters(JSON.parse(savedUnlocked));
      if (savedHighScore) {
        const score = parseInt(savedHighScore);
        console.log('🏆 Setting highScore:', score);
        setHighScore(score);
      }

      // Check if we need to reset daily missions
      const today = new Date().toDateString();
      if (lastMissionDate !== today) {
        resetDailyMissions();
      } else if (savedMissions) {
        setDailyMissions(JSON.parse(savedMissions));
      } else {
        resetDailyMissions();
      }
    } catch (error) {
      console.error('Error loading game data:', error);
    }
  };

  const resetDailyMissions = async () => {
    const newMissions = [
      { id: 1, title: 'Chạy 500m', type: 'distance', target: 500, progress: 0, reward: 50, completed: false },
      { id: 2, title: 'Thu thập 50 coins', type: 'coins', target: 50, progress: 0, reward: 30, completed: false },
      { id: 3, title: 'Chơi 3 lần', type: 'games', target: 3, progress: 0, reward: 40, completed: false },
    ];
    setDailyMissions(newMissions);
    await AsyncStorage.setItem('dailyMissions', JSON.stringify(newMissions));
    await AsyncStorage.setItem('lastMissionDate', new Date().toDateString());
  };

  const saveGameData = async (data) => {
    try {
      if (data.coins !== undefined) {
        await AsyncStorage.setItem('coins', data.coins.toString());
        setCoins(data.coins);
      }
      if (data.selectedCharacter) {
        await AsyncStorage.setItem('selectedCharacter', data.selectedCharacter);
        setSelectedCharacter(data.selectedCharacter);
      }
      if (data.unlockedCharacters) {
        await AsyncStorage.setItem('unlockedCharacters', JSON.stringify(data.unlockedCharacters));
        setUnlockedCharacters(data.unlockedCharacters);
      }
      if (data.highScore !== undefined) {
        await AsyncStorage.setItem('highScore', data.highScore.toString());
        setHighScore(data.highScore);
      }
    } catch (error) {
      console.error('Error saving game data:', error);
    }
  };

  const updateDailyMissions = async (type, amount) => {
    const updatedMissions = dailyMissions.map(mission => {
      if (mission.type === type && !mission.completed) {
        const newProgress = Math.min(mission.progress + amount, mission.target);
        const completed = newProgress >= mission.target;
        return { ...mission, progress: newProgress, completed };
      }
      return mission;
    });
    setDailyMissions(updatedMissions);
    await AsyncStorage.setItem('dailyMissions', JSON.stringify(updatedMissions));
  };

  const claimMissionReward = async (missionId) => {
    const mission = dailyMissions.find(m => m.id === missionId);
    if (mission && mission.completed) {
      const newCoins = coins + mission.reward;
      await saveGameData({ coins: newCoins });
      
      const updatedMissions = dailyMissions.map(m => 
        m.id === missionId ? { ...m, reward: 0 } : m
      );
      setDailyMissions(updatedMissions);
      await AsyncStorage.setItem('dailyMissions', JSON.stringify(updatedMissions));
    }
  };

  const handleGameStart = () => {
    setScore(0);
    setCurrentScreen('game');
  };

  const handleGameOver = (finalScore, coinsCollected) => {
    setScore(finalScore);
    const newTotalCoins = coins + coinsCollected;
    const newHighScore = Math.max(highScore, finalScore);
    
    saveGameData({ 
      coins: newTotalCoins, 
      highScore: newHighScore 
    });

    // Update daily missions
    updateDailyMissions('distance', finalScore);
    updateDailyMissions('coins', coinsCollected);
    updateDailyMissions('games', 1);

    setCurrentScreen('gameover');
  };

  const handleCharacterSelect = (character) => {
    saveGameData({ selectedCharacter: character });
  };

  const handleCharacterUnlock = (character, cost) => {
    if (coins >= cost && !unlockedCharacters.includes(character)) {
      const newCoins = coins - cost;
      const newUnlocked = [...unlockedCharacters, character];
      saveGameData({ 
        coins: newCoins, 
        unlockedCharacters: newUnlocked 
      });
    }
  };

  const handleWatchAd = () => {
    // Placeholder for ad integration
    const rewardCoins = 50;
    const newCoins = coins + rewardCoins;
    saveGameData({ coins: newCoins });
    alert(`Bạn nhận được ${rewardCoins} coins!`);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'menu':
        return (
          <MainMenu
            coins={coins}
            highScore={highScore}
            onStartGame={handleGameStart}
            onOpenShop={() => setCurrentScreen('shop')}
            onOpenMissions={() => setCurrentScreen('missions')}
            onWatchAd={handleWatchAd}
          />
        );
      case 'game':
        return (
          <GameScreen
            character={selectedCharacter}
            highScore={highScore}
            onGameOver={handleGameOver}
          />
        );
      case 'gameover':
        return (
          <GameOver
            score={score}
            highScore={highScore}
            coins={coins}
            onRestart={handleGameStart}
            onMainMenu={() => setCurrentScreen('menu')}
          />
        );
      case 'shop':
        return (
          <Shop
            coins={coins}
            selectedCharacter={selectedCharacter}
            unlockedCharacters={unlockedCharacters}
            onSelectCharacter={handleCharacterSelect}
            onUnlockCharacter={handleCharacterUnlock}
            onBack={() => setCurrentScreen('menu')}
          />
        );
      case 'missions':
        return (
          <DailyMissions
            missions={dailyMissions}
            onClaimReward={claimMissionReward}
            onBack={() => setCurrentScreen('menu')}
          />
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {renderScreen()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
});
