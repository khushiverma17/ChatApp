import React from "react";
import people from "./people.png"
function Welcome(){
    return(
        <div className="welcome-container">
            <img src={people} alt="logo" className="welcome-logo"></img>
            <p className="welcome-para">Just Chatting</p>

        </div>
    )
}
export default Welcome;