import React from "react";
import './myStyles.css';
import Sidebar from "./Sidebar"
import ChatArea from "./ChatArea";
function MainContainer(){
    return(
        <div className="main-container">
            <Sidebar/>
            <ChatArea/>
        </div>
    )
}

export default MainContainer;