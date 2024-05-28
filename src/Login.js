import React, {useState} from "react";
import axios from 'axios'
import validation from "./validation";

function Login () {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [playerName, setPlayerName] = useState('')
    const [playerID, setPlayerID] = useState('')
    const [playerAmount, setPlayerAmount] = useState(3)



    const [loginStatus, setLoginStatus] = useState("")
    const [teamIDNum, setTeamID] = useState("")
    const [team, setTeam] = useState([])

    const [SignedInStatus, setSignedInStatus] = useState(false)
    const[showTeam, setShowTeam] = useState(false)
    const [showlogin, setShowLogin] = useState(false)

    const [values, setValues] = useState({})

    const [errors, setErrors] = useState({})


    console.log({values});

    const add = (event) =>{
        event.preventDefault();
        setValues({
            teamID: teamIDNum,
            playerName: playerName,
            playerID: playerID,
        });
        const err = validation(values);
        setErrors(err);
        //console.log();
        //if(err.playerName === "" && err.playerID === ""){
            console.log("Executed");
            axios.post('http://localhost:8801/addPlayer', {
                playerID: playerID,
                teamID: teamIDNum,
                playerName: playerName})
            .then(res =>{
                setLoginStatus("Player Added");
                setPlayerAmount(playerAmount+1);
            })
            .catch(err => console.log(err));
        //}
    }

    const remove = () => {
        axios.post('http://localhost:8801/remove', {
            playerName: playerName})
        .then(res => setLoginStatus("player Removed"))
        .catch(err => console.log(err));
    }
   

    const login = () => {
        axios.post('http://localhost:8801/login', {
            username : username, 
            password : password,})
        .then(res => {
            if(res.data.message){
                setLoginStatus(res.data.message);
                setShowLogin(false)
                setSignedInStatus(false);
            }else {
                setLoginStatus("Welcome, " + res.data[0].userName + "!");
                setTeamID(res.data[0].teamID);
                setSignedInStatus(true);
                setShowTeam(true);
            }
            })
        .catch(err => console.log(err));
    }

    const teams = () => {
        axios.post('http://localhost:8801/teams', {
            teamID: teamIDNum})
        .then(res => setTeam(res.data))
        .catch(err => console.log(err));
    }

    const signedIn = () => {
        setSignedInStatus(false);
        setLoginStatus("Signed out");
    };


    return (
        <div className= "Map">
            <h1 className="title">Captain Sign In</h1><div className="label">
                    <label classname="label" for="username">username</label>
                </div>
                    <div>
                        <input type="username" placeholder=" username" id="username" name="username"
                            onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <div className="label">
                            <label for="password">password</label>
                        </div>
                        <input type="password" placeholder=" *********" id="password" name="password"
                            onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="loginBut">
                        <button onClick={login}>Login</button>
                    </div>
                    <div><p className = "text">{loginStatus}</p></div>

                    <div className="text">
                        <h1 className="title">Team</h1>
                        <button onClick={teams}>Show Team</button>
                    <div className="teamsDisplay">
                        <table>
                            <thead>
                                <th>Name</th>
                                {' '}
                                <th>Number</th>
                        </thead>
                        <tbody>
                            {team.map((d, i) => (
                                <tr key={i}>
                                    <td>{d.playerName}</td>
                                    <td>{d.playerID}</td>
                                </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                    <div><button onClick={signedIn}>Sign Out</button></div>
                </div>
                
                <div>
                    <div>
                    <label className="labelPlayerName" for="PlayerName">Player Name</label>
                    </div>
                    <div>
                        <input type="playerName" placeholder="Player name" id="playername" name="playerName"
                            onChange={e => setPlayerName(e.target.value)} />
                            <div>{errors.playerName && <span>{errors.playerName}</span>}</div>
                    </div>
                    <div>
                        <div className="label">
                            <label for="playerID">Player Num</label>
                        </div>
                        <input type="playerID" placeholder="id" id="playerID" name="playerID"
                            onChange={e => setPlayerID(e.target.value)} />
                        <div>{errors.playerID && <span>{errors.playerID}</span>}</div>
                    </div>
                    <div>
                        <button onClick={add}>Add Player</button>
                        {' '}
                        <button onClick={remove}>remove Player</button>
                    </div>
                </div>
        </div>    
    );
}

export default Login;
