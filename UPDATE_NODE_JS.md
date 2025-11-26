# 🔄 Update Node.js - Yêu cầu cho Expo SDK 54

## ⚠️ Vấn đề

Expo SDK 54 yêu cầu **Node.js >= 20.19.4**  
Hiện tại bạn đang dùng: **Node.js 18.20.6**

## ✅ Giải pháp: Update Node.js

### Cách 1: Download trực tiếp (Khuyên dùng)

1. **Tải Node.js LTS mới nhất:**
   - Truy cập: https://nodejs.org/
   - Download phiên bản **LTS** (Long Term Support)
   - Chọn bản **Windows Installer (.msi) 64-bit**

2. **Cài đặt:**
   - Chạy file .msi vừa tải
   - Click "Next" → "Next" → "Install"
   - Khởi động lại máy tính (hoặc ít nhất đóng/mở lại PowerShell)

3. **Kiểm tra version mới:**
   ```powershell
   node --version
   ```
   Phải hiển thị: `v20.x.x` hoặc `v22.x.x`

### Cách 2: Dùng nvm-windows (Nâng cao)

Nếu bạn muốn quản lý nhiều phiên bản Node.js:

1. **Cài nvm-windows:**
   - Download: https://github.com/coreybutler/nvm-windows/releases
   - File: `nvm-setup.exe`

2. **Cài Node.js 20:**
   ```powershell
   nvm install 20
   nvm use 20
   ```

3. **Kiểm tra:**
   ```powershell
   node --version
   ```

---

## 🚀 Sau khi update Node.js xong:

### Bước 1: Xác nhận version
```powershell
node --version
```
Phải >= 20.19.4

### Bước 2: Cài lại dependencies
```powershell
# Tại thư mục: E:\OusideProject\Game\Brainrot Run

# Xóa node_modules (nếu chưa xóa)
Remove-Item -Recurse -Force node_modules

# Cài lại với Node mới
yarn
# hoặc
npm install
```

### Bước 3: Chạy game
```powershell
npm start
# hoặc
npx expo start
```

### Bước 4: Quét QR code
- Mở **Expo Go** trên điện thoại (phải SDK 54)
- Quét QR code từ terminal
- Game sẽ load!

---

## 📝 Tóm tắt đã update:

### Files đã sửa:
- ✅ `package.json` - Updated to SDK 54
  - expo: ~50.0.0 → ~54.0.0
  - react: 18.2.0 → 18.3.1
  - react-native: 0.73.0 → 0.76.5
  - expo-linear-gradient: ~12.7.0 → ~14.0.1
  - @react-native-async-storage: 1.21.0 → ~2.1.0

- ✅ `app.json` - Added sdkVersion: "54.0.0"
- ✅ Version: 1.0.1 → 1.1.0

### Yêu cầu:
- ✅ Node.js >= 20.19.4 (CẦN CÀI MỚI!)
- ✅ Expo Go SDK 54 (đã có trên điện thoại)

---

## ❓ FAQ

**Q: Tôi có mất code không khi update Node.js?**  
A: KHÔNG! Code của bạn an toàn 100%. Chỉ cài thêm Node.js mới.

**Q: Mất bao lâu để update?**  
A: ~5-10 phút (download + cài đặt + yarn install)

**Q: Có cần xóa Node.js cũ không?**  
A: KHÔNG cần. Installer sẽ tự động replace.

**Q: Sau khi cài xong làm gì?**  
A: Chạy `yarn` ở thư mục game → `npm start` → Quét QR!

---

## 🎯 Checklist

- [ ] Download Node.js LTS từ https://nodejs.org/
- [ ] Cài đặt Node.js mới
- [ ] Khởi động lại PowerShell
- [ ] Chạy `node --version` → Phải >= 20.x.x
- [ ] Chạy `yarn` ở thư mục game
- [ ] Chạy `npm start`
- [ ] Quét QR code với Expo Go
- [ ] Chơi game với character skills mới! 🎮

---

**Hãy update Node.js trước, sau đó chạy `yarn` lại là được!** 🚀
