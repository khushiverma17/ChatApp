import React, { useContext, useEffect, useState } from "react";
import './myStyles.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode'
import SearchIcon from '@mui/icons-material/Search';
import { Icon, IconButton, setRef } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";
import { light } from "@mui/material/styles/createPalette";
import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "../Features/themeSlice"
import { myContext } from "./MainContainer";
import axios from "axios";


function Sidebar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // to make this lightTheme variable globally available, use redux toolkit it is a global state management library which allows to provide a particular state to every other components in the application
    // const [lightTheme,setLightTheme]=useState("true");

    const lightTheme = useSelector(state => state.themeKey);
    const {refresh, setRefresh} = useContext(myContext);
    console.log("Context API : refresh", refresh);
    const [conversations, setConversations] = useState([]);
    const userData = JSON.parse(localStorage.getItem("userData"))
    const nav = useNavigate();
    if (!userData) {
        console.log("User is not authenticated");
        nav("/")
    }

    const user = userData.data;
    useEffect(() => {
        console.log("Conversations:", conversations);

        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            }
        }

        axios.get("http://localhost:8080/chat", config).then((response) => {
            console.log("Data refresh in sidebar", response.data)
            setConversations(response.data);
        })
    }, [refresh])



    return (
        <div className="sidebar-container">
            <div className={"sb-header" + ((lightTheme) ? "" : " dark")}>
                <div className="other-items">
                    <IconButton
                        onClick={() => {
                            nav("/app/welcome");
                        }}
                    >
                        <AccountCircleIcon
                            className={"icon" + (lightTheme ? "" : " dark")}
                        />
                    </IconButton>
                    <IconButton onClick={() => { navigate("./users") }}>
                        <PersonAddIcon className={"icon" + ((lightTheme) ? "" : " dark")} />
                    </IconButton>
                    <IconButton onClick={() => { navigate("./groups") }}>
                        <GroupAddIcon className={"icon" + ((lightTheme) ? "" : " dark")} />
                    </IconButton>
                    <IconButton onClick={() => { navigate("./create-groups") }}>
                        <AddCircleIcon className={"icon" + ((lightTheme) ? "" : " dark")} />
                    </IconButton>
                    {/* <IconButton onClick={()=>{setLightTheme((prevValue)=>{
                        return !prevValue;
                    })}}> */}
                    <IconButton onClick={() => { dispatch(toggleTheme()) }}>
                        {lightTheme && <NightlightIcon className={"icon" + ((lightTheme) ? "" : " dark")} />}
                        {!lightTheme && <LightModeIcon className={"icon" + ((lightTheme) ? "" : " dark")} />}
                    </IconButton>
                    <IconButton
                        onClick={() => {
                            localStorage.removeItem("userData");
                            navigate("/");
                        }}
                    >
                        <ExitToAppIcon className={"icon" + (lightTheme ? "" : " dark")} />
                    </IconButton>
                </div>

            </div>
            <div className={"sb-search" + ((lightTheme) ? "" : " dark")}>
                <IconButton>
                    <SearchIcon className={((lightTheme) ? "" : " dark")} />
                </IconButton>
                <input placeholder="Search" className={"search-box" + ((lightTheme) ? "" : " dark")} />

            </div>
            <div className={"sb-conversations" + ((lightTheme) ? "" : " dark")}>
                {conversations.map((conversation, index) => {
                    var chatName=""
                    if(conversation.isGroupChat){
                        chatName=conversation.chatName
                    }
                    else{
                        conversation.users.map((user)=>{
                            if(user._id !== userData.data._id){
                                chatName=user.name
                            }
                        })
                    }
                    // if(conversation.users.length===1){
                    //     return <div key={index}></div>
                    // }
                    if(conversation.latestMessage===undefined){
                        return (
                            <div
                                key={index}
                                onClick={()=>{
                                    console.log("Refresh fired from sidebar")
                                    setRefresh(!refresh)
                                }}
                            >
                                <div
                                    key={index}
                                    className="conversation-container"
                                    onClick={()=>{
                                        navigate("chat/" + conversation._id + "&" + chatName)
                                    }}
                                >
                                    <p className={"con-icon" +(lightTheme ? "" : "dark")}>
                                        {chatName[0]}
                                    </p>
                                    <p className={"con-title" +(lightTheme ? "" : "dark")}>
                                        {chatName}
                                    </p>
                                    <p className={"con-lastMessage" +(lightTheme ? "" : "dark")}>
                                        No previous messages, click here to start a new chat
                                    </p>
                                </div>

                            </div>
                        );
                    }else{
                        return(
                            <div
                                key={index}
                                className="conversation-container"
                                onClick={()=>{
                                    navigate(
                                        "chat/" + conversation._id + "&" + chatName
                                    )
                                }}
                            >
                                <p className={"con-icon" + (lightTheme ? "" : "dark")}>
                                    {chatName[0]}
                                </p>
                                <p className={"con-title" + (lightTheme ? "" : "dark")}>
                                    {chatName}
                                </p>
                                <p className={"con-lastMessage"}>
                                    {chatName.latestMessage.content}
                                </p>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}
export default Sidebar