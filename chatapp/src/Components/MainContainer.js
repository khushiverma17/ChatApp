import { React, createContext, useState } from "react";
import './myStyles.css';
import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const myContext = createContext();
function MainContainer() {
    const dispatch = useDispatch();
    const lightTheme = useSelector((state) => state.themeKey)
    const [refresh, setRefresh] = useState(true)
    return (
        <div className="main-container">
            <myContext.Provider value={{ refresh: refresh, setRefresh: setRefresh }}>
                <Sidebar />
                {/* outlet is component of library which helps to render out components inside another components */}
                <Outlet />
            </myContext.Provider>


        </div>
    )
}

export default MainContainer;