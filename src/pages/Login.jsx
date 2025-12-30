import React from 'react';
import {useState} from 'react';
import './Login.css';

export default function Login()
{
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [message , setMessage] = useState("");

    const handleLogin = (e) =>
    {
        e.preventDefault();
    

    const demoEmail = "Saditya@gmail.com";
    const demoPassword = "Saditya@123";

    if(email === demoEmail && password === demoPassword)
    {
        setMessage("Login was Successful!");
    }
    else
    {
        setMessage("Invalid Email or Password!");
    }
    }

    return(
        <div className = "login-container">
            <form className = "Login-form" onSubmit = {handleLogin}>
                <h2>Login Page</h2>

                <input 
                    type = "email"
                    placeholder = "Enter your email"
                    value = {email}
                    onChange = {(e) => setEmail(e.target.value)}
                    required
                />

                <input 
                    type = "password"
                    placeholder = "Enter your password"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                    required
                />

                <button>Login</button>
                <p className = "message">{message}</p>
            </form>
        </div>
    );
};

