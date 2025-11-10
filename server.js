const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const QRCode = require('qrcode');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = 3000;

// Game state
let gameState = {
    status: 'waiting', // waiting, playing, reveal
    players: [],
    teams: [],
    currentRound: 1,
    packages: []
};

// Serve static files
app.use(express.static(__dirname));

// Admin display route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

// Player join route
app.get('/play', (req, res) => {
    res.sendFile(path.join(__dirname, 'player.html'));
});

// QR Code generation
app.get('/qr', async (req, res) => {
    try {
        const url = `http://${req.headers.host}/play`;
        const qrCode = await QRCode.toDataURL(url);
        res.json({ qrCode, url });
    } catch (err) {
        res.status(500).json({ error: 'Failed to generate QR code' });
    }
});

// Socket.io connection handling
io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);

    // Send current game state to new connection
    socket.emit('gameState', gameState);

    // Player joins
    socket.on('joinGame', (playerName) => {
        if (gameState.status === 'waiting') {
            const player = {
                id: socket.id,
                name: playerName,
                teamId: null
            };
            gameState.players.push(player);
            io.emit('gameState', gameState);
            console.log(`Player joined: ${playerName}`);
        }
    });

    // Start game
    socket.on('startGame', () => {
        if (gameState.players.length >= 2) {
            assignTeams();
            gameState.status = 'playing';
            gameState.currentRound = 1;
            io.emit('gameState', gameState);
            io.emit('gameStarted');
        }
    });

    // Move package
    socket.on('movePackage', ({ teamId, packageId }) => {
        const team = gameState.teams.find(t => t.id === teamId);
        if (team) {
            const pkg = team.packages.find(p => p.id === packageId);
            if (pkg && pkg.currentHub < 4) {
                pkg.currentHub++;
                if (pkg.currentHub === 4) {
                    pkg.status = 'delivered';
                } else {
                    pkg.status = 'in-transit';
                }
                io.emit('gameState', gameState);
            }
        }
    });

    // Round progression
    socket.on('nextRound', () => {
        gameState.currentRound++;
        if (gameState.currentRound === 2) {
            addChaos();
        } else if (gameState.currentRound === 3) {
            addDelays();
        }
        io.emit('gameState', gameState);
    });

    // Show reveal
    socket.on('showReveal', () => {
        gameState.status = 'reveal';
        io.emit('gameState', gameState);
    });

    // Reset game
    socket.on('resetGame', () => {
        gameState = {
            status: 'waiting',
            players: [],
            teams: [],
            currentRound: 1,
            packages: []
        };
        io.emit('gameState', gameState);
    });

    socket.on('disconnect', () => {
        // Remove player from game
        gameState.players = gameState.players.filter(p => p.id !== socket.id);
        io.emit('gameState', gameState);
        console.log('Client disconnected:', socket.id);
    });
});

function assignTeams() {
    const shuffled = [...gameState.players].sort(() => Math.random() - 0.5);
    const teamSize = Math.ceil(shuffled.length / 4);
    gameState.teams = [];

    const teamColors = ['#f093fb', '#4facfe', '#43e97b', '#fa709a'];
    
    for (let i = 0; i < 4; i++) {
        const teamMembers = shuffled.slice(i * teamSize, (i + 1) * teamSize);
        if (teamMembers.length > 0) {
            const team = {
                id: i + 1,
                name: `Team ${i + 1}`,
                color: teamColors[i],
                members: teamMembers.map(p => p.name),
                packages: ['TXN001', 'TXN002', 'TXN003'].map((id) => ({
                    id: `${id}-T${i + 1}`,
                    currentHub: 0,
                    status: 'pending',
                    delayed: false,
                    duplicate: false
                }))
            };
            gameState.teams.push(team);
            
            // Update player team assignments
            teamMembers.forEach(player => {
                const p = gameState.players.find(pl => pl.id === player.id);
                if (p) p.teamId = i + 1;
            });
        }
    }
}

function addChaos() {
    // Add duplicate package to random team
    if (gameState.teams.length > 0) {
        const teamIndex = Math.floor(Math.random() * gameState.teams.length);
        const pkgIndex = Math.floor(Math.random() * gameState.teams[teamIndex].packages.length);
        gameState.teams[teamIndex].packages[pkgIndex].duplicate = true;
        gameState.teams[teamIndex].packages[pkgIndex].id += 'a';
    }
}

function addDelays() {
    // Add delay to random package
    if (gameState.teams.length > 0) {
        const teamIndex = Math.floor(Math.random() * gameState.teams.length);
        const pkgIndex = Math.floor(Math.random() * gameState.teams[teamIndex].packages.length);
        gameState.teams[teamIndex].packages[pkgIndex].delayed = true;
    }
}

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Players can join at http://localhost:${PORT}/play`);
});
