import React from "react";

function MessageSelf(){
    var props2={Name:"You",message:"This is a sample message"};
    return(
        <div className="self-message-container">
            <div className="messageBox">
                <p>{props2.message}</p>
                <p className="self-timeStamp">12:00pm</p>
            </div>
        </div>
    )
}

export default MessageSelf;