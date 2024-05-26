import "./Register.css"; // Import CSS file
import React, {useState} from "react";
export const Register = (props)=> {

    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can implement your login logic
        console.log('Logging in with:', {email, password});
    }


    return  (
        <>
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="auth-form-container">
                    <label htmlFor="name"> Full Name</label>
                    <input
                        type="email"
                        value={name}
                        id="name"
                        name="name"
                        placeholder="John Doe"
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
            <label htmlFor="button">Already Have An Account </label>
            <button onClick={() => props.onFormSwitch('login')}>Login Here</button>
        </>
    );
}
export default Register;