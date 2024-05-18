import React, { useState, useEffect } from "react";
import './myStyles.css';
import people from "./people.png";
import SearchIcon from '@mui/icons-material/Search';
import { Icon, IconButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom"
import axios from "axios"
import RefreshIcon from "@mui/icons-material/Refresh";
import { refreshSidebarFun } from "../Features/refreshSidebar";




function Users() {
    const dispatch = useDispatch()
    const [refresh, setRefresh] = useState(true);
    const lightTheme = useSelector(state => state.themeKey);
    const [users, setUsers] = useState([])
    const userData = JSON.parse(localStorage.getItem("userData"))
    const nav = useNavigate();
    if (!userData) {
        console.log("User not authenticated")
        nav(-1)
    }
    useEffect(() => {
        console.log("Users Refreshed")
        const config = {
            headers: {
                Authorization: `Bearer ${userData.data.token}`
            }
        }
        axios.get("http://localhost:8080/user/fetchUsers", config).then((data) => {
            console.log("User data from API", data)
            setUsers(data.data)
        })
    }, [refresh])
    return (
        <AnimatePresence>


            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ ease: "anticipate", duration: "0.3" }}
                className="list-container">
                <div className={"ug-header" + ((lightTheme) ? "" : " dark")}>
                    <img src={people} style={{ height: "2rem", width: "2rem" }}></img>
                    <p className={"ug-title" + ((lightTheme) ? "" : " dark")}>Available Users</p>
                    <IconButton
                        className={"icon" + ((lightTheme) ? "" : "dark")}
                        onClick={() => {
                            setRefresh(!refresh)
                        }}>
                        <RefreshIcon />
                    </IconButton>

                </div>
                <div className={"sb-search" + ((lightTheme) ? "" : " dark")}>
                    <IconButton>
                        {/* <IconButton classNam={"icon" + kd;k;k;} */}
                        <SearchIcon className={"icon" + ((lightTheme) ? "" : " dark")} />
                    </IconButton>
                    <input placeholder="Search" className={"search-box" + ((lightTheme) ? "" : " dark")} />
                </div>
                <div className="ug-list">
                    {users.map((user, index) => {
                        return (
                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.98 }}
                                className={"list-item" + ((lightTheme) ? "" : " dark")}
                                key={index}
                                onClick={() => {

                                    // console.log("hello");
                                    // nav("./")
                                    console.log("Creating chat with ", user.name);  //THIS
                                    const config = {
                                        headers: {
                                            Authorization: `Bearer ${userData.data.token}`
                                        },
                                    };
                                    // console.log("token is ", userData.data.token)
                                    // console.log("after config")


                                    axios.post("http://localhost:8080/chat/",
                                        {
                                            userId: user._id,
                                        },
                                        config
                                    )
                                    .then((response) => {
                                        // THIS IS THE SOLUTION BECAUSE IN THE APP.JS WE HAVE NESTED ROUTES CHAT/:ID ROUTE IS INSIDE APP ROUTE
                                        // nav(`/app/chat/${user._id}`);
                                        console.log("USER ISER IS ", userData)
                                        // nav(`/app/chat/${userData.data._id}`);
                                        // nav(`/app/chat/${user.data._id} `)
                                        // nav("/app/chat" + user.data._id + "&" + userData.data.name)
                                        // nav(`/app/chat/${response.data._id}`)


                                        //TASK IS TO SEND THE CORRECT ID HERE ONLY SO THAT IT GET DISPLAYED IN THE TOP OF CHATAREA
                                        nav("/app/chat/" + response.data._id + "&" + response.data.users[0].name)


                                        // console.log("ljdfkldj", user.data._id)

                                        // navigate("chat/" + conversation._id + "&" + chatName)
                                        console.log("RESPONSE IS " , response);
                                        console.log("success")
                                    }).catch((error) => {
                                        console.log(error)
                                    })
                                    dispatch(refreshSidebarFun());
                                    console.log("after")
                                }}
                            >
                                <p className="con-icon">K</p>
                                <p className={"con-title" + ((lightTheme) ? "" : " dark")}>{user.name}</p>
                            </motion.div>

                        )
                    })}

                </div>

            </motion.div>
        </AnimatePresence>
    )
}
export default Users;
