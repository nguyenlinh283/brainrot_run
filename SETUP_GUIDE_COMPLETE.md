# 🚀 HƯỚNG DẪN CHẠY GAME TỪ CON SỐ 0

## 📋 Mục lục
1. [Cài đặt công cụ cần thiết](#bước-1-cài-đặt-công-cụ)
2. [Cài đặt dependencies của project](#bước-2-cài-đặt-dependencies)
3. [Chạy game](#bước-3-chạy-game)
4. [Test trên điện thoại](#bước-4-test-trên-điện-thoại)
5. [Giải quyết lỗi thường gặp](#lỗi-thường-gặp)

---

## 🎯 Bước 1: Cài đặt công cụ

### 1.1. Cài Node.js (BẮT BUỘC)

**Node.js là gì?** 
- Môi trường chạy JavaScript trên máy tính
- Cần thiết để chạy React Native

**Cách cài:**

1. **Tải Node.js:**
   - Truy cập: https://nodejs.org/
   - Tải phiên bản **LTS** (khuyên dùng) - nút màu xanh
   - Ví dụ: Node.js 20.x.x LTS

2. **Cài đặt:**
   - Windows: Chạy file `.msi` vừa tải
   - Click "Next" → "Next" → "Install"
   - **QUAN TRỌNG:** Tick vào ô "Automatically install necessary tools"
   - Đợi cài đặt xong (3-5 phút)
   - Click "Finish"

3. **Kiểm tra cài đặt thành công:**
   
   Mở **PowerShell** (hoặc Command Prompt):
   - Nhấn `Windows + R`
   - Gõ: `powershell`
   - Nhấn Enter
   
   Gõ lệnh sau và nhấn Enter:
   ```powershell
   node --version
   ```
   
   Nếu thấy hiện ra số version (ví dụ: `v20.10.0`) → **Thành công!** ✅
   
   Tiếp tục kiểm tra npm:
   ```powershell
   npm --version
   ```
   
   Nếu thấy số version (ví dụ: `10.2.3`) → **Thành công!** ✅

**❌ Nếu báo lỗi "không được nhận dạng":**
- Khởi động lại máy tính
- Mở lại PowerShell và thử lại
- Nếu vẫn lỗi, cài lại Node.js

---

### 1.2. Cài Expo Go App trên điện thoại (Để test game)

**Expo Go là gì?**
- App cho phép chạy game React Native trực tiếp trên điện thoại
- Không cần build APK/IPA

**Cách cài:**

**📱 Android:**
1. Mở Google Play Store
2. Tìm kiếm: "Expo Go"
3. Cài đặt app (màu tím, logo Expo)
4. Link: https://play.google.com/store/apps/details?id=host.exp.exponent

**📱 iOS:**
1. Mở App Store
2. Tìm kiếm: "Expo Go"
3. Cài đặt app
4. Link: https://apps.apple.com/app/expo-go/id982107779

---

## 🎯 Bước 2: Cài đặt dependencies

### 2.1. Mở PowerShell tại thư mục project

**Cách 1: Từ File Explorer**
1. Mở File Explorer
2. Vào thư mục: `e:\OusideProject\Game\Brainrot Run`
3. Click vào thanh địa chỉ phía trên
4. Gõ: `powershell`
5. Nhấn Enter

**Cách 2: Từ PowerShell**
1. Mở PowerShell (Windows + R → gõ `powershell`)
2. Gõ lệnh:
   ```powershell
   cd "e:\OusideProject\Game\Brainrot Run"
   ```
3. Nhấn Enter

**Kiểm tra:**
- Bạn sẽ thấy đường dẫn thay đổi thành:
  ```
  PS e:\OusideProject\Game\Brainrot Run>
  ```

---

### 2.2. Cài đặt dependencies

**Dependencies là gì?**
- Các thư viện cần thiết để game chạy
- React Native, Expo, AsyncStorage, v.v.

**Lệnh cài đặt:**

```powershell
npm install
```

**Nhấn Enter và đợi...**

**Quá trình này sẽ:**
- Tải về hàng trăm thư viện
- Tạo thư mục `node_modules/`
- Mất khoảng 3-10 phút (tùy tốc độ mạng)

**Bạn sẽ thấy:**
```
npm WARN deprecated ...
added 1234 packages in 5m
```

**⚠️ Nếu gặp lỗi:**

Thử lệnh này:
```powershell
npm install --legacy-peer-deps
```

Hoặc:
```powershell
npm install --force
```

**✅ Thành công khi:**
- Không có chữ **ERROR** màu đỏ
- Có thư mục `node_modules` trong project
- File `package-lock.json` được tạo

---

### 2.3. Cài Expo CLI (Tùy chọn nhưng khuyên dùng)

**Expo CLI là gì?**
- Command line tool để chạy Expo project
- Giúp quản lý dễ hơn

**Cài đặt global:**

```powershell
npm install -g expo-cli
```

**⚠️ Lưu ý:**
- Flag `-g` = global (cài toàn hệ thống)
- Mất 2-3 phút

**Kiểm tra:**
```powershell
expo --version
```

Nếu thấy số version → **Thành công!** ✅

---

## 🎯 Bước 3: Chạy game

### 3.1. Start development server

**Từ PowerShell trong thư mục project:**

```powershell
npm start
```

Hoặc nếu đã cài Expo CLI:
```powershell
expo start
```

**Đợi 1-2 phút...**

**Bạn sẽ thấy:**

1. **Terminal hiện:**
   ```
   Metro waiting on exp://192.168.x.x:8081
   
   › Press a │ open Android
   › Press i │ open iOS simulator
   › Press w │ open web
   ```

2. **Trình duyệt tự động mở** (Expo DevTools)
   - Hiển thị QR code
   - Danh sách options

**✅ Server đang chạy khi:**
- Thấy QR code
- Không có chữ ERROR
- Terminal không tự tắt

---

## 🎯 Bước 4: Test trên điện thoại

### 4.1. Kết nối điện thoại và máy tính

**QUAN TRỌNG:**
- ✅ Điện thoại và máy tính **PHẢI cùng mạng WiFi**
- ❌ Không dùng 4G/5G trên điện thoại
- ❌ Không dùng VPN

**Kiểm tra:**
1. Máy tính → Settings → WiFi → Xem tên mạng
2. Điện thoại → Settings → WiFi → Xem tên mạng
3. Đảm bảo 2 tên giống nhau

---

### 4.2. Quét QR code

**Cách 1: Dùng Expo Go app (Khuyên dùng)**

**📱 Android:**
1. Mở app **Expo Go**
2. Chọn tab "Projects"
3. Tap "Scan QR code"
4. Quét QR code từ terminal hoặc browser
5. Đợi game load (30-60 giây lần đầu)

**📱 iOS:**
1. Mở app **Camera** (camera mặc định)
2. Quét QR code
3. Tap vào notification hiện ra
4. App Expo Go sẽ tự mở
5. Đợi game load

**Cách 2: Nhập URL thủ công**

1. Mở Expo Go app
2. Tap "Enter URL manually"
3. Gõ URL từ terminal (dạng: `exp://192.168.x.x:8081`)
4. Tap "Connect"

---

### 4.3. Game đang load

**Bạn sẽ thấy:**
1. Màn hình trắng + "Loading..."
2. Progress bar
3. "Building JavaScript bundle..."

**Đợi 30-60 giây lần đầu**

---

### 4.4. Game đã load thành công! 🎉

**Bạn sẽ thấy:**
- Màn hình menu chính của game
- Gradient hồng-tím
- "🧠 BrainrotRun 🏃"
- Các nút: CHƠI NGAY, Shop, Nhiệm vụ

**✅ Thành công! Giờ bạn có thể:**
- Tap "CHƠI NGAY" để chơi
- Vuốt trái/phải/lên/xuống để điều khiển
- Thu thập coins
- Mở khóa nhân vật

---

## 🎮 Cách chơi nhanh

**Điều khiển:**
- **⬅️ Vuốt TRÁI** = Chuyển lane trái
- **➡️ Vuốt PHẢI** = Chuyển lane phải
- **⬆️ Vuốt LÊN** = Nhảy (tránh vật cản cao 🚧)
- **⬇️ Vuốt XUỐNG** = Trượt (tránh vật cản thấp 🔥)

**Mục tiêu:**
- Chạy xa nhất có thể
- Thu thập coins 💰
- Tránh vật cản
- Phá kỷ lục cũ

---

## 🔧 Hot Reload (Sửa code real-time)

**Tính năng tuyệt vời:**
- Sửa code trong VSCode
- Lưu file (Ctrl + S)
- Game tự động reload trên điện thoại!

**Ví dụ:**
1. Mở file `src/screens/MainMenu.js`
2. Tìm dòng: `title: '🧠 BrainrotRun 🏃'`
3. Đổi thành: `title: '🧠 Game của tôi 🏃'`
4. Save (Ctrl + S)
5. Xem game trên điện thoại tự động cập nhật!

---

## ❌ Lỗi thường gặp

### Lỗi 1: "npm không được nhận dạng"

**Nguyên nhân:** Node.js chưa cài hoặc chưa nhận đường dẫn

**Giải pháp:**
1. Khởi động lại máy tính
2. Cài lại Node.js từ https://nodejs.org/
3. Đảm bảo tick "Add to PATH" khi cài

---

### Lỗi 2: "Unable to resolve module"

**Nguyên nhân:** Dependencies chưa cài đủ

**Giải pháp:**
```powershell
# Xóa node_modules và cài lại
Remove-Item -Recurse -Force node_modules
npm install
```

---

### Lỗi 3: "Network error" / Không kết nối được

**Nguyên nhân:** Không cùng WiFi hoặc firewall chặn

**Giải pháp:**
1. Kiểm tra cùng WiFi
2. Tắt VPN
3. Thử dùng tunnel mode:
   ```powershell
   expo start --tunnel
   ```
4. Tắt Windows Firewall tạm thời
5. Khởi động lại server: Ctrl+C → `npm start`

---

### Lỗi 4: "Port 8081 already in use"

**Nguyên nhân:** Port đang bị dùng

**Giải pháp:**
```powershell
# Dùng port khác
expo start --port 8082
```

Hoặc kill process:
```powershell
# Tìm process
netstat -ano | findstr :8081

# Kill process (thay PID bằng số process)
taskkill /PID <số_PID> /F
```

---

### Lỗi 5: QR code không quét được

**Giải pháp:**
1. Dùng URL thay vì QR
2. Copy URL từ terminal: `exp://192.168.x.x:8081`
3. Paste vào Expo Go app

---

### Lỗi 6: "Metro bundler failed to start"

**Giải pháp:**
```powershell
# Clear cache
expo start -c
```

Hoặc:
```powershell
# Reset hoàn toàn
expo start -c --clear
```

---

## 📱 Các cách chạy khác (Nâng cao)

### Option 1: Android Emulator (Nếu có)

**Yêu cầu:**
- Android Studio đã cài
- Android Emulator đã setup

**Chạy:**
```powershell
npm run android
```

---

### Option 2: iOS Simulator (Chỉ macOS)

**Yêu cầu:**
- macOS
- Xcode đã cài

**Chạy:**
```powershell
npm run ios
```

---

### Option 3: Web Browser

**Chạy trên trình duyệt:**
```powershell
npm run web
```

Hoặc trong Expo DevTools, nhấn `w`

**Lưu ý:**
- Gesture controls có thể không hoạt động tốt
- Dùng để test UI nhanh
- Không khuyên dùng để chơi game

---

## 🎯 Workflow làm việc chuẩn

### Mỗi lần code:

1. **Mở PowerShell tại project folder**
   ```powershell
   cd "e:\OusideProject\Game\Brainrot Run"
   ```

2. **Start server**
   ```powershell
   npm start
   ```

3. **Quét QR trên điện thoại**
   - Mở Expo Go
   - Quét QR code

4. **Code và test**
   - Sửa code trong VSCode
   - Save → Auto reload trên điện thoại
   - Test ngay lập tức

5. **Khi xong, tắt server**
   - Nhấn `Ctrl + C` trong PowerShell
   - Confirm: `Y`

---

## 📊 Checklist hoàn chỉnh

### Lần đầu tiên:

- [ ] ✅ Cài Node.js
- [ ] ✅ Kiểm tra `node --version`
- [ ] ✅ Kiểm tra `npm --version`
- [ ] ✅ Cài Expo Go app trên điện thoại
- [ ] ✅ Vào thư mục project trong PowerShell
- [ ] ✅ Chạy `npm install`
- [ ] ✅ Đợi cài xong (thấy node_modules/)
- [ ] ✅ (Tùy chọn) Cài `expo-cli` global

### Mỗi lần chạy:

- [ ] ✅ Mở PowerShell tại thư mục project
- [ ] ✅ Chạy `npm start`
- [ ] ✅ Đợi QR code hiện ra
- [ ] ✅ Đảm bảo cùng WiFi
- [ ] ✅ Mở Expo Go trên điện thoại
- [ ] ✅ Quét QR code
- [ ] ✅ Đợi game load
- [ ] ✅ Chơi game / Test tính năng

---

## 🎓 Tips hữu ích

### Tip 1: Shake để mở Dev Menu

**Trên điện thoại:**
- Lắc điện thoại → Dev menu mở
- Chọn "Reload" để reload thủ công
- Chọn "Debug" để debug

### Tip 2: Xem logs

**Trong terminal:**
- Tất cả logs hiển thị real-time
- `console.log()` trong code sẽ hiện ở đây

### Tip 3: Fast Refresh

**Mặc định bật:**
- Save file → Auto reload
- Giữ nguyên state của app
- Cực kỳ nhanh

### Tip 4: Clear cache khi lỗi lạ

```powershell
expo start -c
```

### Tip 5: Multiple devices

**Có thể test trên nhiều điện thoại cùng lúc:**
- Quét QR trên nhiều máy
- Tất cả đều update khi save code

---

## 📖 Tài nguyên học thêm

### Official Docs:
- **Expo**: https://docs.expo.dev/
- **React Native**: https://reactnative.dev/
- **Node.js**: https://nodejs.org/docs/

### Video Tutorials:
- YouTube: "Expo tutorial for beginners"
- YouTube: "React Native setup"

---

## 🆘 Cần trợ giúp?

### Nếu vẫn gặp lỗi:

1. **Đọc lỗi kỹ** trong terminal
2. **Google lỗi** đó với từ khóa "expo" hoặc "react native"
3. **Stack Overflow** thường có câu trả lời
4. **Expo Forums**: https://forums.expo.dev/

### Các lệnh debug hữu ích:

```powershell
# Kiểm tra version
node --version
npm --version
expo --version

# Xem info
expo diagnostics

# Xóa cache
expo start -c --clear

# Reset hoàn toàn
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

---

## 🎉 Chúc mừng!

Nếu bạn đã làm đến đây và game chạy được trên điện thoại:

**🎊 BẠN ĐÃ THÀNH CÔNG! 🎊**

Giờ bạn có thể:
- ✅ Chạy game React Native
- ✅ Test trực tiếp trên điện thoại
- ✅ Sửa code và xem kết quả ngay
- ✅ Phát triển thêm tính năng mới
- ✅ Build thành APK/IPA sau này

---

## 📝 Quick Reference

**Command thường dùng:**

```powershell
# Vào thư mục
cd "e:\OusideProject\Game\Brainrot Run"

# Cài dependencies
npm install

# Chạy app
npm start

# Clear cache
expo start -c

# Dùng tunnel (nếu không kết nối được)
expo start --tunnel

# Tắt server
Ctrl + C
```

**Shortcuts trong Expo DevTools:**
- `a` - Mở Android emulator
- `i` - Mở iOS simulator  
- `w` - Mở web browser
- `r` - Reload app
- `m` - Toggle menu

---

**Version**: 1.0.1  
**Last Updated**: November 26, 2025  
**Status**: ✅ Complete Guide

Chúc bạn code vui vẻ! 🧠🏃💻✨
