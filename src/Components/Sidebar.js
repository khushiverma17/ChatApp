import React, { useState } from "react";
import './myStyles.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";
import ConversationsItem from "./ConversationsItem";
import { useNavigate } from "react-router-dom";

function Sidebar(){
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

    // useNavigate retruns a function
    const navigate=useNavigate();





    return(
        <div className="sidebar-container">
            <div className="sb-header">
                <div>
                    <IconButton>
                        <AccountCircleIcon/>
                    </IconButton>
                </div>
                <div>
                    <IconButton onClick={()=>{navigate("./users")}}>
                        <PersonAddIcon/>
                    </IconButton>
                    <IconButton onClick={()=>{navigate("./groups")}}>
                        <GroupAddIcon/>
                    </IconButton>
                    <IconButton onClick={()=>{navigate("./create-groups")}}>
                        <AddCircleIcon/>
                    </IconButton>
                    <IconButton>
                        <NightlightIcon/>
                    </IconButton>
                    </div>

            </div>
            <div className="sb-search">
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input placeholder="Search" className="search-box"/>

            </div>
            <div className="sb-conversations">
                {conversations.map((conversation)=>{
                    return <ConversationsItem props={conversation} key={conversation.Name}/>
                })}
            </div>
        </div>
    )
}
export default Sidebar