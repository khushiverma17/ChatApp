import React, { useContext, useEffect, useState } from "react";
import './myStyles.css';
import people from "./people.png";
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, anticipate, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Groups(){
    const [refresh, setRefresh] = useContext(myContext)
    const lightTheme=useSelector(state=>state.themeKey);
    const dispatch=useDispatch();
    const [groups, setGroups] = useState([]);
    const userData= JSON.parse(localStorage.getItem("userData"));
    const nav=useNavigate();

    if(!userData){
        console.log("User not authenticated")
        nav("/");
    }

    const user=userData.data
    useEffect(()=>{
        console.log("Users refreshed: ", user.token)
        const config={
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        axios
            .get("http://localhost:3000/chat/fetchGroups", config)
            .then((response)=>{
                console.log("Group Data from API ", response.data)
                setGroups(response.data);
            })
    }, [refresh])


    return(
        <AnimatePresence>
            <motion.div 
            initial={{opacity:0,scale:0}}
            animate={{opacity:1,scale:1}}
            exit={{opacity:0,scale:0}}
            transition={{ease:"anticipate",duration:"0.3"}}
            className="list-container">
                <div className={"ug-header" + ((lightTheme) ? "" : " dark")}>
                    <img src={people} style={{ height: "2rem", width: "2rem" }} ></img>
                    <p className={"ug-title" + ((lightTheme) ? "" : " dark")}>Groups Available</p>
                    <IconButton
                        className={"icon" + (lightTheme ? "" : "dark")}
                        onClick={()=>{
                            setRefresh(!refresh);
                        }}
                        
                        
                    >
                        <RefreshIcon/>
                    </IconButton>
                </div>
                <div className={"sb-search" + ((lightTheme) ? "" : " dark")}>
                    <IconButton className={"icon" +(lightTheme ? "" : "dark")}>
                        <SearchIcon />
                    </IconButton>
                    <input placeholder="Search" className={"search-box" + ((lightTheme) ? "" : " dark")} />
                </div>
                <div className="ug-list">
                    {groups.map((group, index)=>{
                        return(
                            <motion.div
                                whileHover={{scale:1.01}}
                                whileTap={{scale:0.98}}
                                className={"list-item" + (lightTheme ? "" : "dark") }
                                key={index}
                                onClick={()=>{
                                    console.log("Creating chat with group", group.name)
                                    dispatch(refreshSidebarFun());
                                }}
                            >
                                <p className={"con-icon" + (lightTheme ? "" : "dark")}></p>
                                <p className={"con-title" + (lightTheme ? "" : "dark")}>
                                    {group.chatName}
                                </p>

                            </motion.div>
                        )
                    })}
                

                </div>

            </motion.div>
        </AnimatePresence>
    )
}
export default Groups;