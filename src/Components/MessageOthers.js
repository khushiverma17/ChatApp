import React from "react";

function MessageOthers(){
    var props1={Name:"Random User", message:"This is a sample message"}
    return(
        <div className="other-message-container">
            <div className="conversation-container">
                <p className="con-icon">{props1.Name[0]}</p>
                <div className="other-text-content">
                    <p className="con-title">{props1.Name}</p>
                    <p className="con-last-message">{props1.message}</p>
                    <p className="self-time-stamp">12:00 pm</p>
                </div>
            </div>

        </div>
    )
}

export default MessageOthers;