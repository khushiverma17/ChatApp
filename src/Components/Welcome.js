import React from "react";
// import people from "./people.png"
import { useSelector } from "react-redux";
<<<<<<< HEAD
// import logo from "./logo.png"
import {motion} from "framer-motion"
import { useNavigate } from "react-router-dom";
=======
import logo from "./logo.jpg"
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion";
>>>>>>> 8c4d60d7966f86be545eb0d488173441b169c398


function Welcome(){
    const lightTheme=useSelector(state=>state.themeKey);
<<<<<<< HEAD
    const userData= JSON.parse(localStorage.getItem("userData"));
    console.log(userData);
    const nav=useNavigate();
    if(!userData){
        console.log("User is not authenticated")
        nav("/")
    }



    return(
        <div className={"welcome-container" + ((lightTheme)?"" : " dark")}>
            <motion.img 
            drag
            whileTap={{scale:1.05, rotate:360}}
            src="https://t4.ftcdn.net/jpg/02/53/91/57/360_F_253915708_G8elkrM3HdQPi3txjwTirLDXVfPuqnww.jpg"
             alt="logo"
              className="welcome-logo"></motion.img>
              <b>Hi, {userData.data.name} &#x1F44B</b>
            <p className="welcome-para">View and text directly to people present in chat rooms</p>
=======
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
>>>>>>> 8c4d60d7966f86be545eb0d488173441b169c398

        </div>
    )
}
export default Welcome;