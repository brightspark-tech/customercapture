# CustomerCapture - Development Environment Setup Guide

This is an [Expo](https://expo.dev) managed application project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Required Administrator Permissions
Students will need administrator permissions for:
1. Installing Node.js and npm
2. Installing Android Studio and SDKs
3. Setting system environment variables
4. Installing global npm packages
5. Running Android emulators

## System Requirements
- Windows 10/11 or macOS 12+
- Minimum 8GB RAM (16GB recommended)
- At least 20GB free disk space
- Intel or AMD processor with virtualization support
- Virtualization enabled in BIOS (for Android emulator)

## Complete Setup Instructions

### 1. Node.js Installation (Admin Required)
1. Download Node.js LTS version (18.x or later) from https://nodejs.org/
2. Run the installer with administrator privileges
3. Verify installation:
   ```bash
   node --version
   npm --version
   ```

### 2. Android Studio Setup (Admin Required)
1. Download Android Studio from https://developer.android.com/studio
2. Run the installer with administrator privileges
3. During installation, ensure the following components are selected:
   - Android SDK
   - Android SDK Platform
   - Android Virtual Device
   - Performance (Intel HAXM)
4. After installation, open Android Studio and install additional components:
   - Open Tools → SDK Manager
   - Under "SDK Platforms," select:
     - Android 14.0 (API Level 34)
     - Android 13.0 (API Level 33)
   - Under "SDK Tools," select:
     - Android SDK Build-Tools
     - Android Emulator
     - Android SDK Platform-Tools
     - Intel x86 Emulator Accelerator (HAXM)

### 3. Environment Variables Setup (Admin Required)
1. Add ANDROID_HOME environment variable:
   - Windows: `%LOCALAPPDATA%\Android\Sdk`
   - macOS/Linux: `$HOME/Library/Android/sdk`
2. Add platform-tools to PATH:
   - Windows: `%LOCALAPPDATA%\Android\Sdk\platform-tools`
   - macOS/Linux: `$HOME/Library/Android/sdk/platform-tools`

### 4. Install Expo CLI (Admin Required for Global Install)
```bash
npm install -g expo-cli
```

### 5. Create Android Virtual Device (AVD)
1. Open Android Studio
2. Click "More Actions" → "Virtual Device Manager"
3. Click "Create Virtual Device"
4. Select "Pixel 7" (or any other phone)
5. Download and select system image (API 34 recommended)
6. Complete the AVD creation

### 6. Project Setup
1. Clone this repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### 7. Running the App
1. Start the Android emulator
2. In the project directory, run:
   ```bash
   npx expo start
   ```
3. Press 'a' to open in Android emulator

## Troubleshooting Common Issues

### Android Emulator Performance
- Enable Hardware Acceleration in BIOS
- Ensure Intel HAXM is installed
- Allocate more RAM to the emulator

### NPM Installation Issues
- Clear npm cache: `npm cache clean --force`
- Ensure network proxy settings are correct
- Check firewall settings

### Expo Connection Issues
- Ensure Android emulator is running before starting Expo
- Check if ADB is running: `adb devices`
- Restart the development server

## Network Requirements
- Unrestricted access to:
  - npmjs.com
  - expo.dev
  - github.com
  - Google Play services
- No blocking of localhost ports (19000-19002)

## Learn More

To learn more about developing with Expo, check out these resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals and advanced topics
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Step-by-step tutorial for creating universal apps
- [Expo Discord community](https://chat.expo.dev): Get help from other developers
- [Expo on GitHub](https://github.com/expo/expo): View the open source platform

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
# customercapture
