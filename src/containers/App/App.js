import './App.scss';
import React from "react";
import { Grid, Paper } from '@material-ui/core';

function App() {
    return (
        <div className="app-wrapper">
            <div id="turn-phases">vertical buttons</div>
            <div id="battlefield-wrapper">
                <div className="battlefield">battlefield</div>
                <div className="battlefield">battlefield</div>
            </div>
            <div id="stack">stack</div>
        </div>
    );
}

export default App;
