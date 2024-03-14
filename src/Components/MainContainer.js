import React from "react";
import './myStyles.css';
import Sidebar from "./Sidebar"
import ChatArea from "./ChatArea";
import ConversationsItem from "./ConversationsItem";
import Welcome from "./Welcome";
function MainContainer(){
    return(
        <div className="main-container">
            <Sidebar/>
            <ChatArea props={ConversationsItem[0]}/>
            {/* <Welcome/> */}

        </div>
    )
}

export default MainContainer;