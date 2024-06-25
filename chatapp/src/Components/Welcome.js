import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import logo from "../Assets/logo.jpg"
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


function Welcome() {
    const lightTheme = useSelector(state => state.themeKey);
    // const userData = JSON.parse(localStorage.getItem("userData"));
    const userData = JSON.parse(sessionStorage.getItem("userData"));
    // console.log(userData);
    const nav = useNavigate();
    
    useEffect(()=>{
        if (!userData) {
            console.log("User is not authenticated")
            // nav("/")
            nav("/user/:id/verify/:token");
        }
    },[userData, nav])

    if(!userData){
        return (<div>loading...</div>)
    }




    return (
        <div className={"welcome-container" + ((lightTheme) ? "" : " dark")}>
            <motion.img
                drag
                whileTap={{ scale: 1.05, rotate: 360 }}
                src={logo}
                alt="logo"
                className="welcome-logo"></motion.img>
            {/* <b>Hi, {userData.data.name} &#x1F44B;</b> */}
            <b>Hi, {userData.name} &#x1F44B;</b>
            <center><p className="welcome-para">View and text directly to people present in chat rooms</p></center>

        </div>

    )


}
export default Welcome;