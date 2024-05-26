import React, { useState } from 'react';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password,setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can implement your login logic
        console.log('Logging in with:', { email, password });
    }

    return (
        <div>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        value={email}
                        id="email"
                        name="email"
                        placeholder="youremail@gmail.com"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="*******"

                    />
                </div>
                <button type="Log In">Login</button>
            </form>
            <label htmlFor="button">Don't Have An Account?? </label>
            <button onClick={() => props.onFormSwitch('register')}>Register Here</button>
        </div>
    );
};

export default Login;
