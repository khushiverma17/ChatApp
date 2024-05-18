import { React, useContext, useEffect, useRef, useState } from "react";
import { IconButton, Skeleton, setRef } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import MessageOthers from "./MessageOthers";
import MessageSelf from "./MessagesSelf";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { myContext } from "./MainContainer";
import axios from "axios";
import io from "socket.io-client"



const ENDPOINT = "http://localhost:8080"
var socket

function ChatArea() {
    const lightTheme = useSelector(state => state.themeKey);
    const [messageContent, setMessageContent] = useState("");
    const messagesEndRef = useRef(null);
    const dyParams = useParams();
    const [chat_id, chat_user] = dyParams._id.split("&")
    console.log("chart id and user id is ", chat_id, chat_user)
    // const userData = JSON.parse(localStorage.getItem("userData"))
    const userData = JSON.parse(sessionStorage.getItem("userData"))
    const [allMessages, setAllMessages] = useState([])
    const { refresh, setRefresh } = useContext(myContext)
    const [loaded, setLoaded] = useState(false)
    const [allMessagesCopy, setAllMessagesCopy] = useState([])
    const [socketConnectionStatus, setSocketConnectionStatus] = useState(false);



    const sendMessage = () => {
        var data = null;
        const config = {
            headers: {
                Authorization: `Bearer ${userData.data.token}`
            }
        }
        console.log(typeof messageContent, typeof chat_id)
        axios
            .post(
                "http://localhost:8080/message/",
                // `http://localhost:8080/message/${chat_id}`,
                {
                    content: messageContent,
                    chatId: chat_id,
                },
                config
            )
            .then(({ response }) => {
                data = response
                console.log("Message Fired")
                // socket.emit("newMessage", data);    //remove
            })
            .catch(error => {
                console.log("ERROR IS CHAT ARESA ; ", error)
            })
        socket.emit("newMessage", data)
    }

    useEffect(() => {
        socket = io(ENDPOINT);
        socket.emit("setup", userData);
        socket.on("connection", () => {
            setSocketConnectionStatus(!socketConnectionStatus);
        })
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        socket.on("message received", (newMessage) => {
            if (!allMessagesCopy || allMessagesCopy._id !== newMessage._id) { }
            else {
                setAllMessages([...allMessages], newMessage);
            }
        })
    })

    useEffect(() => {
        console.log("Users refreshed");
        const config = {
            headers: {
                Authorization: `Bearer ${userData.data.token}`,
            },
        };
        axios
            .get("http://localhost:8080/message/" + chat_id, config)
            .then(({ data }) => {
                setAllMessages(data);
                setLoaded(true);
                socket.emit("join-chat", chat_id);
            });
        setAllMessagesCopy(allMessages);
        // eslint-disable-next-line
    }, [refresh, chat_id, userData.data.token, allMessages]);




    if (!loaded) {
        return (
            <div
                style={{
                    border: "20px",
                    padding: "10px",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",

                }}
            >
                <Skeleton
                    variant="rectangular"
                    sx={{ width: "100%", borderRadius: "10px" }}
                    height={60}
                />
                <Skeleton
                    variant="rectangular"
                    sx={{
                        width: "100%",
                        borderRadius: "10px",
                        flexGrow: "1",
                    }}
                />
                <Skeleton
                    variant="rectangular"
                    sx={{ width: "100%", borderRadius: "10px" }}
                    height={60}
                />

            </div>
        );
    } else {
        return (
            <div className={"chatArea-Container" + ((lightTheme) ? "" : " dark")}>
                <div className={"chatArea-header" + ((lightTheme) ? "" : " dark")}>

                    <p className="con-icon">
                        {chat_user[0]}
                    </p>
                    <div className="header-text">
                        <p className={"con-title" + ((lightTheme) ? "" : " dark")}>
                            {chat_user}
                        </p>
                    </div>
                    <IconButton>
                        <DeleteIcon className={"icon" + ((lightTheme) ? "" : " dark")} />
                    </IconButton>



                </div>
                <div className={"messages-container" + ((lightTheme) ? "" : " dark")}>
                    {allMessages
                        .slice(0)
                        .map((message, index) => {
                            const sender = message.sender;
                            const self_id = userData.data._id
                            if (sender._id === self_id) {
                                return <MessageSelf props={message} key={index} />
                            } else {
                                return <MessageOthers props={message} key={index} />
                            }
                        })
                    }
                </div>

                {/* <div ref={messagesEndRef} className="BOTTOM"></div> */}
                <div className="text-input-area">
                    <input
                        placeholder="Type a Message"
                        className="search-box"
                        value={messageContent}
                        onChange={(e) => {
                            setMessageContent(e.target.value)
                        }}
                        onKeyDown={(event) => {
                            if (event.code === "Enter") {
                                sendMessage();
                                setMessageContent("")
                                setRefresh(!refresh)
                            }
                        }} />

                    <IconButton
                        onClick={() => {
                            sendMessage();
                            setMessageContent("")
                            setRefresh(!refresh)
                        }}
                    >
                        <SendIcon className="send-icon"></SendIcon>
                    </IconButton>

                </div>

            </div>
        )
    }

}

export default ChatArea;
