# 🔧 XỬ LÝ LỖI & TROUBLESHOOTING

Tập hợp các lỗi thường gặp và cách khắc phục.

---

## 📋 Mục lục

1. [Lỗi cài đặt](#lỗi-cài-đặt)
2. [Lỗi kết nối](#lỗi-kết-nối)
3. [Lỗi dependencies](#lỗi-dependencies)
4. [Lỗi Metro bundler](#lỗi-metro-bundler)
5. [Lỗi trên điện thoại](#lỗi-trên-điện-thoại)
6. [Lỗi khác](#lỗi-khác)

---

## 🔴 Lỗi cài đặt

### ❌ "npm không được nhận dạng"

**Nguyên nhân:** Node.js chưa được cài đặt hoặc chưa được thêm vào PATH

**Giải pháp:**

1. **Kiểm tra Node.js đã cài chưa:**
   - Mở Control Panel → Programs → Installed programs
   - Tìm "Node.js"
   - Nếu không thấy → Cài lại từ https://nodejs.org/

2. **Khởi động lại máy tính**
   - Sau khi cài Node.js, PHẢI khởi động lại
   - Không khởi động lại = npm không hoạt động

3. **Kiểm tra lại:**
   ```powershell
   node --version
   npm --version
   ```

4. **Nếu vẫn lỗi - Thêm PATH thủ công:**
   - Nhấn `Windows + R` → gõ `sysdm.cpl` → Enter
   - Tab "Advanced" → "Environment Variables"
   - Tìm "Path" trong "System variables"
   - Edit → New → Thêm: `C:\Program Files\nodejs\`
   - OK → Khởi động lại

---

### ❌ "expo không được nhận dạng"

**Nguyên nhân:** Expo CLI chưa cài hoặc PATH issue

**Giải pháp:**

1. **Cài Expo CLI:**
   ```powershell
   npm install -g expo-cli
   ```

2. **Nếu vẫn lỗi, dùng npx:**
   ```powershell
   npx expo start
   ```

3. **Hoặc dùng npm script:**
   ```powershell
   npm start
   ```

---

### ❌ "Permission denied" / "EACCES"

**Nguyên nhân:** Windows không cho phép

**Giải pháp:**

1. **Chạy PowerShell as Administrator:**
   - Nhấn `Windows + X`
   - Chọn "Windows PowerShell (Admin)"
   - Chạy lại lệnh

2. **Hoặc thay đổi quyền npm:**
   ```powershell
   npm config set prefix %APPDATA%\npm
   ```

---

## 🌐 Lỗi kết nối

### ❌ "Unable to connect" / "Network error"

**Nguyên nhân:** Điện thoại và máy tính không kết nối được

**Giải pháp:**

**1. Kiểm tra cùng WiFi:**
   - Máy tính: Settings → Network & Internet → WiFi
   - Điện thoại: Settings → WiFi
   - Đảm bảo tên mạng giống hệt nhau
   - ⚠️ KHÔNG dùng 4G/5G trên điện thoại

**2. Tắt VPN:**
   - Tắt VPN trên cả máy tính và điện thoại
   - VPN thường chặn kết nối local

**3. Tắt Firewall tạm thời:**
   - Windows Defender Firewall → Turn off (Private network)
   - Test lại
   - Nhớ bật lại sau khi xong

**4. Dùng Tunnel mode:**
   ```powershell
   expo start --tunnel
   ```
   - Chậm hơn nhưng hoạt động qua internet
   - Cần đăng nhập Expo account

**5. Kiểm tra IP:**
   ```powershell
   ipconfig
   ```
   - Tìm "IPv4 Address" (ví dụ: 192.168.1.100)
   - Đảm bảo không phải 127.0.0.1 (localhost)

**6. Restart router:**
   - Tắt router 30 giây
   - Bật lại
   - Kết nối lại cả 2 thiết bị

---

### ❌ QR code không quét được

**Giải pháp:**

**1. Nhập URL thủ công:**
   - Mở Expo Go
   - Tap "Enter URL manually"
   - Copy URL từ terminal: `exp://192.168.x.x:8081`
   - Paste và Connect

**2. Làm sáng màn hình:**
   - Tăng độ sáng màn hình máy tính
   - QR code dễ quét hơn

**3. Dùng browser QR code:**
   - Mở http://localhost:19002
   - QR code lớn hơn, rõ hơn

---

### ❌ "Port 8081 already in use"

**Nguyên nhân:** Port đã bị process khác sử dụng

**Giải pháp:**

**1. Dùng port khác:**
   ```powershell
   expo start --port 8082
   ```

**2. Kill process đang dùng port:**
   ```powershell
   # Tìm process ID
   netstat -ano | findstr :8081
   
   # Kill process (thay 1234 bằng PID)
   taskkill /PID 1234 /F
   ```

**3. Restart máy:**
   - Cách đơn giản nhất
   - Giải phóng tất cả ports

---

## 📦 Lỗi dependencies

### ❌ "Cannot find module" / "Module not found"

**Nguyên nhân:** Dependencies không được cài đầy đủ

**Giải pháp:**

**1. Cài lại dependencies:**
   ```powershell
   npm install
   ```

**2. Xóa và cài lại:**
   ```powershell
   Remove-Item -Recurse -Force node_modules
   Remove-Item package-lock.json
   npm install
   ```

**3. Dùng --legacy-peer-deps:**
   ```powershell
   npm install --legacy-peer-deps
   ```

**4. Clear npm cache:**
   ```powershell
   npm cache clean --force
   npm install
   ```

---

### ❌ "Peer dependency" warnings

**Không phải lỗi nghiêm trọng!**

**Giải pháp:**

**1. Bỏ qua (thường vẫn chạy):**
   - Warnings không phải errors
   - App vẫn có thể chạy bình thường

**2. Nếu muốn fix:**
   ```powershell
   npm install --legacy-peer-deps
   ```

---

### ❌ "npm ERR! code EINTEGRITY"

**Nguyên nhân:** Corrupted package hoặc cache

**Giải pháp:**

```powershell
# Clear cache
npm cache clean --force

# Xóa node_modules
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json

# Cài lại
npm install
```

---

## 🚀 Lỗi Metro bundler

### ❌ "Metro bundler failed to start"

**Giải pháp:**

**1. Clear Metro cache:**
   ```powershell
   expo start -c
   ```

**2. Reset hoàn toàn:**
   ```powershell
   expo start -c --clear
   ```

**3. Xóa cache thủ công:**
   ```powershell
   Remove-Item -Recurse -Force $env:TEMP\metro-*
   Remove-Item -Recurse -Force $env:TEMP\haste-map-*
   ```

**4. Restart từ đầu:**
   ```powershell
   # Tắt Metro (Ctrl+C)
   # Xóa cache
   expo start -c
   ```

---

### ❌ "Syntax Error" / "Unexpected token"

**Nguyên nhân:** Lỗi code hoặc file bị lỗi

**Giải pháp:**

**1. Đọc error message kỹ:**
   - Sẽ chỉ file và dòng bị lỗi
   - Ví dụ: `GameScreen.js:45:12`

**2. Kiểm tra syntax:**
   - Thiếu dấu `,` `}` `)`
   - Quote không đóng: `"text`
   - Comment sai: `/* comment`

**3. Undo thay đổi gần nhất:**
   - Ctrl + Z trong editor
   - Xem code trước khi bị lỗi

**4. Copy lại code từ backup:**
   - Nếu không biết lỗi ở đâu

---

### ❌ "Transform error" / "Babel error"

**Giải pháp:**

```powershell
# Clear babel cache
Remove-Item -Recurse -Force node_modules\.cache

# Restart
expo start -c
```

---

## 📱 Lỗi trên điện thoại

### ❌ "Something went wrong"

**Giải pháp:**

**1. Reload app:**
   - Lắc điện thoại
   - Chọn "Reload"

**2. Clear Expo Go cache:**
   - Vào Settings trong Expo Go
   - Clear cache
   - Quét QR lại

**3. Xóa và cài lại Expo Go:**
   - Uninstall app
   - Cài lại từ store

---

### ❌ App bị crash khi chạy

**Giải pháp:**

**1. Xem logs trong terminal:**
   - Lỗi sẽ hiện trong PowerShell
   - Đọc error message

**2. Check console.log:**
   - Thêm `console.log()` vào code
   - Xem logs để debug

**3. Try catch:**
   ```javascript
   try {
     // code có thể lỗi
   } catch (error) {
     console.log('Lỗi:', error);
   }
   ```

---

### ❌ Gesture không hoạt động

**Nguyên nhân:** Có thể là lỗi PanResponder

**Giải pháp:**

**1. Kiểm tra code gesture:**
   - Xem file `GameScreen.js`
   - Đảm bảo PanResponder được setup đúng

**2. Test bằng touch event:**
   - Thử thêm `onPress` để test
   - Xem touch có hoạt động không

**3. Kiểm tra z-index:**
   - Có element nào che không?

---

### ❌ "Invariant Violation"

**Nguyên nhân:** Lỗi React/React Native

**Giải pháp:**

**1. Đọc full error message:**
   - Thường chỉ rõ vấn đề

**2. Common causes:**
   - `<View>` bên trong `<Text>` (sai!)
   - Props truyền sai type
   - Component không return đúng

**3. Reload app:**
   ```powershell
   expo start -c
   ```

---

## 🔧 Lỗi khác

### ❌ "Watchman" errors

**Giải pháp:**

**1. Tăng watchers (Linux/Mac):**
   ```bash
   echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
   sudo sysctl -p
   ```

**2. Windows thường không gặp vấn đề này**

---

### ❌ Out of memory

**Giải pháp:**

**1. Close các app khác**

**2. Tăng memory cho Node:**
   ```powershell
   $env:NODE_OPTIONS="--max-old-space-size=4096"
   npm start
   ```

---

### ❌ Slow performance / Lag

**Giải pháp:**

**1. Dev mode luôn chậm hơn production**

**2. Optimize code:**
   - Tránh re-render không cần thiết
   - Use React.memo
   - Optimize images

**3. Test production build:**
   ```powershell
   eas build -p android
   ```

---

## 🧹 Reset hoàn toàn (Last resort)

Nếu tất cả đều không work:

```powershell
# 1. Xóa tất cả
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
Remove-Item -Recurse -Force .expo

# 2. Clear npm cache
npm cache clean --force

# 3. Cài lại
npm install

# 4. Clear Expo cache
expo start -c --clear
```

---

## 📝 Debug checklist

Khi gặp lỗi, check theo thứ tự:

- [ ] ✅ Node.js version >= 14?
- [ ] ✅ npm install đã chạy?
- [ ] ✅ node_modules/ folder tồn tại?
- [ ] ✅ Cùng WiFi?
- [ ] ✅ Firewall tắt?
- [ ] ✅ VPN tắt?
- [ ] ✅ Đã restart server?
- [ ] ✅ Đã clear cache?
- [ ] ✅ Đã restart máy?

---

## 🆘 Vẫn không được?

### Option 1: Google error message
```
[error message] + "expo" + "react native"
```

### Option 2: Stack Overflow
- https://stackoverflow.com/
- Tag: react-native, expo

### Option 3: Expo Forums
- https://forums.expo.dev/
- Hỏi trực tiếp

### Option 4: GitHub Issues
- https://github.com/expo/expo/issues
- Tìm issue tương tự

---

## 💡 Tips phòng tránh lỗi

**1. Luôn commit code trước khi thử nghiệm**
   - Git để backup
   - Dễ rollback nếu lỗi

**2. Test trên device thật, không chỉ emulator**
   - Performance khác nhau
   - Gesture khác nhau

**3. Clear cache thường xuyên**
   - Mỗi lần lỗi lạ → clear cache trước

**4. Cập nhật dependencies**
   ```powershell
   npm update
   ```

**5. Đọc docs**
   - Expo docs: https://docs.expo.dev/
   - React Native docs: https://reactnative.dev/

---

## 📊 Error severity

**🟢 Warnings (Màu vàng):**
- Không cần fix ngay
- App vẫn chạy được
- Nên fix khi có thời gian

**🟡 Deprecation:**
- Tính năng sắp bị xóa
- Cần update code
- Không ảnh hưởng ngay

**🔴 Errors (Màu đỏ):**
- PHẢI fix
- App không chạy được
- Ưu tiên cao nhất

---

**Last Updated**: November 26, 2025  
**Version**: 1.0.1

Chúc bạn fix bug thành công! 🔧✨
