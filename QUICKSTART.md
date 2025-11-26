# 🎮 HƯỚNG DẪN CHẠY GAME NHANH

## Bước 1: Cài đặt Node.js và npm
Nếu chưa có, tải và cài đặt từ: https://nodejs.org/

## Bước 2: Mở Terminal/PowerShell tại thư mục project
```powershell
cd "e:\OusideProject\Game\Brainrot Run"
```

## Bước 3: Cài đặt dependencies
```powershell
npm install
```

Nếu gặp lỗi, thử:
```powershell
npm install --legacy-peer-deps
```

## Bước 4: Cài đặt Expo CLI (chỉ cần 1 lần)
```powershell
npm install -g expo-cli
```

## Bước 5: Chạy game
```powershell
npm start
```

Hoặc:
```powershell
expo start
```

## Bước 6: Test trên điện thoại

### Cách 1: Quét QR Code (Khuyên dùng)
1. Cài app **Expo Go** trên điện thoại:
   - Android: https://play.google.com/store/apps/details?id=host.exp.exponent
   - iOS: https://apps.apple.com/app/expo-go/id982107779

2. Quét QR code hiện trong terminal hoặc browser

3. Game sẽ load trên điện thoại!

### Cách 2: Android Emulator
```powershell
npm run android
```

### Cách 3: iOS Simulator (chỉ trên macOS)
```powershell
npm run ios
```

### Cách 4: Web Browser (để test nhanh)
```powershell
npm run web
```

## ⚠️ Lưu ý quan trọng

- **Điện thoại và máy tính phải cùng mạng WiFi** khi dùng Expo Go
- Lần đầu chạy có thể mất vài phút để build
- Nếu gặp lỗi cache, chạy: `expo start -c`

## 🎯 Kiểm tra cài đặt

Kiểm tra Node.js:
```powershell
node --version
```

Kiểm tra npm:
```powershell
npm --version
```

Kiểm tra Expo:
```powershell
expo --version
```

## 🆘 Gặp vấn đề?

### Lỗi "expo không được nhận dạng"
- Restart terminal
- Hoặc cài lại: `npm install -g expo-cli`

### Lỗi port đã được sử dụng
```powershell
expo start --port 8081
```

### Lỗi Metro bundler
```powershell
expo start -c --clear
```

### Không connect được với điện thoại
- Kiểm tra firewall
- Dùng tunnel mode: `expo start --tunnel`

## 📱 Chơi game

Sau khi game load trên điện thoại:
- **Vuốt trái/phải**: Chuyển làn
- **Vuốt lên**: Nhảy
- **Vuốt xuống**: Trượt
- **Mục tiêu**: Chạy xa nhất có thể và thu thập coins!

## 🎉 Chúc vui vẻ!
