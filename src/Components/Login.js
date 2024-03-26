import React from "react";
// import people from './people.png';
import logo from './logo.jpg'
import {Backdrop, CircularProgress, Button, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom"

function Login(){
    return(
        <div className="login-container">
            <div className="image-container">
                <img src={logo} alt="logo" className="welcome-logo"></img>
            </div>
            <div className="login-box">
            <p  className="login-to-account" style={{fontSize: "28px", marginBottom: "13px", color: "#3eb489"}}>Login to your account</p>

                <TextField id="standard-basic" label="Enter user name" variant="outlined" />
                <TextField id="outlined-basic" label="Enter email id" variant="outlined" />
                <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password"/>

                <Button variant="outlined" className="signup-button">SignUp</Button>
            </div>

        </div>
    )
}





export default Login;