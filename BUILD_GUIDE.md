# 📦 Hướng dẫn Build Production

## 🚀 Build APK/IPA cho Production

### Chuẩn bị

1. **Tạo tài khoản Expo**
   ```powershell
   expo register
   # Hoặc login nếu đã có
   expo login
   ```

2. **Cài đặt EAS CLI** (Expo Application Services)
   ```powershell
   npm install -g eas-cli
   ```

3. **Login EAS**
   ```powershell
   eas login
   ```

4. **Configure project**
   ```powershell
   eas build:configure
   ```

## 🤖 Build Android APK

### Build APK (cho testing)
```powershell
eas build -p android --profile preview
```

### Build AAB (cho Google Play Store)
```powershell
eas build -p android --profile production
```

### Download APK
Sau khi build xong, EAS sẽ cho link download.
Hoặc xem tại: https://expo.dev/accounts/[your-username]/projects/brainrotrun/builds

## 🍎 Build iOS IPA

**Lưu ý**: Cần Apple Developer Account ($99/năm)

### Build cho testing (Ad-hoc)
```powershell
eas build -p ios --profile preview
```

### Build cho App Store
```powershell
eas build -p ios --profile production
```

## 🌐 Build Web Version

```powershell
expo build:web
```

Files sẽ được generate vào thư mục `web-build/`

### Deploy lên Netlify/Vercel
```powershell
# Install Netlify CLI
npm install -g netlify-cli

# Build
expo build:web

# Deploy
netlify deploy --dir=web-build --prod
```

## ⚙️ EAS Build Configuration

Tạo file `eas.json` (nếu chưa có):

```json
{
  "build": {
    "preview": {
      "android": {
        "buildType": "apk"
      }
    },
    "production": {
      "android": {
        "buildType": "app-bundle"
      },
      "ios": {
        "buildType": "archive"
      }
    }
  }
}
```

## 📝 Checklist trước khi build

- [ ] Test game thoroughly trên Expo Go
- [ ] Kiểm tra tất cả features hoạt động
- [ ] Thêm icon và splash screen
- [ ] Update version trong `app.json`
- [ ] Viết mô tả app
- [ ] Prepare screenshots (cho store listing)
- [ ] Review permissions required

## 🎨 Assets Required

### Icon
- **1024x1024px** PNG
- Không viền, nền trong suốt hoặc màu solid
- Place tại: `assets/icon.png`

### Splash Screen
- **1242x2436px** PNG (iPhone X)
- Design centered, safe area aware
- Place tại: `assets/splash.png`

### Adaptive Icon (Android)
- **1024x1024px** PNG
- Foreground layer + background color
- Place tại: `assets/adaptive-icon.png`

### Screenshots (Store Listing)
Cần ít nhất:
- 2-5 screenshots cho Android (720x1280 or higher)
- 3-5 screenshots cho iOS (1242x2688 for iPhone)

Capture:
- Main menu
- Gameplay
- Shop
- Character selection
- High score

## 🏪 Publish lên Store

### Google Play Store

1. **Tạo Developer Account** ($25 one-time)
   - https://play.google.com/console

2. **Create new app**
   - Upload AAB file
   - Fill app details
   - Upload screenshots
   - Set pricing (free)

3. **Submit for review**
   - Usually 1-3 days

### Apple App Store

1. **Apple Developer Program** ($99/year)
   - https://developer.apple.com

2. **App Store Connect**
   - Create new app
   - Upload IPA via Transporter
   - Fill metadata
   - Upload screenshots

3. **Submit for review**
   - Usually 1-3 days (can be longer)

## 🔐 App Permissions

Game này cần permissions tối thiểu:
- ✅ Internet (cho ads nếu integrate)
- ✅ Storage (cho AsyncStorage)

## 📊 Version Management

Update `app.json`:
```json
{
  "expo": {
    "version": "1.0.0",
    "android": {
      "versionCode": 1
    },
    "ios": {
      "buildNumber": "1"
    }
  }
}
```

Mỗi lần update:
- Tăng `version` (1.0.0 → 1.0.1)
- Tăng `versionCode` (Android)
- Tăng `buildNumber` (iOS)

## 🐛 Common Build Issues

### "Build failed"
```powershell
# Check logs
eas build:list

# Retry with clean cache
eas build -p android --clear-cache
```

### "Icon not found"
- Ensure assets/icon.png exists
- Must be exactly 1024x1024px
- Must be PNG format

### "Splash screen error"
- Check assets/splash.png
- Correct dimensions
- Valid PNG file

## 💰 Cost Estimate

| Service | Cost |
|---------|------|
| Expo EAS Build | Free tier: 30 builds/month |
| Google Play Developer | $25 one-time |
| Apple Developer | $99/year |
| Web Hosting | Free (Netlify/Vercel) |

## 🎯 Build Times

- Android APK: ~10-15 minutes
- Android AAB: ~15-20 minutes
- iOS IPA: ~20-30 minutes
- Web: ~2-5 minutes (local)

## 🔗 Useful Links

- Expo Build Docs: https://docs.expo.dev/build/introduction/
- EAS Build: https://expo.dev/eas
- Google Play Console: https://play.google.com/console
- App Store Connect: https://appstoreconnect.apple.com

## ✅ After Publishing

1. **Monitor crashes** (Expo Application Services)
2. **Respond to reviews**
3. **Update regularly** (bug fixes, new features)
4. **Track analytics**
5. **Engage with users**

---

Good luck với việc publish game! 🚀🎮
