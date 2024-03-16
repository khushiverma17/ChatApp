import {React,useState} from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ConversationsItem from "./ConversationsItem";
import SendIcon from "@mui/icons-material/Send";
import MessageOthers from "./MessageOthers";
import MessageSelf from "./MessagesSelf";
import { useSelector } from "react-redux";

function ChatArea(){
    const lightTheme=useSelector(state=>state.themeKey);
    const [conversations, setConversations]= useState([
        {
            Name: "Test1",
            lastMessage: "Last Message #1",
            timeStamp: "Today",
        },
        {
            Name: "Test2",
            lastMessage: "Last Message #2",
            timeStamp: "Today",
        },
        {
            Name: "Test3",
            lastMessage: "Last Message #3",
            timeStamp: "Today",
        }
    ])
    var props=conversations[0];
    return(
        <div className="ChatArea-container">
            <div className={"chatArea-header" + ((lightTheme)?"" : " dark")}>

                {/* <p className="con-icon">{props.Name[0]}</p> */}
                <p className="con-icon">K</p>
                <div className="header-text">
                    <p className={"con-title" + ((lightTheme)?"" : " dark")}>Khushi</p>
                    {/* <p className="con-title">{props.Name}</p> */}
                    <p className="con-timeStamp">8:00 pm</p>
                    {/* <p className="con-timeStamp">{props.timeStamp}</p> */}
                </div>
                <IconButton>
                    <DeleteIcon className={"icon" + ((lightTheme)?"" : " dark")}/>
                </IconButton>
            
            
            
            </div>
            <div className={"messages-container" + ((lightTheme)?"" : " dark")}>
                <MessageOthers/>
                <MessageSelf/>
                <MessageOthers/>
                <MessageSelf/>
                <MessageOthers/>
                <MessageSelf/>
                <MessageOthers/>
                <MessageSelf/>



            </div>
            <div className="text-input-area">
                <input placeholder="Type a Message" className="search-box"></input>
                <IconButton>
                    <SendIcon className="send-icon"></SendIcon>
                </IconButton>
                
            </div>

        </div>
    )
}

export default ChatArea;