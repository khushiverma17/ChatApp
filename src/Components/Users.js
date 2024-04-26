import React from "react";
import './myStyles.css';
// import people from "./people.png";
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

<<<<<<< HEAD
function Users(){
    const lightTheme=useSelector(state=>state.themeKey);
    return(
        <div className="list-container">
            <div className={"ug-header" + ((lightTheme)?"" : " dark")}>
                {/* <img src={people} style={{height:"2rem" , width:"2rem"}}></img> */}
                <p className={"ug-title" + ((lightTheme)?"" : " dark")}>Online Users</p>
            </div>
            <div className={"sb-search" + ((lightTheme)?"" : " dark")}>
                <IconButton>
                    <SearchIcon className={"icon" + ((lightTheme)?"" : " dark")}/>
                </IconButton>
                <input placeholder="Search" className={"search-box" + ((lightTheme)?"" : " dark")}/>
            </div>
            <div className="ug-list">
                <div className={"list-item" + ((lightTheme)?"" : " dark")}>
                    <p className="con-icon">K</p>
                    <p className={"con-title" + ((lightTheme)?"" : " dark")}>Test User</p>
                </div>
                <div className={"list-item" + ((lightTheme)?"" : " dark")}>
                    <p className="con-icon">K</p>
                    <p className={"con-title" + ((lightTheme)?"" : " dark")}>Test User</p>
                </div>
                <div className={"list-item" + ((lightTheme)?"" : " dark")}>
                    <p className="con-icon">K</p>
                    <p className={"con-title" + ((lightTheme)?"" : " dark")}>Test User</p>
                </div>
                <div className={"list-item" + ((lightTheme)?"" : " dark")}>
                    <p className="con-icon">K</p>
                    <p className={"con-title" + ((lightTheme)?"" : " dark")}>Test User</p>
                </div>
                <div className={"list-item" + ((lightTheme)?"" : " dark")}>
                    <p className="con-icon">K</p>
                    <p className={"con-title" + ((lightTheme)?"" : " dark")}>Test User</p>
                </div>
                <div className={"list-item" + ((lightTheme)?"" : " dark")}>
                    <p className="con-icon">K</p>
                    <p className={"con-title" + ((lightTheme)?"" : " dark")}>Test User</p>
                </div>
                <div className={"list-item" + ((lightTheme)?"" : " dark")}>
                    <p className="con-icon">K</p>
                    <p className={"con-title" + ((lightTheme)?"" : " dark")}>Test User</p>
                </div>
                <div className={"list-item" + ((lightTheme)?"" : " dark")}>
                    <p className="con-icon">K</p>
                    <p className={"con-title" + ((lightTheme)?"" : " dark")}>Test User</p>
                </div>
                <div className={"list-item" + ((lightTheme)?"" : " dark")}>
                    <p className="con-icon">K</p>
                    <p className={"con-title" + ((lightTheme)?"" : " dark")}>Test User</p>
                </div>
                <div className={"list-item" + ((lightTheme)?"" : " dark")}>
                    <p className="con-icon">K</p>
                    <p className={"con-title" + ((lightTheme)?"" : " dark")}>Test User</p>
                </div>
            </div>
=======
function Users() {
    const lightTheme = useSelector(state => state.themeKey);
    return (
        <AnimatePresence>
>>>>>>> 8c4d60d7966f86be545eb0d488173441b169c398

            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ ease: "anticipate", duration: "0.3" }}
                className="list-container">
                <div className={"ug-header" + ((lightTheme) ? "" : " dark")}>
                    <img src={people} style={{ height: "2rem", width: "2rem" }}></img>
                    <p className={"ug-title" + ((lightTheme) ? "" : " dark")}>Online Users</p>
                </div>
                <div className={"sb-search" + ((lightTheme) ? "" : " dark")}>
                    <IconButton>
                        <SearchIcon className={"icon" + ((lightTheme) ? "" : " dark")} />
                    </IconButton>
                    <input placeholder="Search" className={"search-box" + ((lightTheme) ? "" : " dark")} />
                </div>
                <div className="ug-list">
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className={"list-item" + ((lightTheme) ? "" : " dark")}>
                        <p className="con-icon">K</p>
                        <p className={"con-title" + ((lightTheme) ? "" : " dark")}>Test User</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className={"list-item" + ((lightTheme) ? "" : " dark")}>
                        <p className="con-icon">K</p>
                        <p className={"con-title" + ((lightTheme) ? "" : " dark")}>Test User</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className={"list-item" + ((lightTheme) ? "" : " dark")}>
                        <p className="con-icon">K</p>
                        <p className={"con-title" + ((lightTheme) ? "" : " dark")}>Test User</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className={"list-item" + ((lightTheme) ? "" : " dark")}>
                        <p className="con-icon">K</p>
                        <p className={"con-title" + ((lightTheme) ? "" : " dark")}>Test User</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className={"list-item" + ((lightTheme) ? "" : " dark")}>
                        <p className="con-icon">K</p>
                        <p className={"con-title" + ((lightTheme) ? "" : " dark")}>Test User</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className={"list-item" + ((lightTheme) ? "" : " dark")}>
                        <p className="con-icon">K</p>
                        <p className={"con-title" + ((lightTheme) ? "" : " dark")}>Test User</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className={"list-item" + ((lightTheme) ? "" : " dark")}>
                        <p className="con-icon">K</p>
                        <p className={"con-title" + ((lightTheme) ? "" : " dark")}>Test User</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className={"list-item" + ((lightTheme) ? "" : " dark")}>
                        <p className="con-icon">K</p>
                        <p className={"con-title" + ((lightTheme) ? "" : " dark")}>Test User</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className={"list-item" + ((lightTheme) ? "" : " dark")}>
                        <p className="con-icon">K</p>
                        <p className={"con-title" + ((lightTheme) ? "" : " dark")}>Test User</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className={"list-item" + ((lightTheme) ? "" : " dark")}>
                        <p className="con-icon">K</p>
                        <p className={"con-title" + ((lightTheme) ? "" : " dark")}>Test User</p>
                    </motion.div>

                </div>

            </motion.div>
        </AnimatePresence>
    )
}
export default Users;