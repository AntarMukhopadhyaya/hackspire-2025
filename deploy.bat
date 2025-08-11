@echo off
chcp 65001 >nul

echo 🚀 Starting HackSpire 2025 Production Deployment...

REM Check if .env.local exists
if not exist .env.local (
    echo ❌ Error: .env.local file not found!
    echo Please create .env.local with your Gmail SMTP credentials
    echo Copy env.example to .env.local and update the values
    pause
    exit /b 1
)

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

REM Build the application
echo 🔨 Building the application...
call npm run build

REM Check if build was successful
if %errorlevel% equ 0 (
    echo ✅ Build successful!
    
    REM Start production server
    echo 🚀 Starting production server...
    echo 📧 Contact form will be available at: http://localhost:3000/contact
    echo 🔒 Make sure your .env.local has the correct Gmail credentials
    echo.
    echo Press Ctrl+C to stop the server
    
    call npm start
) else (
    echo ❌ Build failed! Please check the errors above
    pause
    exit /b 1
)
