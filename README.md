# 🧠 BrainrotRun - Endless Meme Runner

Game chạy vô tận với chủ đề meme "brainrot" được xây dựng bằng React Native và Expo.

> 🚀 **Người dùng mới?** Bắt đầu tại [`START_HERE.md`](START_HERE.md)  
> ⚡ **Chưa cài gì cả?** Xem [`SETUP_GUIDE_COMPLETE.md`](SETUP_GUIDE_COMPLETE.md) hoặc [`QUICK_START_5MIN.md`](QUICK_START_5MIN.md)

## 🎮 Tính năng

### Core Gameplay
- **Endless Runner**: Chạy vô tận với tốc độ tăng dần
- **Điều khiển cử chỉ**:
  - Vuốt trái/phải: Đổi lane
  - Vuốt lên: Nhảy (tránh vật cản cao)
  - Vuốt xuống: Trượt (tránh vật cản thấp)
- **3 lane**: Hệ thống 3 làn đường
- **Vật cản**: 2 loại - Cao (🚧) và Thấp (🔥)
- **Tốc độ tăng dần**: Game càng khó hơn theo thời gian

### Hệ thống Coins
Kiếm coins qua nhiều cách:
- 💰 Nhặt coins khi chạy
- 📋 Hoàn thành nhiệm vụ hàng ngày
- 📺 Xem quảng cáo thưởng (+50 coins)
- 🎯 Đạt milestone (mỗi 500m = +100 coins)

### Nhân vật Brainrot
6 nhân vật meme có thể mở khóa:
- 🤖 **Robot** (Mặc định) - Miễn phí
- 🐸 **Pepe the Frog** - 500 coins
- 🐕 **Doge** - 750 coins
- 😢 **Wojak** - 1,000 coins
- 😎 **Gigachad** - 1,500 coins
- 🤡 **NPC** - 2,000 coins

### Nhiệm vụ hàng ngày
3 nhiệm vụ làm mới mỗi ngày:
- 🏃 Chạy 500m (+50 coins)
- 💰 Thu thập 50 coins (+30 coins)
- 🎮 Chơi 3 lần (+40 coins)

### Tính năng khác
- Lưu trữ tiến trình với AsyncStorage
- High score tracking
- Hệ thống milestone
- UI/UX gradient đẹp mắt
- Responsive design

## 🚀 Cài đặt và Chạy

### Yêu cầu
- Node.js (v14 trở lên)
- npm hoặc yarn
- Expo CLI
- Expo Go app trên điện thoại (để test)

### Bước 1: Cài đặt dependencies
```bash
cd "e:\OusideProject\Game\Brainrot Run"
npm install
```

### Bước 2: Cài đặt Expo CLI (nếu chưa có)
```bash
npm install -g expo-cli
```

### Bước 3: Chạy project
```bash
npm start
# hoặc
expo start
```

### Bước 4: Test trên thiết bị
1. Cài đặt **Expo Go** app từ:
   - iOS: App Store
   - Android: Google Play Store

2. Quét QR code từ terminal/browser

3. Game sẽ chạy trên điện thoại của bạn!

## 📱 Build cho Production

### Android APK
```bash
expo build:android
```

### iOS
```bash
expo build:ios
```

## 🎯 Cách chơi

1. **Bắt đầu**: Nhấn "▶️ CHƠI NGAY" từ màn hình menu
2. **Điều khiển**: 
   - Vuốt trái/phải để chuyển lane
   - Vuốt lên để nhảy qua vật cản cao
   - Vuốt xuống để trượt qua vật cản thấp
3. **Mục tiêu**: Chạy càng xa càng tốt và thu thập coins
4. **Mở khóa**: Dùng coins để mở khóa nhân vật mới trong Shop

## 🛠️ Cấu trúc Project

```
Brainrot Run/
├── App.js                          # Main app component
├── app.json                        # Expo config
├── package.json                    # Dependencies
├── babel.config.js                 # Babel config
└── src/
    └── screens/
        ├── MainMenu.js             # Màn hình menu chính
        ├── GameScreen.js           # Màn hình chơi game
        ├── GameOver.js             # Màn hình game over
        ├── Shop.js                 # Màn hình shop nhân vật
        └── DailyMissions.js        # Màn hình nhiệm vụ
```

## 🎨 Customization

### Thêm nhân vật mới
Chỉnh sửa `src/screens/Shop.js`:
```javascript
const CHARACTERS = [
  { id: 'newchar', name: 'Tên', emoji: '😀', cost: 1000, description: 'Mô tả' },
  // ...
];
```

### Điều chỉnh độ khó
Chỉnh sửa `src/screens/GameScreen.js`:
- `speed`: Tốc độ ban đầu
- Spawn intervals: Tần suất sinh vật cản/coins
- Collision detection: Độ chính xác va chạm

### Thêm nhiệm vụ mới
Chỉnh sửa `App.js` trong hàm `resetDailyMissions()`.

## 🐛 Troubleshooting

### Lỗi "Metro bundler không chạy"
```bash
expo start -c
```

### Lỗi dependencies
```bash
npm install --legacy-peer-deps
```

### Lỗi cache
```bash
expo start -c
# hoặc
rm -rf node_modules
npm install
```

## 📝 TODO / Future Features

- [ ] Thêm power-ups (speed boost, magnet, shield)
- [ ] Leaderboard online
- [ ] Chế độ multiplayer
- [ ] Thêm nhiều theme/biomes
- [ ] Sound effects và background music
- [ ] Particle effects
- [ ] Achievement system mở rộng
- [ ] Social sharing

## 👨‍💻 Tech Stack

- React Native
- Expo
- AsyncStorage (local storage)
- Linear Gradient
- PanResponder (gesture handling)
- Animated API

## 📄 License

MIT License - Free to use and modify!

## 🎉 Enjoy the game!

Have fun running and collecting those coins! 🏃💰🧠
