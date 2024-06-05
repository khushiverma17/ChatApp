import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

function ConversationsItem({ props }) {
    const lightTheme = useSelector(state => state.themeKey);
    const navigate = useNavigate();
    return (
        <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="conversation-container to-hover-conversation" onClick={() => { navigate("chat") }}>
            <p className="con-icon">{props.Name[0]}</p>
            <p className="con-title">{props.Name}</p>
            <p className="con-lastMessage">{props.lastMessage}</p>
            <p className="con-timeStamp">{props.timeStamp}</p>
        </motion.div>
    )
}
export default ConversationsItem;