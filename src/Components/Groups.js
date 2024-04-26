import React from "react";
import './myStyles.css';
// import people from "./people.png";
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { AnimatePresence, anticipate, motion } from "framer-motion";

function Groups(){
    const lightTheme=useSelector(state=>state.themeKey);
    return(
        <AnimatePresence>
        <div className="list-container">
            <div className={"ug-header" + ((lightTheme)?"" : " dark")}>
                {/* <img src={people} style={{height:"2rem" , width:"2rem"}} ></img> */}
                <p className={"ug-title" + ((lightTheme)?"" : " dark")}>Groups Available</p>
            </div>
            <div className={"sb-search" + ((lightTheme)?"" : " dark")}>
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <input placeholder="Search" className={"search-box" + ((lightTheme)?"" : " dark")}/>
            </div>
            <div className="ug-list">
                <div className={"list-item" + ((lightTheme)?"" : " dark")}>
                    <p className={"con-icon" + ((lightTheme)?"" : " dark")}>K</p>
                    <p className={"con-title" + ((lightTheme)?"" : " dark")}>Group Name</p>
                </div>
                <div className={"list-item" + ((lightTheme)?"" : " dark")}>
                    <p className={"con-icon" + ((lightTheme)?"" : " dark")}>K</p>
                    <p className={"con-title" + ((lightTheme)?"" : " dark")}>Group Name</p>
                </div>
                <div className={"list-item" + ((lightTheme)?"" : " dark")}>
                    <p className={"con-icon" + ((lightTheme)?"" : " dark")}>K</p>
                    <p className={"con-title" + ((lightTheme)?"" : " dark")}>Group Name</p>
                </div>
                <div className={"list-item" + ((lightTheme)?"" : " dark")}>
                    <p className={"con-icon" + ((lightTheme)?"" : " dark")}>K</p>
                    <p className={"con-title" + ((lightTheme)?"" : " dark")}>Test User</p>
                </div>
                <div className={"list-item" + ((lightTheme)?"" : " dark")}>
                    <p className={"con-icon" + ((lightTheme)?"" : " dark")}>K</p>
                    <p className={"con-title" + ((lightTheme)?"" : " dark")}>Group Name</p>
                </div>
                <div className={"list-item" + ((lightTheme)?"" : " dark")}>
                    <p className={"con-icon" + ((lightTheme)?"" : " dark")}>K</p>
                    <p className={"con-title" + ((lightTheme)?"" : " dark")}>Group Name</p>
                </div>
                <div className={"list-item" + ((lightTheme)?"" : " dark")}>
                    <p className={"con-icon" + ((lightTheme)?"" : " dark")}>K</p>
                    <p className={"con-title" + ((lightTheme)?"" : " dark")}>Group Name</p>
                </div>
                <div className={"list-item" + ((lightTheme)?"" : " dark")}>
                    <p className={"con-icon" + ((lightTheme)?"" : " dark")}>K</p>
                    <p className={"con-title" + ((lightTheme)?"" : " dark")}>Group Name</p>
                </div>
                <div className={"list-item" + ((lightTheme)?"" : " dark")}>
                    <p className={"con-icon" + ((lightTheme)?"" : " dark")}>K</p>
                    <p className={"con-title" + ((lightTheme)?"" : " dark")}>Group Name</p>
                </div>
                <div className={"list-item" + ((lightTheme)?"" : " dark")}>
                    <p className={"con-icon" + ((lightTheme)?"" : " dark")}>K</p>
                    <p className={"con-title" + ((lightTheme)?"" : " dark")}>Group Name</p>
                </div>
            </div>

            <motion.div 
            initial={{opacity:0,scale:0}}
            animate={{opacity:1,scale:1}}
            exit={{opacity:0,scale:0}}
            transition={{ease:"anticipate",duration:"0.3"}}
            className="list-container">
                <div className={"ug-header" + ((lightTheme) ? "" : " dark")}>
                    <img src={people} style={{ height: "2rem", width: "2rem" }} ></img>
                    <p className={"ug-title" + ((lightTheme) ? "" : " dark")}>Groups Available</p>
                </div>
                <div className={"sb-search" + ((lightTheme) ? "" : " dark")}>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <input placeholder="Search" className={"search-box" + ((lightTheme) ? "" : " dark")} />
                </div>
                <div className="ug-list">
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className={"list-item" + ((lightTheme) ? "" : " dark")}>
                        <p className={"con-icon" + ((lightTheme) ? "" : " dark")}>K</p>
                        <p className={"con-title" + ((lightTheme) ? "" : " dark")}>Group Name</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className={"list-item" + ((lightTheme) ? "" : " dark")}>
                        <p className={"con-icon" + ((lightTheme) ? "" : " dark")}>K</p>
                        <p className={"con-title" + ((lightTheme) ? "" : " dark")}>Group Name</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className={"list-item" + ((lightTheme) ? "" : " dark")}>
                        <p className={"con-icon" + ((lightTheme) ? "" : " dark")}>K</p>
                        <p className={"con-title" + ((lightTheme) ? "" : " dark")}>Group Name</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className={"list-item" + ((lightTheme) ? "" : " dark")}>
                        <p className={"con-icon" + ((lightTheme) ? "" : " dark")}>K</p>
                        <p className={"con-title" + ((lightTheme) ? "" : " dark")}>Group Name</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className={"list-item" + ((lightTheme) ? "" : " dark")}>
                        <p className={"con-icon" + ((lightTheme) ? "" : " dark")}>K</p>
                        <p className={"con-title" + ((lightTheme) ? "" : " dark")}>Group Name</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className={"list-item" + ((lightTheme) ? "" : " dark")}>
                        <p className={"con-icon" + ((lightTheme) ? "" : " dark")}>K</p>
                        <p className={"con-title" + ((lightTheme) ? "" : " dark")}>Group Name</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className={"list-item" + ((lightTheme) ? "" : " dark")}>
                        <p className={"con-icon" + ((lightTheme) ? "" : " dark")}>K</p>
                        <p className={"con-title" + ((lightTheme) ? "" : " dark")}>Group Name</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className={"list-item" + ((lightTheme) ? "" : " dark")}>
                        <p className={"con-icon" + ((lightTheme) ? "" : " dark")}>K</p>
                        <p className={"con-title" + ((lightTheme) ? "" : " dark")}>Group Name</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className={"list-item" + ((lightTheme) ? "" : " dark")}>
                        <p className={"con-icon" + ((lightTheme) ? "" : " dark")}>K</p>
                        <p className={"con-title" + ((lightTheme) ? "" : " dark")}>Group Name</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className={"list-item" + ((lightTheme) ? "" : " dark")}>
                        <p className={"con-icon" + ((lightTheme) ? "" : " dark")}>K</p>
                        <p className={"con-title" + ((lightTheme) ? "" : " dark")}>Group Name</p>
                    </motion.div>

                </div>

            </motion.div>
            </div>
        </AnimatePresence>
    )
}
export default Groups;