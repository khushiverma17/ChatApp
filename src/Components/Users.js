import React from "react";
import './myStyles.css';
import people from "./people.png";
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";

function Users(){
    const lightTheme=useSelector(state=>state.themeKey);
    return(
        <div className="list-container">
            <div className={"ug-header" + ((lightTheme)?"" : " dark")}>
                <img src={people} style={{height:"2rem" , width:"2rem"}}></img>
                <p className={"ug-title" + ((lightTheme)?"" : " dark")}>Online Users</p>
            </div>
            <div className={"sb-search" + ((lightTheme)?"" : " dark")}>
                <IconButton>
                    <SearchIcon/>
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

        </div>
    )
}
export default Users;