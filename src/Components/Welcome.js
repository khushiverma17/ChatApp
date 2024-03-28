import React from "react";
import people from "./people.png"
import { useSelector } from "react-redux";
import logo from "./logo.jpg"
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion";


function Welcome(){
    const lightTheme=useSelector(state=>state.themeKey);
    const userData=JSON.parse(localStorage.getItem("userData"));
    console.log(userData);
    const nav=useNavigate();
    if(!userData){
        console.log("User not authentcated");
        nav("/");
    }
    
    return(
        <div className={"welcome-container" + ((lightTheme)?"" : " dark")}>
            <motion.img drag whileTap={{scale:1.05, rotate:360}} src={logo} alt="logo" className="welcome-logo"/>
            <b>Hi, {userData.data.name}</b>
            <p className="welcome-para">Just Chatting</p>

        </div>
    )
}
export default Welcome;