import React from "react";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { IconButton } from "@mui/material";

function CreateGroups(){
    return(
        <div className="create-group">
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