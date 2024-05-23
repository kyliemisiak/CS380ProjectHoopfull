import React,{useState} from "react";

export const Login = () => {
    const {
    return (
        <form>
            <label for="email">email</label>
            <input type="email" placeholder=" YourAddress@email.com" id="email" name="email"/>
            <label for="password">password</label>
            <input type="password" placeholder=" *********" id="password" name="password"/>
            <button>Login</button>
        </form>
    )
}