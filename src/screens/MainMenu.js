import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function MainMenu({ coins, highScore, onStartGame, onOpenShop, onOpenMissions, onWatchAd }) {
  return (
    <LinearGradient
      colors={['#FF6B9D', '#C06C84', '#6C5B7B']}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.title}>🧠 BrainrotRun 🏃</Text>
        <Text style={styles.subtitle}>Endless Meme Runner</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>💰 Coins</Text>
          <Text style={styles.statValue}>{coins}</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>🏆 High Score</Text>
          <Text style={styles.statValue}>{highScore}m</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.playButton} onPress={onStartGame}>
          <Text style={styles.playButtonText}>▶️ CHƠI NGAY</Text>
        </TouchableOpacity>

        <View style={styles.menuRow}>
          <TouchableOpacity style={styles.menuButton} onPress={onOpenShop}>
            <Text style={styles.menuButtonText}>🛍️ Shop</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuButton} onPress={onOpenMissions}>
            <Text style={styles.menuButtonText}>📋 Nhiệm vụ</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.adButton} onPress={onWatchAd}>
          <Text style={styles.adButtonText}>📺 Xem quảng cáo (+50 coins)</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Vuốt ⬅️➡️⬆️⬇️ để điều khiển</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#FFF',
    textShadowColor: '#000',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 18,
    color: '#FFE5EC',
    marginTop: 5,
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 20,
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
    color: '#FFF',
    fontWeight: '600',
  },
  statValue: {
    fontSize: 28,
    color: '#FFE5EC',
    fontWeight: 'bold',
    marginTop: 5,
  },
  buttonContainer: {
    width: width * 0.85,
    alignItems: 'center',
    gap: 15,
  },
  playButton: {
    backgroundColor: '#00FF88',
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    borderWidth: 4,
    borderColor: '#FFF',
  },
  playButtonText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a2e',
  },
  menuRow: {
    flexDirection: 'row',
    gap: 15,
    width: '100%',
    justifyContent: 'center',
  },
  menuButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    flex: 1,
    maxWidth: 150,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  menuButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
  },
  adButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#FFF',
  },
  adButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a2e',
  },
  footer: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#FFE5EC',
    fontWeight: '600',
  },
});
