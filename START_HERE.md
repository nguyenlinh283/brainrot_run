# 🎮 BẮT ĐẦU TẠI ĐÂY!

Chào mừng bạn đến với **BrainrotRun**! 🧠🏃

## 🚀 Bạn muốn làm gì?

### 👨‍💻 Tôi là Developer - Muốn chạy game

**🚨 CHƯA CÀI GÌ CẢ?**
- 📖 **Hướng dẫn chi tiết từ A-Z**: [`SETUP_GUIDE_COMPLETE.md`](SETUP_GUIDE_COMPLETE.md)
- ⚡ **Hướng dẫn siêu nhanh (5 phút)**: [`QUICK_START_5MIN.md`](QUICK_START_5MIN.md)

**ĐÃ CÀI NODE.JS & EXPO GO?**

1. **Cài đặt nhanh**:
   ```powershell
   cd "e:\OusideProject\Game\Brainrot Run"
   npm install
   npm start
   ```

2. **Quét QR code** với Expo Go app trên điện thoại

3. **Chơi ngay!** 🎮

---

### 🎮 Tôi là Player - Muốn chơi game

Game đang trong quá trình phát triển!

**Để chơi:**
1. Tải Expo Go app (Android/iOS)
2. Nhận QR code từ developer
3. Quét và chơi!

👉 Hướng dẫn chơi: [`GAMEPLAY_GUIDE.md`](GAMEPLAY_GUIDE.md)

---

### 📱 Tôi muốn build app để publish

**Build Android APK:**
```powershell
npm install -g eas-cli
eas login
eas build -p android
```

**Build iOS:**
```powershell
eas build -p ios
```

👉 Hướng dẫn chi tiết: [`BUILD_GUIDE.md`](BUILD_GUIDE.md)

---

### 📚 Tôi muốn tìm hiểu về game

**Đọc theo thứ tự:**

1. 📖 [`GAME_SUMMARY.md`](GAME_SUMMARY.md) - Game là gì?
2. ✨ [`FEATURES.md`](FEATURES.md) - Có tính năng gì?
3. 🎮 [`GAMEPLAY_GUIDE.md`](GAMEPLAY_GUIDE.md) - Chơi như thế nào?
4. 📝 [`CHANGELOG.md`](CHANGELOG.md) - Version history

---

### 🔧 Tôi muốn sửa code / thêm feature

**Bắt đầu với:**

1. 📂 [`FILE_INDEX.md`](FILE_INDEX.md) - Cấu trúc project
2. 📖 [`README.md`](README.md) - Technical docs
3. 💻 `src/screens/` - Source code

**Key files:**
- `App.js` - Main container
- `src/screens/GameScreen.js` - Core gameplay
- `src/screens/Shop.js` - Character shop

---

## ⚡ Quick Commands

```powershell
# Cài đặt dependencies
npm install

# Chạy development server
npm start

# Chạy trên Android
npm run android

# Chạy trên iOS
npm run ios

# Chạy trên Web
npm run web

# Build production
eas build -p android
```

---

## 📋 Checklist Setup

- [ ] Node.js đã cài đặt? (`node --version`)
- [ ] npm hoạt động? (`npm --version`)
- [ ] Đã chạy `npm install`?
- [ ] Đã cài Expo Go trên điện thoại?
- [ ] Điện thoại và máy tính cùng WiFi?

✅ Tất cả OK? → Chạy `npm start`!

---

## 🎯 Game Overview

**BrainrotRun** là endless runner game với:
- 🏃 Chạy vô tận
- 🎮 Điều khiển vuốt (swipe)
- 💰 Thu thập coins
- 🤖 6 nhân vật meme
- 📋 Nhiệm vụ hàng ngày
- 🏆 High score tracking

---

## 📱 Platforms

- ✅ **Android** (Expo Go / APK)
- ✅ **iOS** (Expo Go / IPA)
- ✅ **Web** (Browser)

---

## 🆘 Gặp vấn đề?

### Lỗi "npm không được nhận dạng"
→ Cài Node.js: https://nodejs.org/

### Lỗi "expo không được nhận dạng"
→ Chạy: `npm install -g expo-cli`

### Không kết nối được với điện thoại
→ Kiểm tra cùng WiFi, hoặc dùng: `expo start --tunnel`

### Lỗi dependencies
→ Chạy: `npm install --legacy-peer-deps`

---

## 📚 All Documentation

| File | Purpose | For |
|------|---------|-----|
| [`README.md`](README.md) | Main documentation | Developers |
| [`QUICKSTART.md`](QUICKSTART.md) | Quick setup (VI) | Developers |
| [`FEATURES.md`](FEATURES.md) | Feature list | Everyone |
| [`GAMEPLAY_GUIDE.md`](GAMEPLAY_GUIDE.md) | How to play | Players |
| [`BUILD_GUIDE.md`](BUILD_GUIDE.md) | Build for production | Publishers |
| [`GAME_SUMMARY.md`](GAME_SUMMARY.md) | Game overview | Everyone |
| [`CHANGELOG.md`](CHANGELOG.md) | Version history | Everyone |
| [`FILE_INDEX.md`](FILE_INDEX.md) | File structure | Developers |
| `START_HERE.md` | This file! | New users |

---

## 🎨 Project Structure

```
BrainrotRun/
├── 📱 App.js              # Main app
├── 🎮 src/screens/        # Game screens
├── 📚 *.md files          # Documentation
├── ⚙️ Config files        # Setup
└── 🎨 assets/             # Icons, images
```

---

## 🚀 Next Steps

1. **Developers**: Chạy `npm install` → `npm start`
2. **Players**: Đợi build APK/IPA
3. **Contributors**: Đọc code trong `src/screens/`
4. **Publishers**: Đọc `BUILD_GUIDE.md`

---

## 🎉 Let's Go!

Chọn role của bạn ở trên và bắt đầu! 🏃💨

**Quick start cho dev:**
```powershell
npm install && npm start
```

**Questions?** Đọc các file `.md` trong project!

---

**Version**: 1.0.0  
**Status**: ✅ Ready to run!  
**Updated**: November 26, 2025

Happy coding! 🧠✨
