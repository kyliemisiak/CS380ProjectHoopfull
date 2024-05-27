// imports

//function Teams() {
//    return (
//        <div className="teams">
//            <section className="window">
//                <h1>Teams</h1>
//            </section>
//
//            <section className="window">
//                <h1>2</h1>
//            </section>
//        </div>
//    );
//
//}
//
//export default Teams;
//

import React, { useEffect, useState } from 'react';

function Teams() {
    const [players, setPlayers] = useState([]);
    const teamID = 'TEAM0001'; // Replace with the appropriate team ID or make it dynamic

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/players/${teamID}`);
                const data = await response.json();
                setPlayers(data);
            } catch (error) {
                console.error('Error fetching players:', error);
            }
        };

        fetchPlayers();
    }, [teamID]);

    return (
        <div className="teams">
            <section className="window">
                <h1>Teams</h1>
                <div className="team-players">
                    <h2>Players in Team {teamID}</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Player ID</th>
                                <th>Team ID</th>
                                <th>Player Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {players.map((player) => (
                                <tr key={player.playerID}>
                                    <td>{player.playerID}</td>
                                    <td>{player.teamID}</td>
                                    <td>{player.playerName}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="window">
                <h1>2</h1>
            </section>
        </div>
    );
}

export default Teams;
