import React, { useState } from "react";
// import logo from './logo.png'
import { Button, TextField, Backdrop, CircularProgress } from "@mui/material";
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Toaster from "./Toaster"


function Login() {

    const [showLogin, setShowLogin] = useState(true);
    const [data, setData] = useState({ name: "", email: "", password: "" });
    const [loading, setLoading] = useState(false);

    const [logInStatus, setLogInStatus] = useState("");
    const [signInStatus, setSignInStatus] = useState("");

    const navigate = useNavigate();

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const loginHandler = async (e) => {
        setLoading(true);
        console.log(data);
        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            };
            const response = await axios.post(
                "http://localhost:5000/user/login",
                data,
                config
            );
            console.log("Login ", response);
            setLogInStatus({ msg: "Success", key: Math.random() });
            navigate("/app/welcome")
            localStorage.setItem("userData", JSON.stringify(response));
            setLoading(false);

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
                "http://localhost:5000/user/register",
                data,
                config
            );
            console.log(response);
            setSignInStatus({ msg: "Success", key: Math.random() });
            navigate("/app/welcome");
            localStorage.setItem("userData", JSON.stringify(response));
            setLoading(false);
        }
        catch (error) {
            console.log(error);
            if (error.response && error.response.status === 405) {
                setLogInStatus({
                    msg: "User with this email id already exists",
                    key: Math.random(),
                })
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
                    <img src="https://t4.ftcdn.net/jpg/02/53/91/57/360_F_253915708_G8elkrM3HdQPi3txjwTirLDXVfPuqnww.jpg" alt="logo" className="welcome-logo"></img>
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
                        />




                        <TextField
                            onChange={changeHandler}
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            color="secondary"
                            name="password"

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
                        ></TextField>
                        <TextField
                            onChange={changeHandler}
                            className="standard-basic"
                            label="Enter email address"
                            variant="outlined"
                            color="secondary"
                            name="email"
                        ></TextField>
                        <TextField
                            onChange={changeHandler}
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            color="secondary"
                            name="password"
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
                            <Toaster key={signInStatus.key} message={signInStatus.msg}></Toaster>
                        ) : null}
                    </div>
                )}



            </div>
        </>
    )
}
export default Login;