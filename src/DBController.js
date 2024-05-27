const mysql = require('mysql2/promise');

class DatabaseController {
    async connect() {
        const url = 'mysql://root:cs380@localhost:3306/hoopfuldb';

        try {
            const connection = await mysql.createConnection(url);
            console.log('success!');
            return connection;
        } catch (error) {
            console.error(error);
        }

        return null;
    }

    async insertPlayer(pID, tID, pName) {
        const connection = await this.connect();
        if (!connection) return;

        try {
            const add = 'INSERT INTO players (playerID, teamID, playerName) VALUES (?, ?, ?);';
            const query = 'SELECT * FROM players JOIN teams ON players.teamID = teams.teamID;';
            
            const [rows] = await connection.execute(query);

            for (const row of rows) {
                if (row.playerID === pID || row.teamID === tID) {
                    return;
                }
            }

            await connection.execute(add, [pID, tID, pName]);
        } catch (error) {
            console.error(error);
        } finally {
            await connection.end();
        }
    }

    async createTeam(tID, tName, amountPlayers, captainID, captainName) {
        const connection = await this.connect();
        if (!connection) return;

        try {
            const add = 'INSERT INTO teams (teamID, teamName, amountOfPlayers, captainID, captainName) VALUES (?, ?, ?, ?, ?);';
            const checkA = 'SELECT * FROM teams JOIN captain ON teams.captainID = captain.captainID;';

            const [rows] = await connection.execute(checkA);

            for (const row of rows) {
                if (row.teamID === tID || row.captainID === captainID) {
                    console.log('Constraint found, cannot add team.');
                    return;
                }
            }

            await connection.execute(add, [tID, tName, amountPlayers, captainID, captainName]);
        } catch (error) {
            console.error(error);
        } finally {
            await connection.end();
        }
    }

    async createCaptain(captainID, captainName, teamID, userName, pass) {
        const connection = await this.connect();
        if (!connection) return;

        try {
            const add = 'INSERT INTO captain (captainID, captainName, teamID, userName, pass) VALUES (?, ?, ?, ?, ?);';
            const checkB = 'SELECT * FROM captain JOIN account ON captain.userName = account.userName;';

            const [rows] = await connection.execute(checkB);

            for (const row of rows) {
                if (row.captainID === captainID || (row.userName !== userName && row.pass !== pass)) {
                    console.log('Constraint found, cannot add captain.');
                    return;
                }
            }

            await connection.execute(add, [captainID, captainName, teamID, userName, pass]);
        } catch (error) {
            console.error(error);
        } finally {
            await connection.end();
        }
    }

    async createAccount(userName, pass) {
        const connection = await this.connect();
        if (!connection) return;

        try {
            const add = 'INSERT INTO account (userName, pass) VALUES (?, ?);';
            const query = 'SELECT * FROM account;';

            const [rows] = await connection.execute(query);

            for (const row of rows) {
                if (row.userName === userName && row.pass === pass) {
                    console.log('constraint found, cannot add account');
                    return;
                }
            }

            await connection.execute(add, [userName, pass]);
        } catch (error) {
            console.error(error);
        } finally {
            await connection.end();
        }
    }

    async updatePassword(userName, pass) {
        const connection = await this.connect();
        if (!connection) return;

        try {
            const add = 'UPDATE account SET pass = ? WHERE userName = ?;';
            await connection.execute(add, [pass, userName]);
        } catch (error) {
            console.error(error);
        } finally {
            await connection.end();
        }
    }

    async deleteAccount(userName) {
        const connection = await this.connect();
        if (!connection) return;

        try {
            const add = 'DELETE FROM account WHERE userName = ?;';
            await connection.execute(add, [userName]);
        } catch (error) {
            console.error(error);
        } finally {
            await connection.end();
        }
    }

    async updateCaptain(captainID, captainName, teamID, userName, pass) {
        const connection = await this.connect();
        if (!connection) return;

        try {
            const add = 'UPDATE captain SET captainName = ?, teamID = ?, userName = ?, pass = ? WHERE captainID = ?;';
            await connection.execute(add, [captainName, teamID, userName, pass, captainID]);
        } catch (error) {
            console.error(error);
        } finally {
            await connection.end();
        }
    }

    async deleteCaptain(captainID) {
        const connection = await this.connect();
        if (!connection) return;

        try {
            const add = 'DELETE FROM captain WHERE captainID = ?;';
            await connection.execute(add, [captainID]);
        } catch (error) {
            console.error(error);
        } finally {
            await connection.end();
        }
    }

    async updateTeam(tID, tName, amountPlayers, captainID, captainName) {
        const connection = await this.connect();
        if (!connection) return;

        try {
            const add = 'UPDATE players SET teamName = ?, amountOfPlayers = ?, captainID = ?, captainName = ? WHERE teamID = ?;';
            await connection.execute(add, [tName, amountPlayers, captainID, captainName, tID]);
        } catch (error) {
            console.error(error);
        } finally {
            await connection.end();
        }
    }

    async deleteTeam(tID) {
        const connection = await this.connect();
        if (!connection) return;

        try {
            const add = 'DELETE FROM players WHERE teamID = ?;';
            await connection.execute(add, [tID]);
        } catch (error) {
            console.error(error);
        } finally {
            await connection.end();
        }
    }

    async updatePlayer(pID, tID, pName) {
        const connection = await this.connect();
        if (!connection) return;

        try {
            const add = 'UPDATE players SET teamID = ?, playerName = ? WHERE playerID = ?;';
            await connection.execute(add, [tID, pName, pID]);
        } catch (error) {
            console.error(error);
        } finally {
            await connection.end();
        }
    }

    async deletePlayer(pID) {
        const connection = await this.connect();
        if (!connection) return;

        try {
            const add = 'DELETE FROM players WHERE playerID = ?;';
            await connection.execute(add, [pID]);
        } catch (error) {
            console.error(error);
        } finally {
            await connection.end();
        }
    }
}

// I added this --Connor
// feel free to axe it if sucks
async selectPlayersFromTeam(teamID) {
        const connection = await this.connect();
        if (!connection) return;

        try {
            const query = 'SELECT * FROM players WHERE teamID = ?;';
            const [rows] = await connection.execute(query, [teamID]);
            return rows;
        } catch (error) {
            console.error(error);
        } finally {
            await connection.end();
        }

        return [];
    }

module.exports = DatabaseController;
