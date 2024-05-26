import React, { useState } from 'react';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can implement your login logic
        console.log('Logging in with:', { email, password });
    }

    return (
        <div className="auth-form-container">
            <h2>Login Page</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        value={email}
                        id="email"
                        name="email"
                        placeholder="youremail@gmail.com"
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="*************"
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <div className="button-container"> {/* Encapsulate the login button within its own container */}
                    <button type="submit" className="login-btn">Login</button>
                </div>
            </form>
            <div className="link-btn-container">
                <label htmlFor="button">Don't Have An Account?? </label>
                <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Register Here</button>
            </div>
        </div>
    );
};

export default Login;
