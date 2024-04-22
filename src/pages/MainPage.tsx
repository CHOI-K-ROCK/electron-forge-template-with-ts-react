import React from "react";
import FullscreenButton from "../components/FullscreenButton";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div style={{
                display : "flex",
                flexDirection : "column",
                alignItems : "flex-start",
                gap : 15,
                marginBottom : "15px"
            }}>
                <FullscreenButton />
                <button onClick={() => navigate("/sub")}>to SubPage</button>
            </div>
            <p style={{
                fontSize: 20,
                fontWeight: 700
            }}>
                Electron Forge + React + TS Template
            </p>
        </div>
    )
}

export default MainPage;