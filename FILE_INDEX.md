# 📂 Project File Index

## 📁 Root Files

### Core Application Files
| File | Purpose |
|------|---------|
| `App.js` | Main application component, screen routing, state management |
| `app.json` | Expo configuration (app name, icons, splash, etc.) |
| `package.json` | Dependencies and npm scripts |
| `babel.config.js` | Babel transpiler configuration |
| `.gitignore` | Git ignore rules |
| `LICENSE` | MIT License |

### Documentation Files
| File | Purpose | Audience |
|------|---------|----------|
| `README.md` | Main project documentation | Developers |
| `QUICKSTART.md` | Quick setup guide in Vietnamese | New developers |
| `FEATURES.md` | Complete feature list and status | Everyone |
| `GAMEPLAY_GUIDE.md` | How to play the game | Players |
| `BUILD_GUIDE.md` | Production build instructions | Developers |
| `GAME_SUMMARY.md` | High-level game overview | Everyone |
| `CHANGELOG.md` | Version history and updates | Everyone |
| `FILE_INDEX.md` | This file - project structure | Developers |

## 📁 src/ Directory

### src/screens/
Game screen components (5 files total)

| File | Lines | Purpose |
|------|-------|---------|
| `MainMenu.js` | ~150 | Main menu with stats, buttons, navigation |
| `GameScreen.js` | ~400 | Core gameplay loop, physics, collisions |
| `GameOver.js` | ~150 | Game over screen with stats and options |
| `Shop.js` | ~250 | Character shop and unlock system |
| `DailyMissions.js` | ~250 | Daily missions screen and rewards |

**Total Code**: ~1,200 lines across 5 screens

## 📁 assets/ Directory

| Item | Status | Required For |
|------|--------|--------------|
| `icon.png` | ❌ Not created | App icon (1024x1024) |
| `splash.png` | ❌ Not created | Splash screen (1242x2436) |
| `adaptive-icon.png` | ❌ Not created | Android icon (1024x1024) |
| `favicon.png` | ❌ Not created | Web favicon (48x48) |
| `README.md` | ✅ Created | Asset guidelines |

**Note**: Assets are optional for development but required for production builds.

## 📊 File Statistics

### Code Files
```
Total Code Files: 6
- App.js: 250 lines
- MainMenu.js: 150 lines
- GameScreen.js: 400 lines
- GameOver.js: 150 lines
- Shop.js: 250 lines
- DailyMissions.js: 250 lines
Total: ~1,450 lines of React Native code
```

### Documentation Files
```
Total Documentation: 8 files
Total Documentation Words: ~15,000+
```

### Configuration Files
```
- package.json
- app.json
- babel.config.js
- .gitignore
Total: 4 config files
```

## 🗂️ File Organization

```
BrainrotRun/
│
├── 📱 Core App
│   ├── App.js                    # Main entry point
│   ├── app.json                  # Expo config
│   ├── package.json              # Dependencies
│   └── babel.config.js           # Babel setup
│
├── 🎮 Game Screens
│   └── src/screens/
│       ├── MainMenu.js           # Menu + navigation
│       ├── GameScreen.js         # Gameplay
│       ├── GameOver.js           # Results
│       ├── Shop.js               # Character shop
│       └── DailyMissions.js      # Missions screen
│
├── 🎨 Assets
│   └── assets/
│       └── README.md             # Asset guide
│
├── 📚 Documentation
│   ├── README.md                 # Main docs
│   ├── QUICKSTART.md             # Quick start (VI)
│   ├── FEATURES.md               # Feature list
│   ├── GAMEPLAY_GUIDE.md         # Player guide (VI)
│   ├── BUILD_GUIDE.md            # Build guide
│   ├── GAME_SUMMARY.md           # Game overview
│   ├── CHANGELOG.md              # Version history
│   └── FILE_INDEX.md             # This file
│
└── ⚙️ Config
    ├── .gitignore                # Git ignore
    └── LICENSE                   # MIT License
```

## 📖 Documentation Guide

### For New Developers
Read in this order:
1. `README.md` - Overview
2. `QUICKSTART.md` - Setup
3. `FEATURES.md` - Features
4. `FILE_INDEX.md` - Structure (this file)

