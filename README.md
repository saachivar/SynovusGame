# 🎮 Trace the Package - Interactive Game

An engaging multiplayer game that demonstrates Synovus' Tracer System through a fun package delivery simulation. Players join via their phones using QR codes and work in teams to track packages through delivery hubs.

## 🌟 Features

- **📱 Mobile-First**: Players join using their phones by scanning a QR code
- **🎯 Auto Team Assignment**: Players are randomly assigned to teams when the game starts
- **✨ Smooth Animations**: Beautiful animations throughout the game experience
- **🎲 Three Game Rounds**: 
  - Round 1: Normal shippingg
  - Round 2: Holiday chaos with duplicates
  - Round 3: System delays
- **🎉 Educational Reveal**: Shows how the game mirrors real Synovus transaction tracking

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Server

```bash
npm start
```

The server will start on `http://localhost:3000`

### 3. Setup for Presentation

**On the Main Display (Projector/TV):**
- Open a web browser
- Navigate to `http://localhost:3000`
- This shows the admin view with QR code and game progress

**For Players:**
- Players scan the QR code with their phones
- Or manually visit the URL shown on screen
- Enter their name and join the game

## 🎮 How to Play

### Setup Phase
1. Display the admin screen on a projector/TV
2. Players scan the QR code or visit the join URL
3. Players enter their names on their phones
4. Once at least 2 players have joined, click "Start Game"

### Game Phase
1. Players are automatically assigned to teams (shown on both screens)
2. Each team has 3 packages to deliver through 4 hubs:
   - 🏭 Warehouse (Frontend System)
   - 🚚 Truck (API Layer)
   - 📦 Sorting Center (Backend System)
   - 🏠 Doorstep (User Confirmation)
3. Players tap "Move Forward" on their phones to advance packages
4. Progress through three rounds with increasing complexity

### Rounds
- **Round 1**: Normal operations - track packages through the system
- **Round 2**: Holiday chaos - some packages get duplicated
- **Round 3**: System delays - identify and resolve delays

### The Reveal
After completing all rounds, the game reveals how the package tracking mirrors Synovus' real tracer system:
- Package = Transaction
- Tracking ID = Trace ID
- Each hub = System layer in the payment flow

## 🏗️ Architecture

```
trace-the-package/
├── server.js          # Node.js server with Socket.io
├── admin.html         # Main display for projector/TV
├── player.html        # Mobile interface for players
├── package.json       # Dependencies
└── README.md         # This file
```

## 🔧 Configuration

### Changing the Port
Edit `server.js` and modify:
```javascript
const PORT = 3000;  // Change to your desired port
```

### Network Setup for Multiple Devices
To allow phones to connect:

1. Find your computer's IP address:
   - **Windows**: `ipconfig` (look for IPv4 Address)
   - **Mac/Linux**: `ifconfig` or `ip addr`

2. Update the QR code URL in `server.js`:
```javascript
const url = `http://YOUR_IP_ADDRESS:3000/play`;
```

3. Make sure your firewall allows connections on port 3000

4. All devices must be on the same network

## 📱 Mobile Compatibility

The player interface is optimized for:
- iOS Safari
- Android Chrome
- Modern mobile browsers

## 🎨 Customization

### Team Colors
Edit the `teamColors` array in `server.js`:
```javascript
const teamColors = ['#f093fb', '#4facfe', '#43e97b', '#fa709a'];
```

### Package IDs
Modify the package initialization in `assignTeams()`:
```javascript
packages: ['TXN001', 'TXN002', 'TXN003']
```

### Hubs
Update the `HUBS` constant in both `admin.html` and `player.html`

## 🐛 Troubleshooting

**QR Code not showing:**
- Check that the server started successfully
- Look for "Server running on..." in console

**Players can't connect:**
- Ensure all devices are on the same WiFi network
- Check firewall settings
- Verify the IP address in the QR code is correct

**Game not starting:**
- Minimum 2 players required
- Check browser console for errors

## 💡 Tips for Best Experience

1. **Test Before Presenting**: Run through once before your actual demo
2. **Stable Network**: Use a reliable WiFi network
3. **Screen Size**: Admin view works best on large displays
4. **Player Count**: Works great with 4-16 players
5. **Round Timing**: Don't rush - let players experience each round

## 🔄 Reset Game

To start a new game session, click "Play Again" on the reveal screen. This will:
- Clear all players
- Reset teams
- Return to the QR code screen for new players to join

## 📊 Technical Stack

- **Backend**: Node.js + Express
- **Real-time Communication**: Socket.io
- **QR Code Generation**: qrcode library
- **Frontend**: Vanilla JavaScript (no frameworks)
- **Styling**: Pure CSS with animations

## 🎯 Educational Use

This game effectively demonstrates:
- Distributed system tracking
- Transaction monitoring
- Duplicate detection
- Latency identification
- End-to-end visibility

Perfect for:
- Team building events
- Training sessions
- Customer demonstrations
- Conference presentations

## 📞 Support

For issues or questions:
1. Check the troubleshooting section above
2. Verify all prerequisites are installed
3. Check console logs for errors

## 🎉 Enjoy!

Have fun demonstrating the power of Synovus' Tracer System through this interactive experience!
