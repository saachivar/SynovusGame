@echo off
echo.
echo ============================================
echo    Trace the Package Game
echo ============================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

REM Check if dependencies are installed
if not exist "node_modules" (
    echo [INFO] Installing dependencies...
    call npm install
    echo.
)

REM Get local IP address
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4 Address"') do set IP_ADDR=%%a
set IP_ADDR=%IP_ADDR: =%

echo [INFO] Starting server...
echo.
echo ============================================
echo.
echo Admin Display (Main Screen):
echo   http://localhost:3000
echo.
echo Player Join URL:
echo   http://%IP_ADDR%:3000/play
echo.
echo ============================================
echo.
echo Instructions:
echo   1. Open http://localhost:3000 on main display
echo   2. Players scan QR code on their phones
echo   3. Click 'Start Game' when ready!
echo.
echo Press Ctrl+C to stop the server
echo.

REM Start the server
node server.js
