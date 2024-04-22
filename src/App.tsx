import React from 'react';
import { Reset } from 'styled-reset';

import Router from './routes/Router';

const App = () => {

    return (
        <div className="App">
            <Reset />
            <Router /> 
        </div>
    );
}

export default App;