import React from "react";
// import people from "./people.png"
import { useSelector } from "react-redux";
import logo from "../Assets/logo.jpg"
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


function Welcome() {
    const lightTheme = useSelector(state => state.themeKey);
    // const userData = JSON.parse(localStorage.getItem("userData"));
    const userData = JSON.parse(sessionStorage.getItem("userData"));
    console.log(userData);
    const nav = useNavigate();
    if (!userData) {
        console.log("User is not authenticated")
        nav("/")
    }



    return (
        <div className={"welcome-container" + ((lightTheme) ? "" : " dark")}>
            <motion.img
                drag
                whileTap={{ scale: 1.05, rotate: 360 }}
                src={logo}
                alt="logo"
                className="welcome-logo"></motion.img>
            <b>Hi, {userData.data.name} &#x1F44B;</b>
            <p className="welcome-para">View and text directly to people present in chat rooms</p>

        </div>

    )


}
export default Welcome;