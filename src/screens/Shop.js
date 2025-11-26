import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const CHARACTERS = [
  { 
    id: 'default', 
    name: 'Robot Mặc định', 
    image: null,
    cost: 0, 
    tier: 'Default',
    description: 'Nhân vật ban đầu',
    skill: 'Không có skill đặc biệt'
  },
  
  // TIER D - Nhân vật cute, ít sát thương (yếu nhất)
  { 
    id: 'rhino', 
    name: 'Rhino Toasterino', 
    image: require('../../assets/images/character/Rhino-Toasterino.png'),
    cost: 700, 
    tier: 'D',
    description: 'Tê giác cute',
    skill: 'Tăng 10% tốc độ di chuyển'
  },
  { 
    id: 'cappuccino', 
    name: 'Cappuccino Assassino', 
    image: require('../../assets/images/character/Cappuccino-Assassino.png'),
    cost: 800, 
    tier: 'D',
    description: 'Sát thủ cà phê',
    skill: 'Critical hit: 15% gây 1.5x điểm'
  },
  { 
    id: 'ballerina', 
    name: 'Ballerina Cappuccina', 
    image: require('../../assets/images/character/Ballerina-Cappuccina.png'),
    cost: 900, 
    tier: 'D',
    description: 'Vũ công nhẹ nhàng',
    skill: 'Double jump - nhảy 2 lần liên tiếp'
  },
  { 
    id: 'lirili', 
    name: 'Lirili Larila Elephant', 
    image: require('../../assets/images/character/Lirili-Larila-Elephant.png'),
    cost: 1000, 
    tier: 'D',
    description: 'Voi nhỏ ngọt ngào',
    skill: 'Pet thu coin trong bán kính 50px'
  },
  { 
    id: 'tralalero', 
    name: 'Tralalero Tralala', 
    image: require('../../assets/images/character/Tralalero-Tralala.png'),
    cost: 1200, 
    tier: 'D',
    description: 'Nhảy theo nhịp',
    skill: 'Mỗi 15s làm chậm vật cản 30%'
  },
  
  // TIER C - Đỡ hỗn hơn, dùng early-game
  { 
    id: 'boneca', 
    name: 'Boneca Ambalabu', 
    image: require('../../assets/images/character/Boneca-Ambalabu.png'),
    cost: 1400, 
    tier: 'C',
    description: 'Búp bê mạnh mẽ',
    skill: 'Giảm 10% tốc vật cản xuất hiện'
  },
  { 
    id: 'tigroligre', 
    name: 'Tigroligre Frutonni', 
    image: require('../../assets/images/character/Tigroligre-Frutonni.png'),
    cost: 1600, 
    tier: 'C',
    description: 'Hổ trái cây',
    skill: 'Nhặt trái cây → +50 coin'
  },
  { 
    id: 'bananita', 
    name: 'Bananita Dolfinita', 
    image: require('../../assets/images/character/Bananita-Dolfinita.png'),
    cost: 1800, 
    tier: 'C',
    description: 'Cá heo chuối',
    skill: 'Bơi qua vật cản thấp không chết'
  },
  { 
    id: 'crocodildo', 
    name: 'Crocodildo Penisini', 
    image: require('../../assets/images/character/Crocodildo-Penisini.png'),
    cost: 2000, 
    tier: 'C',
    description: 'Cá sấu hỗn',
    skill: 'Cắn phá 1 vật cản / 20s'
  },
  
  // TIER B - Hỗn cấp trung, mid-game
  { 
    id: 'ilcacto', 
    name: 'Il Cacto Hipopotamo', 
    image: require('../../assets/images/character/Il-Cacto-Hipopotamo.png'),
    cost: 2400, 
    tier: 'B',
    description: 'Hà mã xương rồng',
    skill: 'Shield gai: phản 50% sát thương'
  },
  { 
    id: 'trictrac', 
    name: 'Tric Trac Baraboom', 
    image: require('../../assets/images/character/Tric-Trac-baraboom.png'),
    cost: 2600, 
    tier: 'B',
    description: 'Thợ nổ điên',
    skill: 'Bomb nhỏ phá 1 lane / 25s'
  },
  { 
    id: 'burbaloni', 
    name: 'Burbaloni Lulilolli', 
    image: require('../../assets/images/character/Burbaloni-Lulilolli.png'),
    cost: 2800, 
    tier: 'B',
    description: 'Bong bóng kẹo',
    skill: 'Bay qua vật cản cao trong 3s'
  },
  { 
    id: 'patapim', 
    name: 'Brr Brr Patapim', 
    image: require('../../assets/images/character/Brr-Brr-Patapim.png'),
    cost: 3000, 
    tier: 'B',
    description: 'Chúa tể băng giá',
    skill: 'Đóng băng vật cản 5s / 30s'
  },
  
  // TIER A - Hỗn vừa phải nhưng sát thương lớn
  { 
    id: 'tripytrophy', 
    name: 'Tripy Trophy', 
    image: require('../../assets/images/character/Tripy-Trophy.png'),
    cost: 3600, 
    tier: 'A',
    description: 'Cúp chiến thắng',
    skill: '+30% điểm mỗi combo 10 coin'
  },
  { 
    id: 'trippitroppi', 
    name: 'Trippi Troppi', 
    image: require('../../assets/images/character/Trippi-Troppi.png'),
    cost: 3800, 
    tier: 'A',
    description: 'Song sinh hỗn loạn',
    skill: 'Clone ảo thu coin 10s / 45s'
  },
  { 
    id: 'tracotucotulu', 
    name: 'Tracotucotulu Delapeladustuz', 
    image: require('../../assets/images/character/Tracotucotulu-Delapeladustuz.png'),
    cost: 4000, 
    tier: 'A',
    description: 'Tên siêu dài siêu mạnh',
    skill: 'AOE shockwave phá 3 lanes / 40s'
  },
  { 
    id: 'tatatata', 
    name: 'Ta Ta Ta Ta Ta Sahur', 
    image: require('../../assets/images/character/Ta-Ta-Ta-Ta-Ta-Sahur.png'),
    cost: 4200, 
    tier: 'A',
    description: 'Chiến binh Sahur',
    skill: 'Berserk: +50% tốc độ 8s / 50s'
  },
  
  // TIER S - Siêu cấp hỗn loạn (mạnh nhất)
  { 
    id: 'tungtung', 
    name: 'Tung Tung Tung Sahur', 
    image: require('../../assets/images/character/Tung-Tung-Tung-Sahur.png'),
    cost: 5000, 
    tier: 'S',
    description: 'Festival master',
    skill: 'Buff +2x coin trong 15s / 60s'
  },
  { 
    id: 'brribrribibom', 
    name: 'Brri Brri Bicus Dicus Bombicus', 
    image: require('../../assets/images/character/Brri-Brri-Bicus-Dicus-Bombicus.png'),
    cost: 5400, 
    tier: 'S',
    description: 'Kamikaze master',
    skill: 'Khi chết → nổ phá toàn bộ vật cản'
  },
  { 
    id: 'udindindindindunma', 
    name: 'U Din Din Din Din Dun Ma', 
    image: require('../../assets/images/character/U-Din-Din-Din-Din-Dun-Ma.png'),
    cost: 5600, 
    tier: 'S',
    description: 'Thần chú hỗn loạn',
    skill: 'Invincible 5s mỗi 100m'
  },
  { 
    id: 'trippatroppa', 
    name: 'Trippa Troppa Tralala Lirili Rila Tung Tung Sahur', 
    image: require('../../assets/images/character/Trippa-Troppa-Tralala-Lirili-Rila-Tung-Tung-Sahur.png'),
    cost: 6000, 
    tier: 'S',
    description: 'BOSS CUỐI - Tên dài nhất',
    skill: 'All buffs: +2x coin, shield, +50% speed'
  },
];

