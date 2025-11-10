#!/bin/bash

echo "🎮 Starting Trace the Package Game..."
echo ""

# Check if node is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# Get local IP address
echo "🌐 Finding your network IP address..."
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    IP_ADDR=$(ifconfig | grep "inet " | grep -v 127.0.0.1 | awk '{print $2}' | head -1)
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    IP_ADDR=$(hostname -I | awk '{print $1}')
else
    # Windows/Other
    IP_ADDR="localhost"
fi

echo ""
echo "✅ Server starting..."
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "🖥️  Admin Display (Main Screen):"
echo "   Open in browser: http://localhost:3000"
echo ""
echo "📱 Player Join URL:"
echo "   http://${IP_ADDR}:3000/play"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "💡 Instructions:"
echo "   1. Open http://localhost:3000 on the main display"
echo "   2. Players scan the QR code on their phones"
echo "   3. Click 'Start Game' when ready!"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Start the server
node server.js
