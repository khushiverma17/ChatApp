import React, { useState } from "react";
// import people from './people.png';
import logo from './logo.jpg'
import {Backdrop, CircularProgress, Button, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom"
import axios from "axios";
import Toaster from "./Toaster";

function Login(){

    const [showlogin, setShowLogin] = useState(false);
    const [data, setData] = useState({ name: "", email: "", password: ""});
    const [loading, setLoading] = useState(false);

    const [logInStatus, setLogInStatus] = React.useState("");
    const [signInStatus, setSignInStatus] = React.useState("");

    const navigate = useNavigate();

    const changeHandler=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value});
    };

    const loginHandler=async (e) =>{
        setLoading(true);
        console.log(data);
        try{
            const config={
                headers:{
                    "Content-type":"application/json",
                },
            };
            const response=await axios.post(
                "http://localhost:5000/user/login/",
                data,
                config
            );
            console.log("Login : ",response);
            setLogInStatus({msg: "Success", key: Math.random()});
            setLoading(false);
            localStorage.setItem("userData", JSON.stringify(response));
            navigate("/app/welcome");
        }
        catch(error){
            setLogInStatus({
                msg: "Invalid User name or Password",
                key: Math.random()
            })
        }
        setLoading(false);
    };

    const signUpHandler = async () =>{
        setLoading(true);
        try{
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            const response = await axios.post(
                "http://localhost:5000/user/register",
                data,
                config
            );
            console.log(response);
            setSignInStatus({ msg: "Success", key: Math.random()});
            navigate("/app/welcome");
            localStorage.setItem("userData", JSON.stringify(response));
            setLoading(false);
        }
        catch(error){
            console.log(error);
            if(error.response && error.response.status === 405){
                setLogInStatus({
                    msg: "User with this email ID already exists",
                    key: Math.random(),
                });
            }
            if(error.response && error.response.status === 406){
                setLogInStatus({
                    msg: "Username already taken please take another one",
                    key: Math.random(),
                });
            }
            setLoading(false);
        }
    };


    return(
        <>
            <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            // open={open}
            open={loading}
            >
            <CircularProgress color="secondary" />
            </Backdrop>


            <div className="login-container">
                <div className="image-container">
                    {/* login and signup both will have logo */}
                    <img src={logo} alt="logo" className="welcome-logo"></img>
                </div>

                {showlogin && (
                    <div className="login-box">
                        <p className="login-text">Login to your account</p>
                        {/* The onKeyDown event handler in React is triggered when a keyboard key is pressed while the component is focused. It's commonly used for handling keyboard interactions, such as submitting a form when the Enter key is pressed. */}
                        <TextField onChange={changeHandler} id="standard-basic" label="Enter user name" variant="outlined" color="secondary" name="name" onKeyDown={(event)=>{
                            if(event.code==="Enter"){
                                console.log(event);
                                loginHandler();
                            }
                        }}
                        />
                        <TextField onChange={changeHandler} id="outlined-password-input" label="Password" type="password" autoComplete="current-password" color="secondary" name="password" onKeyDown={(event)=>{
                            if(event.code==="Enter"){
                                console.log(event);
                                loginHandler();
                            }
                        }}
                        />
                        <Button variant="outlined" color="secondary" onClick={loginHandler} isLoading>Login</Button>
                        <p>Don't have an account?{" "}
                            <span className="hyper" onClick={()=>{
                                setShowLogin(false);
                            }}>
                                Sign Up
                            </span>
                        </p>

                        {logInStatus ? (
                            <Toaster key={logInStatus.key} message={logInStatus.msg}/>
                        ):null}
                        
                    </div>
                )}

                {!showlogin && (
                    <div className="login-box">
                        <p className="login-text">Create your account</p>
                        <TextField onChange={changeHandler} id="standard-basic" label="Enter user name" variant="outlined" color="secondary" name="name" helperText="" onKeyDown={(event)=>{
                            if(event.code==="Enter"){
                                console.log(event);
                                signUpHandler();
                            }
                        }}
                        />
                        <TextField onChange={changeHandler} id="standard-basic" label="Enter Email Address" variant="outlined" color="secondary" name="email" onKeyDown={(event)=>{
                            if(event.code==="Enter"){
                                console.log(event);
                                signUpHandler();
                            }
                        }}
                        />
                        <TextField onChange={changeHandler} id="outlined-password-input" label="Password" type="password" autoComplete="current-password" color="secondary" name="password" onKeyDown={(event)=>{
                            if(event.code==="Enter"){
                                console.log(event);
                                signUpHandler();
                            }
                        }}
                        />
                        <Button variant="outlined" color="secondary" onClick={signUpHandler}>Sign Up</Button>
                        <p>Already have an account?
                            <span className="hyper" onClick={()=>{
                                setShowLogin(true);
                            }}>LogIn</span>
                        </p>
                        {signInStatus ? (
                            <Toaster key={signInStatus.key} message={signInStatus.msg} />
                        ):null}


                    </div>
                )}
            </div>
        </>
    );
}
export default Login;