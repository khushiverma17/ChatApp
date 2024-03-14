import React from "react";
import people from './people.png';
import {Button, TextField} from "@mui/material";

function Login(){
    return(
        <div className="login-container">
            <div className="image-container">
                <img src={people} alt="logo" className="welcome-logo"></img>
            </div>
            <div className="login-box">
                <p>Login to your account</p>
                <TextField id="standard-basic" label="Enter user name" variant="outlined" />
                <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password"/>
                <Button variant="outlined">Login</Button>
            </div>

        </div>
    )
}
export default Login;