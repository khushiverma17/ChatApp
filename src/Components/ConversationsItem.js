import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ConversationsItem({props}){
    const lightTheme=useSelector(state=>state.themeKey);
    const navigate=useNavigate();
    return(
        <div className="conversation-container to-hover-conversation" onClick={()=>{navigate("chat")}}>
            <p className="con-icon">{props.Name[0]}</p>
            <p className={"con-title" + ((lightTheme)?"" : " dark")}>{props.Name}</p>
            <p className="con-lastMessage">{props.lastMessage}</p>
            <p className="con-timeStamp">{props.timeStamp}</p>
        </div>
    )
}
export default ConversationsItem;