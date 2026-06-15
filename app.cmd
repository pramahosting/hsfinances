@echo off
title Headstart Finances Australia - Dev Server
color 0B

echo.
echo  ============================================================
echo   Headstart Finances Australia Pty Ltd
echo   ABN: 88 656 265 860
echo   Local Development Server
echo  ============================================================
echo.

:: Check Node.js is installed
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo  [ERROR] Node.js is not installed or not in PATH.
    echo  Please download and install it from: https://nodejs.org
    echo  Then double-click this file again.
    echo.
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node -v') do set NODE_VER=%%i
echo  [OK] Node.js %NODE_VER% found.

:: Check npm
where npm >nul 2>&1
if %errorlevel% neq 0 (
    echo  [ERROR] npm not found. Please reinstall Node.js.
    pause
    exit /b 1
)

echo  [OK] npm found.
echo.

:: Move to the folder where this .cmd file lives (handles double-click from any location)
cd /d "%~dp0"
echo  [OK] Working directory: %CD%
echo.

:: Install dependencies if node_modules folder is missing
if not exist "node_modules\" (
    echo  [INFO] First run - installing dependencies...
    echo  This may take 1-2 minutes. Please wait.
    echo.
    call npm install
    if %errorlevel% neq 0 (
        echo.
        echo  [ERROR] npm install failed.
        echo  Check your internet connection and try again.
        pause
        exit /b 1
    )
    echo.
    echo  [OK] Dependencies installed.
    echo.
)

:: Check package.json exists
if not exist "package.json" (
    echo  [ERROR] package.json not found.
    echo  Make sure you are running app.cmd from inside the hsfinances folder.
    pause
    exit /b 1
)

:: Start the Vite dev server
echo  Starting dev server...
echo  Open your browser to: http://localhost:3000
echo.
echo  Press Ctrl+C to stop the server.
echo  ============================================================
echo.

call npm run dev

echo.
echo  Server stopped.
pause
