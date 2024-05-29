import React, { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Register.css"; // Import CSS file

const USER_REGEX = /^[A-Za-z][A-Za-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
    const usernameRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [teamName, setTeamName] = useState('');
    const [playerName, setPlayerName] = useState('');
    const [playerId, setPlayerId] = useState('');

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        usernameRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validName || !validPwd || !validMatch) {
            setErrMsg("Invalid Entry");
            return;
        }
        setSuccess(true);
        setUser('');
        setPwd('');
        setMatchPwd('');
        setTeamName('');
        setPlayerName('');
        setPlayerId('');
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <a href="#">Sign In</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Register</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                id="username"
                                ref={usernameRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required
                                aria-invalid={!validName ? "true" : "false"}
                                aria-describedby="uidnote"
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)}
                            />
                        </div>


                        <div className="input-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                                aria-invalid={!validPwd ? "true" : "false"}
                                aria-describedby="pwdnote"
                                onFocus={() => setPwdFocus(true)}
                                onBlur={() => setPwdFocus(false)}
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="confirm_pwd">Confirm:</label>
                            <input
                                type="password"
                                id="confirm_pwd"
                                onChange={(e) => setMatchPwd(e.target.value)}
                                value={matchPwd}
                                required
                                aria-invalid={!validMatch ? "true" : "false"}
                                aria-describedby="confirmnote"
                                onFocus={() => setMatchFocus(true)}
                                onBlur={() => setMatchFocus(false)}
                            />
                        </div>


                        <div className="input-group">
                            <label htmlFor="teamName">Team Name:</label>
                            <input
                                type="text"
                                id="teamName"
                                onChange={(e) => setTeamName(e.target.value)}
                                value={teamName}
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="playerName">Player Name:</label>
                            <input
                                type="text"
                                id="playerName"
                                onChange={(e) => setPlayerName(e.target.value)}
                                value={playerName}
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="playerId">Player ID:</label>
                            <input
                                type="text"
                                id="playerId"
                                onChange={(e) => setPlayerId(e.target.value)}
                                value={playerId}
                            />
                        </div>

                        <button disabled={!validName || !validPwd || !validMatch}>Sign Up</button>
                    </form>
                    <p>
                        Already registered?<br />
                        <span className="line">
              <a href="/login">Sign In</a>
            </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default Register;
