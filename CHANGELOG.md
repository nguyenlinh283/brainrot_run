# 📝 Changelog - BrainrotRun

Tất cả thay đổi quan trọng của project sẽ được ghi lại ở đây.

Format dựa trên [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [1.1.0] - Character Skills Update ⭐ **CURRENT**

### 🎭 Major Character System Overhaul

**THAY THẾ HỆ THỐNG NHÂN VẬT HOÀN TOÀN** - 13 nhân vật với kỹ năng độc đáo thay thế 6 nhân vật cũ!

#### ✨ 12 Nhân vật mới với kỹ năng đặc biệt:
1. 🎵 **Tralalero Tralala** (3,000 coins) - Sóng âm làm chậm vật cản
2. 🐊 **Bombardiro Crocodilo** (8,000 coins) - Ném bom phá vật cản  
3. 🎪 **Tung Tung Tung Sahur** (5,000 coins) - Buff lễ hội x2 coins
4. 🩰 **Ballerina Cappuccina** (4,000 coins) - Nhảy 2 lần trong không trung
5. ☕ **Cappuccino Assassino** (7,000 coins) - Tỷ lệ chí mạng 20% (x2 coins)
6. 🐦 **Lirilì Larilà** (6,000 coins) - Thú cưng tự động thu thập coins
7. ❄️ **Brr Brr Patapim** (5,500 coins) - Đường băng làm chậm khi chạy nhanh
8. 🐵 **Chimpanzini Bananini** (4,500 coins) - Ném vỏ chuối tạo bẫy
9. 💣 **Bombombini Gusini** (9,000 coins) - Nổ khi chết (cơ hội thứ 2)
10. 🐫 **Frigo Camello** (6,500 coins) - Khiên băng (60s cooldown)
11. 🦍 **Gorillo Watermellondrillo** (10,000 coins) - Hút coins dưa hấu siêu giá trị
12. 🦏 **Rhino Toasterino** (12,000 coins) - Tăng tốc phá vật cản (ultimate!)

#### 🎮 Hệ thống kỹ năng mới:
- ✅ 8 loại kỹ năng: periodic, passive, active, shield, pet, conditional, on-death, item
- ✅ Hệ thống làm chậm vật cản (50% speed reduction)
- ✅ Hệ thống nhân coins (x2 từ festival, x2 từ crit = x4 tổng!)
- ✅ Khiên chắn damage (recharge 60s)
- ✅ Nhảy đôi (Ballerina)
- ✅ Chí mạng 20% (Cappuccino)
- ✅ HUD hiển thị skill (✨ ACTIVE, 🛡️ SHIELD, coin multipliers)

#### 🔧 Thay đổi kỹ thuật:
- **FILE MỚI:** `src/utils/characterSkills.js` - Hệ thống skill module hóa
- **CẬP NHẬT:** `src/screens/Shop.js` - Mảng nhân vật mới, UI hiển thị skill
- **CẬP NHẬT:** `src/screens/GameScreen.js` - Tích hợp skill vào gameplay

#### 📚 Tài liệu mới:
- **NEW:** `docs/CHARACTER_SKILLS_GUIDE.md` - Hướng dẫn chi tiết từng nhân vật
  - Giải thích kỹ năng
  - Chiến thuật sử dụng
  - Tier list và đề xuất
  - FAQ
- **UPDATED:** `FEATURES.md` - Cập nhật danh sách nhân vật
- **UPDATED:** `CHANGELOG.md` - File này!

#### 💰 Cân bằng lại giá:
- Chi phí cũ: 500-2,000 coins
- Chi phí mới: 3,000-12,000 coins  
- Đường cong tiến độ dài hơn, satisfying hơn
- 4 tiers dựa trên sức mạnh skill

---

## [1.0.1] - 2025-11-26

### ✨ Added
- **New Record Effects**: Hiệu ứng đặc biệt khi phá kỷ lục
  - Flash overlay màu vàng
  - Scale animation cho score
  - Confetti rơi xuống
  - Text thông báo "KỶ LỤC MỚI!"
  - High score indicator hiển thị thường xuyên
  - Score chuyển màu vàng khi vượt kỷ lục

### 🎨 Improved
- High score tracking hiển thị rõ ràng hơn
- Visual feedback tốt hơn khi đạt thành tích mới

## [1.0.0] - 2025-11-26

### 🎉 Initial Release

#### ✨ Added
- **Core Gameplay**
  - Endless runner game loop với 60 FPS
  - 3-lane system (left, middle, right)
  - Player movement: lane switching, jump, slide
  - Progressive difficulty (speed increases over time)
  - Collision detection system

- **Gesture Controls**
  - Swipe left/right to change lanes
  - Swipe up to jump
  - Swipe down to slide
  - PanResponder implementation
  - Smooth animations

- **Obstacles System**
  - 2 types of obstacles:
    - High obstacles (🚧) - requires jump
    - Low obstacles (🔥) - requires slide
  - Random spawning
  - Dynamic spawn rate based on speed

- **Coin System**
  - Coin spawning during gameplay
  - Coin collection detection
  - Persistent coin storage
  - Multiple ways to earn coins:
    - Collect in game
    - Daily missions
    - Watch ads
    - Milestones (every 500m)

- **Character System**
  - 6 unlockable meme characters:
    - 🤖 Robot (default, free)
    - 🐸 Pepe (500 coins)
    - 🐕 Doge (750 coins)
    - 😢 Wojak (1,000 coins)
    - 😎 Gigachad (1,500 coins)
    - 🤡 NPC (2,000 coins)
  - Character unlock mechanic
  - Character selection system
  - Character persistence

- **Daily Missions**
  - 3 daily missions:
    - Run 500m (+50 coins)
    - Collect 50 coins (+30 coins)
    - Play 3 games (+40 coins)
  - Progress tracking
  - Auto-reset at midnight
  - Reward claiming system
  - Mission persistence

- **Milestone System**
  - Bonus coins every 500m
  - Real-time milestone detection
  - Visual feedback on achievement

- **Data Persistence**
  - AsyncStorage integration
  - Auto-save on game over
  - Save/load:
    - Total coins
    - High score
    - Unlocked characters
    - Selected character
    - Daily missions progress

- **UI/UX**
  - Main Menu screen
  - Game Screen with HUD
  - Game Over screen
  - Shop screen
  - Daily Missions screen
  - Beautiful gradient backgrounds
  - Smooth screen transitions
  - Responsive design
  - Touch feedback

- **Game Features**
  - High score tracking
  - Score display (distance in meters)
  - Real-time coin counter
  - Speed indicator
  - New record notification
  - Controls hint overlay

- **Reward System**
  - Ad reward button (+50 coins)
  - Daily mission rewards
  - Milestone bonuses
  - Collection rewards

#### 📁 Project Structure
- React Native + Expo setup
- Modular screen components
- Clean code architecture
- AsyncStorage for persistence
- Linear Gradient for aesthetics

#### 📚 Documentation
- README.md - Project overview
- QUICKSTART.md - Quick setup guide
- FEATURES.md - Detailed feature list
- BUILD_GUIDE.md - Production build guide
- GAME_SUMMARY.md - Game summary
- GAMEPLAY_GUIDE.md - Player guide
- CHANGELOG.md - This file

#### ⚙️ Configuration
- package.json with all dependencies
- app.json with Expo config
- babel.config.js
- .gitignore

#### 🎨 Assets
- Assets folder structure
- Icon/splash placeholders
- Asset requirements documentation

---

## [Unreleased]

### 🚀 Planned Features

#### 🎵 Audio (v1.1.0)
- [ ] Background music
- [ ] Sound effects:
  - [ ] Coin collect
  - [ ] Jump/slide
  - [ ] Collision
  - [ ] UI clicks
  - [ ] Milestone achievement
- [ ] Volume controls
- [ ] Mute toggle

#### ⚡ Power-ups (v1.2.0)
- [ ] Magnet (auto-collect coins)
- [ ] Shield (one-time protection)
- [ ] Double coins (2x multiplier)
- [ ] Slow-mo (reduce speed temporarily)
- [ ] Jetpack (fly over obstacles)

#### 🌍 Themes/Biomes (v1.3.0)
- [ ] City theme
- [ ] Forest theme
- [ ] Desert theme
- [ ] Space theme
- [ ] Underwater theme
- [ ] Dynamic theme switching

#### 🏆 Social Features (v2.0.0)
- [ ] Online leaderboard
- [ ] Friend system
- [ ] Share score to social media
- [ ] Friend challenges
- [ ] Weekly tournaments

#### 🎯 Additional Content (v2.1.0)
- [ ] 10+ more characters
- [ ] Character customization
- [ ] Outfit system
- [ ] Trail effects
- [ ] Emotes

#### 🎮 Game Modes (v2.2.0)
- [ ] Time Attack mode
- [ ] Coin Rush mode
- [ ] Challenge mode
- [ ] Multiplayer race
- [ ] Boss battles

#### 🎨 Polish (v1.4.0)
- [ ] Particle effects
- [ ] Screen shake on collision
- [ ] Better animations
- [ ] Loading screen
- [ ] Transition effects

#### 📊 Analytics (v2.3.0)
- [ ] Play statistics
- [ ] Session tracking
- [ ] Crash reporting
- [ ] Performance monitoring

#### 💰 Monetization (v3.0.0)
- [ ] Real ad integration (AdMob)
- [ ] In-app purchases
- [ ] Remove ads purchase
- [ ] Premium characters
- [ ] Coin packs

#### 🏅 Achievements (v2.4.0)
- [ ] 50+ achievements
- [ ] Achievement rewards
- [ ] Badge system
- [ ] Progress tracking
- [ ] Rare achievements

---

## Version History

### Version Naming
- **Major** (X.0.0): Significant changes, new major features
- **Minor** (1.X.0): New features, improvements
- **Patch** (1.0.X): Bug fixes, small tweaks

### Release Schedule
- **Patch updates**: Every 1-2 weeks
- **Minor updates**: Every 1-2 months
- **Major updates**: Every 3-6 months

---

## Bug Tracking

### Known Issues
- None currently! 🎉

### Fixed Issues
- None yet (initial release)

---

## Contributing

### How to Report Bugs
1. Check if issue already exists
2. Provide detailed description
3. Include steps to reproduce
4. Share device info and OS version

### How to Request Features
1. Open an issue on GitHub
2. Describe the feature
3. Explain use case
4. Provide mockups if possible

---

## Credits

### Development
- Game Design: BrainrotRun Team
- Programming: React Native + Expo
- UI/UX: Material-inspired gradient design

### Inspiration
- Subway Surfers
- Temple Run
- Crossy Road
- Brainrot meme culture

### Special Thanks
- Expo team for amazing tools
- React Native community
- All the meme creators
- Early testers

---

## License

MIT License - See LICENSE file for details

---

**Current Version**: 1.0.0  
**Status**: ✅ Production Ready  
**Last Updated**: November 26, 2025

---

Keep running! 🏃💨
