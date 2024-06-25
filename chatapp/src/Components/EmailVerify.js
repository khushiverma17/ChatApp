import { Backdrop, CircularProgress } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function EmailVerify() {
    const [validUrl, setValidUrl] = useState(false)
    // const {id, token} = useParams()
    const location = useLocation();
    const pathname = location.pathname;

    const parts = pathname.split('/');
    const id = parts[2];
    const token = parts[4]; // Fixed index for token

    const [loading, setLoading] = useState(true)
    const [message, setMessage] = useState("")
    const navigate = useNavigate()


    useEffect(() => {
        // console.log(id)
        // console.log(token)
        const verifyEmailUrl = async () => {
            try {
                const url = `http://localhost:8080/user/${id}/verify/${token}`
                const { data } = await axios.get(url)
                // console.log(data)
                setValidUrl(true)
                setMessage("Email verified successfully");
                sessionStorage.setItem("userData", JSON.stringify(data.resuser));
                sessionStorage.setItem("token", JSON.stringify(data.resuser.jwttoken))
                setLoading(false)
                navigate(`/click-verify/${id}/verify/${token}`)
            } catch (error) {
                console.log("error is ", error)
                setValidUrl(false)
                setMessage("Email verification failed. The link may be invalid or expired.")
            } finally {
                setLoading(false)
            }
        };

        verifyEmailUrl()
    }, [id, token])



    return (
        <>
            <Backdrop
                sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="secondary" />
            </Backdrop>
        </>
    )
}

export default EmailVerify;