### For Players
Read in this order:
1. `GAME_SUMMARY.md` - What is this game?
2. `GAMEPLAY_GUIDE.md` - How to play?

### For Publishers
Read in this order:
1. `GAME_SUMMARY.md` - Game overview
2. `FEATURES.md` - Feature list
3. `BUILD_GUIDE.md` - How to build

### For Contributors
Read in this order:
1. `README.md` - Project overview
2. `CHANGELOG.md` - Recent changes
3. `FILE_INDEX.md` - Code structure
4. Source code in `src/screens/`

## 🔍 File Dependencies

### App.js depends on:
- All screen components (src/screens/*)
- AsyncStorage (@react-native-async-storage/async-storage)
- LinearGradient (expo-linear-gradient)

### GameScreen.js depends on:
- React Native Animated API
- PanResponder API
- Dimensions API

### All screens depend on:
- React Native core components
- StyleSheet API
- Basic JavaScript/ES6

## 💾 Data Flow

```
App.js (State Container)
   ↓
   ├→ MainMenu (read coins, highScore)
   ├→ GameScreen (read character)
   │     ↓
   │  onGameOver(score, coins)
   │     ↓
   ├→ GameOver (read/write coins, highScore)
   ├→ Shop (read/write coins, characters)
   └→ DailyMissions (read/write missions)
        ↓
   AsyncStorage (Persistence)
```

## 🎯 Key Files to Understand

### For Gameplay Changes:
👉 `src/screens/GameScreen.js`
- Game loop logic
- Physics and collision
- Obstacle spawning
- Difficulty scaling

### For UI/UX Changes:
👉 All files in `src/screens/`
- Each screen is self-contained
- Styles defined at bottom of each file

### For Economy Balancing:
👉 `App.js`
- Daily mission rewards
- Milestone bonuses

👉 `src/screens/Shop.js`
- Character costs
- Unlock logic

### For Adding Features:
👉 `App.js`
- Add new state variables
- Add new screens
- Update navigation

## 📝 File Naming Conventions

- **Components**: PascalCase (e.g., `MainMenu.js`)
- **Config files**: lowercase (e.g., `package.json`)
- **Documentation**: UPPERCASE (e.g., `README.md`)

## 🔄 File Lifecycle

### Development
1. Edit `.js` files
2. Save (auto-reload in Expo)
3. Test on device/emulator
4. Update documentation if needed

### Adding Features
1. Create/modify screen in `src/screens/`
2. Update `App.js` for state/navigation
3. Update `FEATURES.md`
4. Update `CHANGELOG.md`

### Before Release
1. Update version in `app.json`
2. Update `CHANGELOG.md`
3. Create/update assets in `assets/`
4. Run `eas build`

## 🎨 Code Style

- **Indentation**: 2 spaces
- **Quotes**: Single quotes for strings
- **Semicolons**: Yes
- **Components**: Functional components with hooks
- **Styling**: StyleSheet API at bottom of file

## 📦 Package Dependencies

See `package.json` for full list. Key dependencies:
- `react`: ^18.2.0
- `react-native`: ^0.73.0
- `expo`: ~50.0.0
- `@react-native-async-storage/async-storage`: ^1.21.0
- `expo-linear-gradient`: ~12.7.0

## 🚀 Quick File Access

### Want to change...
- **Game speed?** → `GameScreen.js` (line ~20, `SPEED` constant)
- **Character prices?** → `Shop.js` (line ~10, `CHARACTERS` array)
- **Mission rewards?** → `App.js` (line ~50, `resetDailyMissions()`)
- **Colors?** → Any screen's `StyleSheet` section
- **App name?** → `app.json` (line ~3)

## 📞 Support Files

For questions about:
- **Setup**: See `QUICKSTART.md`
- **Features**: See `FEATURES.md`
- **Gameplay**: See `GAMEPLAY_GUIDE.md`
- **Building**: See `BUILD_GUIDE.md`
- **Contributing**: See `CHANGELOG.md`

---

**File Count Summary:**
- 📱 Code: 6 files (~1,450 lines)
- 📚 Docs: 8 files (~15,000 words)
- ⚙️ Config: 4 files
- 🎨 Assets: 1 guide

**Total Project Files:** 19 files
**Total Project Size:** ~50KB (without node_modules)

---

Last Updated: November 26, 2025
Version: 1.0.0
