import React from 'react';
import { CustomWindow } from './@types/window';

declare let window: CustomWindow; // window 객체 타입 오류 수정

const FullscreenButton = () => {
    async function handleClick() {
        window.bridge.invoke('toggleFullscreen');
    }

    return (
        <>
            <button onClick={handleClick}>toggleFullscreen</button>
        </>
    );
};

export default FullscreenButton;