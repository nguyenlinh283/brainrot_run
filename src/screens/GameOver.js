import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function GameOver({ score, highScore, coins, onRestart, onMainMenu }) {
  const isNewHighScore = score >= highScore;
  
  return (
    <LinearGradient
      colors={['#C06C84', '#6C5B7B', '#355C7D']}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title}>GAME OVER! 💀</Text>
        
        {isNewHighScore && score > 0 && (
          <Text style={styles.newRecordText}>🎉 KỶ LỤC MỚI! 🎉</Text>
        )}

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Quãng đường</Text>
            <Text style={styles.statValue}>{score}m</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Kỷ lục</Text>
            <Text style={styles.statValue}>{highScore}m</Text>
          </View>
        </View>

        <View style={styles.coinsEarned}>
          <Text style={styles.coinsEarnedText}>💰 Tổng coins: {coins}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.restartButton} onPress={onRestart}>
            <Text style={styles.restartButtonText}>🔄 CHƠI LẠI</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuButton} onPress={onMainMenu}>
            <Text style={styles.menuButtonText}>🏠 MENU</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tipContainer}>
          <Text style={styles.tipText}>💡 Mẹo: Mở khóa nhân vật mới trong Shop!</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    width: width * 0.9,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFF',
    textShadowColor: '#000',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 5,
    marginBottom: 20,
  },
  newRecordText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 20,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 20,
    marginVertical: 30,
  },
  statBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 15,
    padding: 20,
    minWidth: 140,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FFF',
  },
  statLabel: {
    fontSize: 16,
    color: '#FFE5EC',
    fontWeight: '600',
  },
  statValue: {
    fontSize: 36,
    color: '#FFF',
    fontWeight: 'bold',
    marginTop: 5,
  },
  coinsEarned: {
    backgroundColor: 'rgba(255, 215, 0, 0.3)',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginVertical: 20,
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  coinsEarnedText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  buttonContainer: {
    width: '100%',
    gap: 15,
    marginTop: 20,
  },
  restartButton: {
    backgroundColor: '#00FF88',
    paddingVertical: 18,
    borderRadius: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    borderWidth: 4,
    borderColor: '#FFF',
  },
  restartButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a2e',
    textAlign: 'center',
  },
  menuButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    paddingVertical: 15,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  menuButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
  },
  tipContainer: {
    marginTop: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  tipText: {
    fontSize: 14,
    color: '#FFE5EC',
    textAlign: 'center',
    fontWeight: '600',
  },
});
