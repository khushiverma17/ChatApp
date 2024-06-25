import React, { useState } from "react";
import logo from '../Assets/logo.jpg'
import { Button, TextField, Backdrop, CircularProgress } from "@mui/material";
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Toaster from "./Toaster"


function Login() {

    const [showLogin, setShowLogin] = useState(true);
    const [data, setData] = useState({ name: "", email: "", password: "", verified: "false" });
    const [loading, setLoading] = useState(false);

    const [logInStatus, setLogInStatus] = useState("");
    const [signInStatus, setSignInStatus] = useState("");
    const [msg, setMsg] = useState("An email")

    const navigate = useNavigate();

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const loginHandler = async (e) => {
        setLoading(true);
        // console.log("data is ", data);
        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            };

            const response = await axios.post(
                "http://localhost:8080/user/login",
                data,
                config
            );
            setMsg(response.msg)
            setLogInStatus({ msg: "Success", key: Math.random() });
            setLoading(false);

            // localStorage.setItem("userData", JSON.stringify(response));
            sessionStorage.setItem("userData", JSON.stringify(response));
            navigate("/app/welcome")

        }
        catch (error) {
            setLogInStatus({
                msg: "Invalid Username or Password",
                key: Math.random(),
            })
        }
        setLoading(false)
    }

    const signUpHandler = async () => {

        setLoading(true);
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            const response = await axios.post(
                "http://localhost:8080/user/register",
                data,
                config
            );
            setMsg(response.data.message)
            setSignInStatus({ msg: "Success", key: Math.random() });
            await loginHandler()
            // navigate("/app/welcome");
            
            sessionStorage.setItem("userData", JSON.stringify(response));
            setLoading(false);
        }
        catch (error) {
            console.log(error);
            if (error.response) {
                setLogInStatus({
                    msg: "User with this email id already exists",
                    key: Math.random(),
                })
            }
            if (error.response.status === 406) {
                setLogInStatus({
                    msg: "User Name already Taken, Please take another one",
                    key: Math.random(),
                });
            }
            setLoading(false);
        }
    }



    return (
        <>
            <Backdrop
                sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="secondary" />
            </Backdrop>
            <div className="login-container">
                <div className="image-container">
                    <img src={logo} alt="logo" className="welcome-logo"></img>
                </div>
                {showLogin &&
                    <div className="login-box">
                        <p className="login-to-account" style={{ fontSize: "28px", marginBottom: "13px" }}>Login to your account</p>

                        <TextField
                            onChange={changeHandler}
                            className="standard-basic"
                            label="Enter user name"
                            variant="outlined"
                            color="secondary"
                            name="name"
                            onKeyDown={(event) => {
                                if (event.code === "Enter") {
                                    loginHandler();
                                }
                            }}
                        />




                        <TextField
                            onChange={changeHandler}
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            color="secondary"
                            name="password"
                            onKeyDown={(event) => {
                                if (event.code === "Enter") {
                                    loginHandler();
                                }
                            }}

                        />
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={loginHandler}
                            loading="true"
                        >Login</Button>
                        <p>Don't have an account ? {" "}

                            <span
                                className="hyper"
                                onClick={() => {
                                    setShowLogin(false);
                                }}
                            >
                                Sign Up
                            </span>
                        </p>
                        {logInStatus ? (
                            // <div className="">{msg}</div>
                            <Toaster key={Math.random()} message={msg} />
                        ) : <div>hello login</div>}

                        {logInStatus ? (
                            <Toaster key={logInStatus.key} message={logInStatus.msg} />
                        ) : null}
                    </div>
                }
                {!showLogin && (
                    <div className="login-box">
                        <p className="login-text">Create your account</p>
                        <TextField
                            onChange={changeHandler}
                            className="standard-basic"
                            label="Enter user name"
                            variant="outlined"
                            color="secondary"
                            name="name"
                            helperText=""
                            onKeyDown={(event) => {
                                if (event.code === "Enter") {
                                    signUpHandler();
                                }
                            }}
                        ></TextField>
                        <TextField
                            onChange={changeHandler}
                            className="standard-basic"
                            label="Enter email address"
                            variant="outlined"
                            color="secondary"
                            name="email"
                            onKeyDown={(event) => {
                                if (event.code === "Enter") {
                                    signUpHandler();
                                }
                            }}
                        ></TextField>
                        <TextField
                            onChange={changeHandler}
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            color="secondary"
                            name="password"
                            onKeyDown={(event) => {
                                if (event.code === "Enter") {
                                    signUpHandler();
                                }
                            }}
                        ></TextField>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={signUpHandler}
                        >
                            Sign Up
                        </Button>
                        <p>
                            Already have an account ?
                            <span
                                className="hyper"
                                onClick={() => {
                                    setShowLogin(true)
                                }}
                            >Log in</span>
                        </p>
                        {signInStatus ? (
                            // <div>{msg}</div>
                            <Toaster key={Math.random()} message={msg}></Toaster>
                        ) : <div>hello again</div>}
                        {/* {signInStatus ? (
                            <Toaster key={signInStatus.key} message={signInStatus.msg}></Toaster>
                        ) : null} */}
                    </div>
                )}



            </div>
        </>
    )
}
export default Login;