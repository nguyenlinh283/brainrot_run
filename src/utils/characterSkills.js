// Character Skills System - 21 Characters
export const CHARACTER_SKILLS = {
  default: { id: 'default', name: 'Không có skill', type: 'passive', effect: null },
  rhino: { id: 'rhino', name: 'Speed Boost', type: 'passive', effect: 'speedBoost', speedMultiplier: 1.1 },
  cappuccino: { id: 'cappuccino', name: 'Critical Hit', type: 'passive', effect: 'criticalScore', chance: 0.15, multiplier: 1.5 },
  ballerina: { id: 'ballerina', name: 'Double Jump', type: 'active', maxJumps: 2, effect: 'multiJump' },
  lirili: { id: 'lirili', name: 'Pet Collector', type: 'pet', effect: 'autoCollect', range: 50 },
  tralalero: { id: 'tralalero', name: 'Sound Wave', type: 'periodic', cooldown: 15000, duration: 2000, effect: 'slowObstacles', power: 0.3 },
  boneca: { id: 'boneca', name: 'Less Obstacles', type: 'passive', effect: 'reduceObstacleSpawn', reduction: 0.1 },
  tigroligre: { id: 'tigroligre', name: 'Fruit Bonus', type: 'item', itemType: 'fruit', effect: 'extraCoins', coinBonus: 50 },
  bananita: { id: 'bananita', name: 'Swim Through', type: 'conditional', trigger: 'lowObstacle', effect: 'ignoreObstacle', obstacleType: 'low' },
  crocodildo: { id: 'crocodildo', name: 'Bite Attack', type: 'periodic', cooldown: 20000, effect: 'destroySingleObstacle' },
  ilcacto: { id: 'ilcacto', name: 'Spike Shield', type: 'shield', effect: 'reflectDamage', reflectPercent: 0.5 },
  trictrac: { id: 'trictrac', name: 'Small Bomb', type: 'periodic', cooldown: 25000, effect: 'destroyLane' },
  burbaloni: { id: 'burbaloni', name: 'Bubble Float', type: 'periodic', cooldown: 30000, duration: 3000, effect: 'flyOver' },
  patapim: { id: 'patapim', name: 'Freeze Wave', type: 'periodic', cooldown: 30000, duration: 5000, effect: 'freezeObstacles' },
  tripytrophy: { id: 'tripytrophy', name: 'Combo Master', type: 'conditional', trigger: 'coinCombo', comboThreshold: 10, effect: 'scoreBonus', multiplier: 1.3 },
  trippitroppi: { id: 'trippitroppi', name: 'Clone Collector', type: 'periodic', cooldown: 45000, duration: 10000, effect: 'cloneCollector' },
  tracotucotulu: { id: 'tracotucotulu', name: 'AOE Shockwave', type: 'periodic', cooldown: 40000, effect: 'destroyAllLanes' },
  tatatata: { id: 'tatatata', name: 'Berserk Mode', type: 'periodic', cooldown: 50000, duration: 8000, effect: 'speedBoost', speedMultiplier: 1.5 },
  tungtung: { id: 'tungtung', name: 'Festival Buff', type: 'periodic', cooldown: 60000, duration: 15000, effect: 'doubleCoin', multiplier: 2 },
  brribrribibom: { id: 'brribrribibom', name: 'Kamikaze Bomb', type: 'onDeath', effect: 'explodeOnDeath', radius: 300 },
  udindindindindunma: { id: 'udindindindindunma', name: 'Divine Protection', type: 'milestone', trigger: 'distance', distanceInterval: 100, duration: 5000, effect: 'invincible' },
  trippatroppa: { id: 'trippatroppa', name: 'Ultimate Power', type: 'combo', effects: ['doubleCoin', 'shield', 'speedBoost'], coinMultiplier: 2, speedMultiplier: 1.5, cooldown: 60000, duration: 20000 },
};

export const getCharacterSkill = (characterId) => CHARACTER_SKILLS[characterId] || CHARACTER_SKILLS.default;

export const getCharacterEmoji = (characterId) => {
  const emojiMap = {
    default: '🤖', rhino: '🦏', cappuccino: '☕', ballerina: '🩰', lirili: '🐘', tralalero: '🎵',
    boneca: '🎎', tigroligre: '🐯', bananita: '🐬', crocodildo: '🐊', ilcacto: '🦛', trictrac: '💣',
    burbaloni: '🎈', patapim: '❄️', tripytrophy: '🏆', trippitroppi: '👥', tracotucotulu: '⚡',
    tatatata: '⚔️', tungtung: '🎪', brribrribibom: '💥', udindindindindunma: '🔮', trippatroppa: '👑',
  };
  return emojiMap[characterId] || '🤖';
};
