import React from "react";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";

function CreateGroups(){
    const lightTheme=useSelector(state=>state.themeKey);
    return(
        <div className={"create-group" + ((lightTheme)?"" : " dark")}>
            <div className="group-name-container">
                <input className="group-name-input" placeholder="Enter Group Name"></input>
                <IconButton className="tick">
                    <DoneOutlineIcon/>
                </IconButton>

            </div>
        </div>
    )
}
export default CreateGroups;