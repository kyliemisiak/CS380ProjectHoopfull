const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001; // Ensure this matches the port your server is running on

// Enable CORS
app.use(cors());

// Your existing routes and middleware
app.use(express.json());

app.get('/api/players/:teamID', async (req, res) => {
    const { teamID } = req.params;
    const db = new DatabaseController();
    try {
        const players = await db.getPlayersByTeam(teamID);
        res.json(players);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching players');
    }
});

// Other routes and server setup

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