const getTierColor = (tier) => {
  switch(tier) {
    case 'S': return ['#FF0080', '#FF00FF']; // Pink-Purple
    case 'A': return ['#FF4500', '#FFD700']; // Orange-Gold
    case 'B': return ['#00BFFF', '#1E90FF']; // Blue
    case 'C': return ['#32CD32', '#00FA9A']; // Green
    case 'D': return ['#808080', '#A9A9A9']; // Gray
    default: return ['#4A4A4A', '#6A6A6A'];
  }
};

export default function Shop({ 
  coins, 
  selectedCharacter, 
  unlockedCharacters, 
  onSelectCharacter, 
  onUnlockCharacter, 
  onBack 
}) {
  const handleCharacterPress = (character) => {
    if (unlockedCharacters.includes(character.id)) {
      onSelectCharacter(character.id);
    } else if (coins >= character.cost) {
      onUnlockCharacter(character.id, character.cost);
    }
  };

  const getButtonText = (character) => {
    if (selectedCharacter === character.id) {
      return '✅ ĐANG SỬ DỤNG';
    } else if (unlockedCharacters.includes(character.id)) {
      return '👉 CHỌN';
    } else if (coins >= character.cost) {
      return `💰 MUA (${character.cost})`;
    } else {
      return `🔒 KHÓA (${character.cost})`;
    }
  };

  const getButtonStyle = (character) => {
    if (selectedCharacter === character.id) {
      return styles.selectedButton;
    } else if (unlockedCharacters.includes(character.id)) {
      return styles.unlockedButton;
    } else if (coins >= character.cost) {
      return styles.buyButton;
    } else {
      return styles.lockedButton;
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#1a1a2e', '#16213e', '#0f3460']}
        style={styles.background}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={onBack}>
            <Text style={styles.backText}>← QUAY LẠI</Text>
          </TouchableOpacity>
          <View style={styles.coinsDisplay}>
            <Text style={styles.coinsText}>💰 {coins}</Text>
          </View>
        </View>
        
        {/* Title Section */}
        <View style={styles.titleContainer}>
          <LinearGradient
            colors={['#FF0080', '#FF00FF', '#00D4FF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.titleGradient}
          >
            <Text style={styles.titleMain}>🏪 CỬA HÀNG</Text>
            <Text style={styles.titleSub}>NHÂN VẬT BRAINROT</Text>
          </LinearGradient>
        </View>

        {/* Characters Grid */}
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.charactersGrid}
          showsVerticalScrollIndicator={false}
        >
          {CHARACTERS.map((character) => {
            const isSelected = selectedCharacter === character.id;
            const isUnlocked = unlockedCharacters.includes(character.id);
            const canBuy = coins >= character.cost;
            const tierColors = getTierColor(character.tier);

            return (
              <TouchableOpacity
                key={character.id}
                style={[
                  styles.characterCard,
                  isSelected && styles.characterCardSelected,
                ]}
                onPress={() => handleCharacterPress(character)}
                disabled={!isUnlocked && !canBuy}
              >
                <LinearGradient
                  colors={tierColors}
                  style={styles.cardGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  {/* Tier Badge */}
                  {character.tier !== 'Default' && (
                    <View style={[styles.tierBadge, { backgroundColor: tierColors[0] }]}>
                      <Text style={styles.tierText}>TIER {character.tier}</Text>
                    </View>
                  )}

                  {/* Character Image */}
                  <View style={styles.characterImageContainer}>
                    {character.image ? (
                      <Image 
                        source={character.image} 
                        style={[
                          styles.characterImage,
                          (!isUnlocked && !canBuy) && styles.lockedImage
                        ]}
                        resizeMode="contain"
                      />
                    ) : (
                      <Text style={styles.characterEmoji}>🤖</Text>
                    )}
                    {!isUnlocked && (
                      <View style={styles.lockOverlay}>
                        <Text style={styles.lockIcon}>🔒</Text>
                      </View>
                    )}
                  </View>

                  {/* Character Info */}
                  <View style={styles.characterInfo}>
                    <Text style={styles.characterName} numberOfLines={2}>
                      {character.name}
                    </Text>
                    <Text style={styles.characterDescription} numberOfLines={2}>
                      {character.description}
                    </Text>
                    <Text style={styles.characterSkill} numberOfLines={2}>
                      💪 {character.skill}
                    </Text>
                  </View>

                  {/* Action Button */}
                  <TouchableOpacity
                    style={[styles.actionButton, getButtonStyle(character)]}
                    onPress={() => handleCharacterPress(character)}
                    disabled={!isUnlocked && !canBuy}
                  >
                    <Text style={styles.buttonText}>
                      {getButtonText(character)}
                    </Text>
                  </TouchableOpacity>
                </LinearGradient>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 10,
  },
  backButton: {
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
  },
  backText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFE5EC',
  },
  titleContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 10,
    shadowColor: '#FF00FF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
  },
  titleGradient: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  titleMain: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
    textShadowColor: '#000',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 8,
    letterSpacing: 2,
  },
  titleSub: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 5,
    letterSpacing: 3,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  coinsDisplay: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  coinsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  scrollView: {
    flex: 1,
  },
  charactersGrid: {
    padding: 15,
    gap: 15,
  },
  characterCard: {
    marginBottom: 15,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  characterCardSelected: {
    borderWidth: 4,
    borderColor: '#FFD700',
  },
  cardGradient: {
    padding: 15,
    borderRadius: 20,
  },
  tierBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    zIndex: 10,
  },
  tierText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFF',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  characterImageContainer: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    position: 'relative',
  },
  characterImage: {
    width: '80%',
    height: '100%',
  },
  lockedImage: {
    opacity: 0.3,
  },
  characterEmoji: {
    fontSize: 80,
  },
  lockOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  lockIcon: {
    fontSize: 50,
  },
  characterInfo: {
    marginBottom: 15,
  },
  characterName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 5,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  characterDescription: {
    fontSize: 14,
    color: '#FFE5EC',
    marginBottom: 5,
    textAlign: 'center',
  },
  characterSkill: {
    fontSize: 12,
    color: '#4CAF50',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    borderRadius: 5,
  },
  actionButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: 'center',
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  selectedButton: {
    backgroundColor: '#4CAF50',
    borderColor: '#66BB6A',
  },
  unlockedButton: {
    backgroundColor: '#2196F3',
    borderColor: '#42A5F5',
  },
  buyButton: {
    backgroundColor: '#FFD700',
    borderColor: '#FFF',
  },
  lockedButton: {
    backgroundColor: '#555',
    borderColor: '#777',
    opacity: 0.6,
  },
});
