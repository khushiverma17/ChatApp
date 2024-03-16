import React from "react";
import people from "./people.png"
import { useSelector } from "react-redux";
import logo from "./logo.jpg"


function Welcome(){
    const lightTheme=useSelector(state=>state.themeKey);
    return(
        <div className={"welcome-container" + ((lightTheme)?"" : " dark")}>
            <img src={logo} alt="logo" className="welcome-logo"></img>
            <p className="welcome-para">Just Chatting</p>

        </div>
    )
}
export default Welcome;