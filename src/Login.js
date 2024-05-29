import React, {useState} from "react";
import { Button } from "rsuite";
import axios from 'axios'
import validation from "./validation";

function Login () {

    /*used
    */
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [playerName, setPlayerName] = useState('')
    const [playerID, setPlayerID] = useState('')
    const [playerAmount, setPlayerAmount] = useState(0)



    const [loginStatus, setLoginStatus] = useState("")
    const [teamIDNum, setTeamID] = useState("")
    const [team, setTeam] = useState([])

    const[showTeam, setShowTeam] = useState(false)
    const [showlogin, setShowLogin] = useState(true)

    const [values, setValues] = useState({})

    const [errors, setErrors] = useState({})

    const add = (event) =>{
        event.preventDefault();
        setValues({
            teamID: teamIDNum,
            playerName: playerName,
            playerID: playerID,
        });
        const err = validation(values);
        setErrors(err);
        if (playerAmount < 3){
            if(err.playerName === "" && err.playerID === ""){
                axios.post('http://localhost:8801/addPlayer', {
                    playerID: playerID,
                    teamID: teamIDNum,
                    playerName: playerName})
                .then(res =>{
                    setLoginStatus("Player Added");
                    setPlayerAmount(playerAmount+1);
                })
                .catch(err => console.log(err));
        }else{
            setLoginStatus("Can't add more than 3 players amount.")
        }
        }
    }

    const remove = () => {
        axios.post('http://localhost:8801/remove', {
            playerName: playerName})
        .then(res => {
            setPlayerAmount(playerAmount-1);
            setLoginStatus("player Removed");
        })
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
            }else {
                setLoginStatus("Welcome, " + res.data[0].userName + "!");
                setTeamID(res.data[0].teamID);
                setShowLogin(false);
                setShowTeam(true);
            }
         })
        .catch(err => console.log(err));
    }

    const teams = () => {
        axios.post('http://localhost:8801/teams', {
            teamID: teamIDNum})
        .then(res => {
            setTeam(res.data);
            setPlayerAmount(res.data.length);
        })
        .catch(err => console.log(err));
    }

    const signedIn = () => {
        setShowLogin(true);
        setShowTeam(false)
        setLoginStatus("Signed out");
    };


    return (
        <div className= "Map">
            <div>{showlogin ? 
            <><h1 className="title">Captain Sign In</h1><div className="label">
                    <label classname="label" for="username">username</label>
                </div><div>
                        <input type="username" placeholder=" username" id="username" name="username"
                            onChange={e => setUsername(e.target.value)} />
                    </div><div>
                        <div className="label">
                            <label for="password">password</label>
                        </div>
                        <input type="password" placeholder=" *********" id="password" name="password"
                            onChange={e => setPassword(e.target.value)} />
                    </div><div className="loginBut">
                        <Button onClick={login}>Login</Button>
                    </div></>
                    :  null }</div>
                    <div><p className = "text">{loginStatus}</p></div>

             <div>{showTeam ? 
                    <><div className="text">
                    <h1 className="title">Team</h1>
                    <Button size="sm" onClick={teams} color="blue" appearance="primary">Refresh</Button>
                    <div className="teamsDisplay">
                        <table>
                            <thead>
                                <th>Name</th>
                            </thead>
                            <tbody>
                                {team.map((d, i) => (
                                    <tr key={i}>
                                        <td>{d.playerName}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div><div>
                        <div>
                            <label className="labelPlayerName" for="PlayerName">Player Name</label>
                        </div>
                        <div>
                            <input type="playerName" placeholder="Player name" id="playername" name="playerName"
                                onChange={e => setPlayerName(e.target.value)} />
                            <div className="warnText">{errors.playerName && <span>{errors.playerName}</span>}</div>
                        </div>
                        <div>
                            <div className="label">
                                <label for="playerID">Player ID</label>
                            </div>
                            <input type="playerID" placeholder="id" id="playerID" name="playerID"
                                onChange={e => setPlayerID(e.target.value)} />
                            <div className="warnText">{errors.playerID && <span>{errors.playerID}</span>}</div>
                        </div>
                        <div>
                            <Button onClick={add} size="xs" color = "green" appearance="primary">Add</Button>
                            {' '}
                            <Button onClick={remove} size="xs" color= "red" appearance="primary">Drop</Button>
                            <p className="text">Input the player's name to remove a player</p>
                        </div>
                    </div></>
            : <p className="text">Team captain login to manage team.</p>}</div>
            <div>{showlogin ? null : <div><Button size="sm" onClick={signedIn}>Sign Out</Button></div>}</div>
        </div>    
    );
}

export default Login;
