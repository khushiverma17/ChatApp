import React, { useState } from "react";
import './myStyles.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode'
import SearchIcon from '@mui/icons-material/Search';
import { Icon, IconButton } from "@mui/material";
import ConversationsItem from "./ConversationsItem";
import { useNavigate } from "react-router-dom";
import { light } from "@mui/material/styles/createPalette";
import {useDispatch, useSelector} from "react-redux"
import {toggleTheme} from "../Features/themeSlice"

function Sidebar(){
    const navigate=useNavigate();
    const dispatch=useDispatch();
    // to make this lightTheme variable globally available, use redux toolkit it is a global state management library which allows to provide a particular state to every other components in the application
    // const [lightTheme,setLightTheme]=useState("true");

    const lightTheme=useSelector(state=>state.themeKey);




    const [conversations, setConversations]= useState([
        {
            Name: "Smith",
            lastMessage: "Last Message #1",
            timeStamp: "Today",
        },
        {
            Name: "John",
            lastMessage: "Last Message #2",
            timeStamp: "Today",
        },
        {
            Name: "Max",
            lastMessage: "Last Message #3",
            timeStamp: "Today",
        }
    ])

    // useNavigate retruns a function





    return(
        <div className="sidebar-container">
            <div className={"sb-header" + ((lightTheme)?"" : " dark")}>
                <div className="profilePic">
                    <IconButton>
                        <AccountCircleIcon className={"icon" + ((lightTheme)?"" : " dark")}/>
                    </IconButton>
                </div>
                <div className="other-items">
                    <IconButton onClick={()=>{navigate("./users")}}>
                        <PersonAddIcon className={"icon" + ((lightTheme)?"" : " dark")}/>
                    </IconButton>
                    <IconButton onClick={()=>{navigate("./groups")}}>
                        <GroupAddIcon className={"icon" + ((lightTheme)?"" : " dark")}/>
                    </IconButton>
                    <IconButton onClick={()=>{navigate("./creategroups")}}>
                        <AddCircleIcon className={"icon" + ((lightTheme)?"" : " dark")}/>
                    </IconButton>
                    {/* <IconButton onClick={()=>{setLightTheme((prevValue)=>{
                        return !prevValue;
                    })}}> */}
                    <IconButton onClick={()=>{dispatch(toggleTheme())}}>
                        {lightTheme && <NightlightIcon className={"icon" + ((lightTheme)?"" : " dark")}/>}
                        {!lightTheme && <LightModeIcon className={"icon" + ((lightTheme)?"" : " dark")}/>}
                    </IconButton>
                    </div>

            </div>
            <div className={"sb-search" + ((lightTheme)?"" : " dark")}>
                <IconButton>
                    <SearchIcon  className={((lightTheme)?"" : " dark")}/>
                </IconButton>
                <input placeholder="Search" className={"search-box" + ((lightTheme)?"" : " dark")}/>

            </div>
            <div className={"sb-conversations" + ((lightTheme)?"" : " dark")}>
                {conversations.map((conversation)=>{
                    return <ConversationsItem props={conversation} key={conversation.Name}/>
                })}
            </div>
        </div>
    )
}
export default Sidebar