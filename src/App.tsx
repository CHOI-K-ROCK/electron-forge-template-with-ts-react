import React from 'react';
import FullscreenButton from './FullscreenButton';
import { CustomWindow } from './@types/window';
declare let window: CustomWindow;

const App = () => {
    
    return (
        <div className="App">
            <FullscreenButton />
            <header>
                <p>
                    템플릿
                </p>
            </header>
        </div>
    );
}

export default App;
