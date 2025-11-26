# Assets Folder

Thư mục này chứa các assets cho game:

## Icon và Splash Screen

Bạn cần tạo các file sau:
- `icon.png` - Icon app (1024x1024px)
- `splash.png` - Splash screen (1242x2436px)
- `adaptive-icon.png` - Android adaptive icon (1024x1024px)
- `favicon.png` - Web favicon (48x48px)

## Tạo Assets nhanh

### Cách 1: Sử dụng công cụ online
Truy cập: https://www.appicon.co/
- Upload một hình ảnh game của bạn
- Tải về tất cả kích thước cần thiết

### Cách 2: Tạo placeholder đơn giản
Bạn có thể tạm thời dùng icon mặc định của Expo:
1. Tạo file PNG với màu nền gradient hồng (#FF6B9D)
2. Thêm emoji 🧠 hoặc 🏃 vào giữa
3. Export theo kích thước yêu cầu

### Cách 3: AI Art Generator
Sử dụng Midjourney, DALL-E, hoặc Stable Diffusion với prompt:
- "Brainrot meme character running game icon, colorful, neon colors, gaming style"

## Dimensions

- **icon.png**: 1024 x 1024 px
- **splash.png**: 1242 x 2436 px (iPhone X)
- **adaptive-icon.png**: 1024 x 1024 px (Android)
- **favicon.png**: 48 x 48 px (Web)

## Màu sắc game

Theme chính:
- Primary: #FF6B9D (Hồng)
- Secondary: #C06C84 (Hồng đậm)
- Tertiary: #6C5B7B (Tím)
- Accent: #00FF88 (Xanh neon)
- Gold: #FFD700 (Vàng)

## Note

Hiện tại project sẽ báo warning về thiếu assets, nhưng vẫn chạy được bình thường.
Thêm các file icon/splash khi bạn muốn build production app.
