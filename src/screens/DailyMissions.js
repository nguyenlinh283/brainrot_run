import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function DailyMissions({ missions, onClaimReward, onBack }) {
  const renderMissionProgress = (mission) => {
    const percentage = Math.min((mission.progress / mission.target) * 100, 100);
    
    return (
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: `${percentage}%` }]} />
        <Text style={styles.progressText}>
          {mission.progress} / {mission.target}
        </Text>
      </View>
    );
  };

  const getMissionIcon = (type) => {
    switch (type) {
      case 'distance':
        return '🏃';
      case 'coins':
        return '💰';
      case 'games':
        return '🎮';
      default:
        return '📋';
    }
  };

  return (
    <LinearGradient
      colors={['#6C5B7B', '#355C7D', '#2A4A5C']}
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backButtonText}>⬅️ Quay lại</Text>
        </TouchableOpacity>
        <Text style={styles.title}>📋 NHIỆM VỤ</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>NHIỆM VỤ HÀNG NGÀY</Text>
        <Text style={styles.subtitle}>Làm mới mỗi ngày</Text>

        {missions.map(mission => (
          <View key={mission.id} style={styles.missionCard}>
            <View style={styles.missionHeader}>
              <Text style={styles.missionIcon}>{getMissionIcon(mission.type)}</Text>
              <View style={styles.missionInfo}>
                <Text style={styles.missionTitle}>{mission.title}</Text>
                <Text style={styles.missionReward}>
                  Phần thưởng: 💰 {mission.reward} coins
                </Text>
              </View>
            </View>

            {renderMissionProgress(mission)}

            {mission.completed ? (
              mission.reward > 0 ? (
                <TouchableOpacity
                  style={styles.claimButton}
                  onPress={() => onClaimReward(mission.id)}
                >
                  <Text style={styles.claimButtonText}>🎁 NHẬN THƯỞNG</Text>
                </TouchableOpacity>
              ) : (
                <View style={styles.completedButton}>
                  <Text style={styles.completedButtonText}>✅ ĐÃ NHẬN</Text>
                </View>
              )
            ) : (
              <View style={styles.incompleteButton}>
                <Text style={styles.incompleteButtonText}>
                  ⏳ Chưa hoàn thành
                </Text>
              </View>
            )}
          </View>
        ))}

        <View style={styles.tipBox}>
          <Text style={styles.tipTitle}>💡 Mẹo</Text>
          <Text style={styles.tipText}>
            Nhiệm vụ hàng ngày sẽ được làm mới vào 00:00 mỗi ngày.
            Hãy hoàn thành chúng để kiếm thêm coins!
          </Text>
        </View>

        <View style={styles.statsBox}>
          <Text style={styles.statsTitle}>📊 Thống kê hôm nay</Text>
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Nhiệm vụ hoàn thành:</Text>
            <Text style={styles.statValue}>
              {missions.filter(m => m.completed).length} / {missions.length}
            </Text>
          </View>
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Tổng phần thưởng có thể nhận:</Text>
            <Text style={styles.statValue}>
              💰 {missions.reduce((sum, m) => sum + (m.completed && m.reward > 0 ? m.reward : 0), 0)}
            </Text>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  backButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  placeholder: {
    width: 80,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFE5EC',
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#FFE5EC',
    marginBottom: 20,
    textAlign: 'center',
    opacity: 0.8,
  },
  missionCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#FFF',
  },
  missionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  missionIcon: {
    fontSize: 40,
    marginRight: 15,
  },
  missionInfo: {
    flex: 1,
  },
  missionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 5,
  },
  missionReward: {
    fontSize: 14,
    color: '#FFD700',
    fontWeight: '600',
  },
  progressContainer: {
    height: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 15,
    marginBottom: 15,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  progressBar: {
    position: 'absolute',
    height: '100%',
    backgroundColor: '#00FF88',
    borderRadius: 15,
  },
  progressText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF',
    zIndex: 1,
  },
  claimButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  claimButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a2e',
  },
  completedButton: {
    backgroundColor: '#00FF88',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    opacity: 0.7,
  },
  completedButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a2e',
  },
  incompleteButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  incompleteButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFE5EC',
  },
  tipBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 15,
    padding: 20,
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#FFE5EC',
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10,
  },
  tipText: {
    fontSize: 14,
    color: '#FFE5EC',
    lineHeight: 20,
  },
  statsBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 15,
    padding: 20,
    marginTop: 15,
    borderWidth: 2,
    borderColor: '#FFE5EC',
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 15,
    textAlign: 'center',
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  statLabel: {
    fontSize: 14,
    color: '#FFE5EC',
  },
  statValue: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: 'bold',
  },
});
