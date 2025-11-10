# 🎯 Quick Reference Guide for Presenters

## Pre-Game Setup (5 minutes)

### Equipment Needed
- ✅ Computer with Node.js installed
- ✅ Large display (projector/TV)
- ✅ WiFi network (all devices on same network)
- ✅ Players with smartphones

### Launch Checklist
1. **Start the Server**
   - Windows: Double-click `start.bat`
   - Mac/Linux: Run `./start.sh` or `npm start`
   
2. **Display Admin Screen**
   - Open `http://localhost:3000` in browser
   - Put browser in fullscreen mode (F11)
   - QR code should be visible to all players

3. **Test Connection**
   - Scan QR code with your phone
   - Verify you can join successfully

## Game Flow (15-20 minutes)

### Phase 1: Player Join (2-3 min)
```
┌─────────────────────────────────┐
│  ADMIN SCREEN                   │
│  Shows: QR Code + Join URL      │
│  Players: Scanning & Joining    │
│  Wait for: At least 2 players   │
└─────────────────────────────────┘
```
**Script**: "Scan the QR code with your phone to join the game!"

### Phase 2: Game Start (30 sec)
- Click "Start Game" button
- Teams are automatically assigned (shown on screen)
- Players see their team on their phones

**Script**: "You've been assigned to teams. Work together to deliver your packages!"

### Phase 3: Round 1 (3-5 min)
```
Round 1: Shipping Begins
├── Players move packages through hubs
├── Watch progress on main screen
└── All teams work simultaneously
```
**Script**: "Each package must go through 4 hubs. Tap 'Move Forward' on your phone to advance your packages."

### Phase 4: Round 2 (3-5 min)
- Click "Start Round 2: Add Chaos"
- Some packages get duplicates
- Teams must track which is which

**Script**: "It's the holiday rush! Some packages might get duplicated. Keep track of your shipments!"

### Phase 5: Round 3 (3-5 min)
- Click "Start Round 3: Add Delays"
- Random packages get delayed
- Teams identify and resolve delays

**Script**: "Oh no! We're detecting delays in the system. Can you identify where packages are stuck?"

### Phase 6: The Reveal (2-3 min)
- Click "Show The Reveal"
- Educational content displayed
- Connect game to Synovus system

**Script**: "Just like you tracked packages, Synovus' Tracer System monitors every transaction..."

## Talking Points

### During Gameplay
- "Notice how each package has a unique tracking ID?"
- "Watch how we can see exactly where each package is in real-time"
- "When duplicates appear, we can immediately identify them"
- "Delays are detected instantly at the exact hub where they occur"

### The Reveal
Key mappings to emphasize:
```
📦 Package          → Transaction
🏷️ Tracking ID     → Trace ID
🏭 Warehouse        → Frontend System
🚚 Truck            → API Layer
📦 Sorting Center   → Backend System
🏠 Doorstep         → User Confirmation
```

### Closing
"Synovus' Tracer System provides this same visibility for financial transactions:
- **Complete tracking** from start to finish
- **Duplicate detection** prevents errors
- **Latency monitoring** identifies bottlenecks
- **End-to-end visibility** across all systems"

## Troubleshooting During Presentation

### "QR Code Not Showing"
- Refresh the browser
- Check server is running (look for console messages)

### "Players Can't Connect"
- Verify WiFi network (same for all devices)
- Try manual URL entry instead of QR scan
- Check firewall settings

### "Game Won't Start"
- Need minimum 2 players
- Check player count on screen
- Refresh if players list looks wrong

### "Packages Not Moving"
- Players need to tap "Move Forward" button
- Check their phone screen
- Make sure they're on the playing screen (not team screen)

## Tips for Success

### Before Presentation
- ✅ Test run with 2-3 people
- ✅ Check WiFi signal strength in room
- ✅ Have backup device ready
- ✅ Print join URL as backup for QR code

### During Presentation
- 👥 Encourage team communication
- ⏱️ Keep rounds moving (don't wait too long)
- 🎤 Narrate what's happening on screen
- 🎯 Connect game actions to real system features

### Energy & Engagement
- Make it competitive (first team to deliver all packages)
- Celebrate completions ("Great job Team 2!")
- Add suspense ("Round 2 is about to get chaotic...")
- Keep the pace upbeat and fun

## Time Management

**Total Time: ~20 minutes**
- Setup & Join: 3 min
- Round 1: 4 min
- Round 2: 4 min
- Round 3: 4 min
- Reveal: 3 min
- Q&A: 2 min

**Pro tip**: Have a helper manage the admin screen while you present and interact with players.

## Common Questions

**Q: "What if someone drops out?"**
A: Game continues. Their team just has fewer members.

**Q: "Can we play again?"**
A: Yes! Click "Play Again" and new players can join.

**Q: "How many players can join?"**
A: Works best with 4-16 players (1-4 per team).

**Q: "Does this work with tablets?"**
A: Yes! Any device with a web browser works.

## Post-Game

### Discussion Points
1. How did tracking help you manage your packages?
2. What happened when duplicates appeared?
3. How quickly could you identify delays?
4. How does this apply to financial transactions?

### Follow-Up
- Share technical details about Synovus Tracer System
- Discuss implementation at scale
- Answer questions about real-world applications

---

**Need Help?** Check the full README.md for detailed technical information.

**Remember**: The game is educational AND fun. Keep it light, engaging, and connect it back to the technology!
