import React, { useState } from "react";
import { invoke } from "../utils/bridge";

const CloseAppButton = () => {
    const [isHover, setIsHover] = useState<boolean>(false);

    const closeApp = () => {
        invoke("CLOSE_APP");
    };

    return (
        <p
            onClick={closeApp}
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            style={{
                cursor: "pointer",
                fontSize: "12px",
                fontWeight: "600",
                opacity: isHover ? 0.7 : 1,
                color: "#FFF",
                transition: "0.1s"
            }}>
            Close App
        </p>
    )
};

export default CloseAppButton;