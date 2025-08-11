#!/bin/bash

# HackSpire 2025 Production Deployment Script

echo "🚀 Starting HackSpire 2025 Production Deployment..."

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "❌ Error: .env.local file not found!"
    echo "Please create .env.local with your Gmail SMTP credentials"
    echo "Copy env.example to .env.local and update the values"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the application
echo "🔨 Building the application..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Start production server
    echo "🚀 Starting production server..."
    echo "📧 Contact form will be available at: http://localhost:3000/contact"
    echo "🔒 Make sure your .env.local has the correct Gmail credentials"
    echo ""
    echo "Press Ctrl+C to stop the server"
    
    npm start
else
    echo "❌ Build failed! Please check the errors above"
    exit 1
fi
