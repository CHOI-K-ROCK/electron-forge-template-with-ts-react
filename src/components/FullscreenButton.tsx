import React from 'react';
import { invoke } from '../utils/bridge';


const FullscreenButton = () => {
    const handleClick = () => {
        invoke("TOGGLE_FULL_SCREEN");
    };

    return (
        <button onClick={handleClick}>toggleFullscreen</button>
    );
};

export default FullscreenButton;