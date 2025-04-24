# CustomerCapture – Development Environment Setup Guide

## Required Administrator Permissions
Students will need administrator permissions for:
1. Installing Node.js and npm
2. Installing Android Studio and SDKs
3. Setting system environment variables
4. Running Android emulators

> **Note:** Installing expo-CLI globally is **optional** – you can always run Expo commands via `npx` without admin rights.

---

## System Requirements
- Windows 10/11 or macOS 12+
- Minimum 8 GB RAM (16 GB recommended)
- At least 20 GB free disk space
- Intel or AMD processor with virtualization support
- Virtualization enabled in BIOS (for Android emulator)

---

## Complete Setup Instructions

### 1. Node.js Installation
1. Download Node.js LTS (v18.x or later) from https://nodejs.org/
2. Run the installer.
3. Verify:
   ```bash
   node --version
   npm --version
   ```

### 2. Android Studio Setup
1. Download Android Studio from https://developer.android.com/studio  
2. Run the installer.
3. In the components selection, ensure:
   - Android SDK
   - Android SDK Platform
   - Android Virtual Device
   - Intel HAXM (or appropriate AMD alternative)
4. After launch:
   1. **Tools → SDK Manager**  
   2. Under **SDK Platforms**, install:
      - Android 14.0 (API Level 34)
      - Android 13.0 (API Level 33)  
   3. Under **SDK Tools**, ensure:
      - Android SDK Build-Tools
      - Android Emulator
      - Android SDK Platform-Tools
      - Intel x86 Emulator Accelerator (HAXM) *or* AMD Hypervisor driver

### 3. Environment Variables Setup
1. **ANDROID_HOME**  
   - **Windows:**  
     - Open System Properties → Advanced → Environment Variables  
     - New **User** or **System** variable  
       ```
       Name: ANDROID_HOME  
       Value: %LOCALAPPDATA%\Android\Sdk
       ```
   - **macOS/Linux:**  
     ```bash
     echo 'export ANDROID_HOME=$HOME/Library/Android/sdk' >> ~/.bash_profile
     echo 'export PATH=$PATH:$ANDROID_HOME/platform-tools' >> ~/.bash_profile
     source ~/.bash_profile
     ```
2. **Add `platform-tools` to PATH**  
   - Windows variable **Path**:  
     ```
     %LOCALAPPDATA%\Android\Sdk\platform-tools
     ```
   - macOS/Linux, see above.

> **Tip:** After setting variables, open a **new** terminal and run `adb --version` to confirm.

### 4. Expo CLI Installation *(Optional Global Install)*
You can either:
- **Globally** install (requires admin):
  ```bash
  npm install -g expo-cli
  ```
- **Or** use `npx` (no admin needed):
  ```bash
  # in your project folder
  npx expo start
  ```

### 5. Create Android Virtual Device (AVD)
1. In Android Studio, select **More Actions → Virtual Device Manager**  
2. **Create Virtual Device** → choose **Pixel 7** (or similar)  
3. Download a **system image** (API 34 recommended)  
4. Finish setup  

---

## Project Setup & Running

1. **Clone** this repository  
   ```bash
   git clone https://github.com/your-org/CustomerCapture.git
   cd CustomerCapture
   ```
2. **Install dependencies**  
   ```bash
   npm install
   ```
3. **Start the app**  
   - Launch your Android emulator (AVD)  
   - Run:
     ```bash
     # if you installed expo-cli globally
     expo start
     # otherwise
     npx expo start
     ```
   - Press **a** to open on the Android emulator, or scan the QR code in Expo Go on your device.

---

## Troubleshooting Common Issues

### “Cannot find module '…\expo\bin\cli'”  
- **Cause:** expo-CLI isn’t installed globally, but you ran `expo start`.  
- **Fix:**  
  - Run `npx expo start` instead of `expo start`  
  - Or install locally as a dev dependency:
    ```bash
    npm install --save-dev expo-cli
    ```
  - Then you can run `npx expo start` or add an npm script:
    ```json
    // package.json
    "scripts": {
      "start": "expo start"
    }
    ```
    and run:
    ```bash
    npm run start
    ```

### Android Emulator Performance
- Ensure virtualization (Intel HAXM or AMD Hypervisor) is enabled in BIOS  
- Allocate ≥ 2 GB RAM to the AVD  
- Close other heavy applications  

### NPM Installation Issues
- `npm cache clean --force`  
- Verify proxy/firewall allows npm registry  

### Expo Connection Issues
- Start emulator **before** `expo start`  
- `adb devices` should list your emulator  
- Restart Metro bundler: close the terminal, then `npm run start`/`npx expo start`  

---

## Network Requirements
- Unrestricted access to:
  - `npmjs.com`
  - `expo.dev`
  - `github.com`
  - Google Play services  
- Ensure localhost ports **19000–19002** are open

---

## Learn More
- [Expo docs](https://docs.expo.dev/)  
- [Expo tutorial](https://docs.expo.dev/tutorial/introduction/)  
- [Expo Discord](https://chat.expo.dev)  

---

## Get Started
1. `npm install`  
2. `npx expo start`  
3. Edit files in the **app/** directory (file-based routing)


