import React from "react";
import './myStyles.css';
import people from "./people.png";
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";

function Users(){
    return(
        <div className="list-container">
            <div className="ug-header">
                <img src={people} style={{height:"2rem" , width:"2rem"}}></img>
                <p className="ug-title">Online Users</p>
            </div>
            <div className="sb-search">
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <input placeholder="Search" className="search-box"/>
            </div>
            <div className="ug-list">
                <div className="list-item">
                    <p className="con-icon">K</p>
                    <p className="con-title">Test User</p>
                </div>
                <div className="list-item">
                    <p className="con-icon">K</p>
                    <p className="con-title">Test User</p>
                </div>
                <div className="list-item">
                    <p className="con-icon">K</p>
                    <p className="con-title">Test User</p>
                </div>
                <div className="list-item">
                    <p className="con-icon">K</p>
                    <p className="con-title">Test User</p>
                </div>
                <div className="list-item">
                    <p className="con-icon">K</p>
                    <p className="con-title">Test User</p>
                </div>
                <div className="list-item">
                    <p className="con-icon">K</p>
                    <p className="con-title">Test User</p>
                </div>
                <div className="list-item">
                    <p className="con-icon">K</p>
                    <p className="con-title">Test User</p>
                </div>
                <div className="list-item">
                    <p className="con-icon">K</p>
                    <p className="con-title">Test User</p>
                </div>
                <div className="list-item">
                    <p className="con-icon">K</p>
                    <p className="con-title">Test User</p>
                </div>
                <div className="list-item">
                    <p className="con-icon">K</p>
                    <p className="con-title">Test User</p>
                </div>
            </div>

        </div>
    )
}
export default Users;