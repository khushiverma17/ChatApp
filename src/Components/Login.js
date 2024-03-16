import React from "react";
// import people from './people.png';
import logo from './logo.jpg'
import {Button, TextField} from "@mui/material";

function Login(){
    return(
        <div className="login-container">
            <div className="image-container">
                <img src={logo} alt="logo" className="welcome-logo"></img>
            </div>
            <div className="login-box">
            <p  className="login-to-account" style={{fontSize: "28px", marginBottom: "13px"}}>Login to your account</p>

                <TextField id="standard-basic" label="Enter user name" variant="outlined" />
                <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password"/>
                <Button variant="outlined" className="login-button">Login</Button>
            </div>

        </div>
    )
}
export default Login;