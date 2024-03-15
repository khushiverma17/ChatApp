import React from "react";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";

function CreateGroups(){
    const lightTheme=useSelector(state=>state.themeKey);
    return(
        <div className="create-group">
            <div className={"group-name-container" + ((lightTheme)?"" : " dark")}>
                <input className={"group-name-input" + ((lightTheme)?"" : " dark")} placeholder="Enter Group Name"></input>
                <IconButton className="tick">
                    <DoneOutlineIcon className={"icon" + ((lightTheme)?"" : " dark")}/>
                </IconButton>

            </div>
        </div>
    )
}
export default CreateGroups;