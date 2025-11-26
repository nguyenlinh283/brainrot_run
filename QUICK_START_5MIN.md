# ⚡ CHẠY GAME TRONG 5 PHÚT

Hướng dẫn siêu ngắn gọn để chạy game nhanh nhất!

---

## Bước 1: Cài Node.js (2 phút)

1. Vào: https://nodejs.org/
2. Tải phiên bản **LTS** (nút xanh)
3. Cài đặt → Next → Next → Install
4. **Khởi động lại máy tính**

**Kiểm tra:**
```powershell
node --version
npm --version
```
Thấy số version = OK ✅

---

## Bước 2: Cài Expo Go trên điện thoại (1 phút)

**Android:** 
- Play Store → Tìm "Expo Go" → Cài đặt

**iOS:** 
- App Store → Tìm "Expo Go" → Cài đặt

---

## Bước 3: Cài dependencies (3-5 phút)

Mở PowerShell tại thư mục project:
- Vào `e:\OusideProject\Game\Brainrot Run` trong File Explorer
- Gõ `powershell` vào thanh địa chỉ → Enter

Chạy lệnh:
```powershell
npm install
```

Đợi cài xong (3-5 phút)

---

## Bước 4: Chạy game (30 giây)

```powershell
npm start
```

Đợi QR code hiện ra trong terminal/browser

---

## Bước 5: Quét QR trên điện thoại (30 giây)

1. **Đảm bảo điện thoại và máy tính cùng WiFi** ⚠️
2. Mở app **Expo Go** 
3. Quét QR code
4. Đợi game load (30-60s)
5. **Chơi!** 🎮

---

## 🎮 Điều khiển

- **⬅️ Vuốt trái** = Lane trái
- **➡️ Vuốt phải** = Lane phải  
- **⬆️ Vuốt lên** = Nhảy
- **⬇️ Vuốt xuống** = Trượt

---

## ❌ Lỗi phổ biến

### "npm không được nhận dạng"
→ Khởi động lại máy sau khi cài Node.js

### "Network error"
→ Kiểm tra cùng WiFi, thử:
```powershell
expo start --tunnel
```

### "Module not found"
→ Chạy lại:
```powershell
npm install
```

---

## 🆘 Cần hướng dẫn chi tiết hơn?

Xem file: **`SETUP_GUIDE_COMPLETE.md`**

---

## ✅ Checklist nhanh

- [ ] Node.js đã cài? (`node --version`)
- [ ] Expo Go đã cài trên điện thoại?
- [ ] `npm install` đã chạy?
- [ ] Cùng WiFi?
- [ ] `npm start` đã chạy?
- [ ] QR code đã quét?

---

**Tổng thời gian:** ~10 phút (lần đầu)  
**Các lần sau:** ~30 giây (chỉ cần `npm start`)

🎉 Good luck!
