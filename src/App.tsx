import React from 'react';
import FullscreenButton from './FullscreenButton';

const App = () => {

    return (
        <div className="App">
            <FullscreenButton />
            <p style={{
                fontSize: 20,
                fontWeight: 700
            }}>
                Electron Forge + React + TS Template
            </p>
        </div>
    );
}

export default App;
