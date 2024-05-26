import "./Register.css"; // Import CSS file
import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can implement your register logic
        console.log('Registering with:', { email, password, name });
    }

    return (
        <div className="register-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="auth-form-container">
                    <label htmlFor="name"> Full Name</label>
                    <input
                        type="text"
                        value={name}
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="*******"
                        onChange={(e) => setPass(e.target.value)}
                    />
                </div>
                <button type="submit">Register</button>
            </form>
            <div className="login-link">
                <label htmlFor="button">Already Have An Account </label>
                <button onClick={() => props.onFormSwitch('login')}>Login Here</button>
            </div>
        </div>
    );
}

export default Register;
