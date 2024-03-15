import {React,useState} from "react";
import './myStyles.css';
import Sidebar from "./Sidebar"
import ChatArea from "./ChatArea";
import ConversationsItem from "./ConversationsItem";
import Welcome from "./Welcome";
import Groups from "./Groups"
import CreateGroups from "./CreateGroups";
import { Outlet } from "react-router-dom";

function MainContainer(){
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
    return(
        <div className="main-container">
            <Sidebar/>
            {/* outlet is component of library which helps to render out components inside another components */}
            <Outlet/>
            {/* <ChatArea props={ConversationsItem[0]}/> */}
            {/* <Welcome/> */}
            {/* <ChatArea props={conversations[0]}/> */}
            {/* <Users></Users> */}


        </div>
    )
}

export default MainContainer;