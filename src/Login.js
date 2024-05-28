import React, {useState} from "react";
import axios from 'axios'
import Teams from "./Teams";

function Login () {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [loginStatus, setLoginStatus] = useState("")

    const [signedInStatus, setSignedInStatus] = useState(false)
    
    const[teamIDNum, setTeamID] = useState(0)

    const[showTeam, setShowTeam] = useState(false)

    const login = () => {
        axios.post('http://localhost:8801/login', {
            username : username, 
            password : password,})
        .then(res => {
            if(res.data.message){
                setLoginStatus(res.data.message);
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

    const signedIn = () => {
        setSignedInStatus(false);
        setLoginStatus("Signed out");
    };


    return (
        <div className= "Map">
            <h1 className="title">Captain Sign In</h1>
                <div className="label">
                    <label classname = "label" for="username">username</label>
                </div>
                <div>
                    <input type="username" placeholder=" username" id="username" name="username"
                    onChange = {e => setUsername(e.target.value)}/>
                </div>
                <div>
                <div className="label">
                    <label for="password">password</label>
                </div>
                    <input type="password" placeholder=" *********" id="password" name="password"
                    onChange = {e => setPassword(e.target.value)}/>
                </div>
                <div className="loginBut">
                <button onClick={login}>Login</button>
                <button onClick={signedIn}>Sign Out</button>
                <div>{showTeam ? <Teams teamID = {teamIDNum}/> : <p>Team captain login to manage team.</p>}</div>
                </div>
                <div><p className = "text">{loginStatus}</p></div>
        </div>    
    );
}

export default Login;
