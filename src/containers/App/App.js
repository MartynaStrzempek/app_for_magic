import './App.scss';
import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { TurnPhases } from '../../components/turnPhases/turnPhases';

export const App = () => {
    return (
        <div className="app-wrapper">
            <div id="turn-phases">
                <TurnPhases />
            </div>
            <div id="battlefield-wrapper">
                <div className="battlefield">battlefield</div>
                <div className="battlefield">battlefield</div>
            </div>
            <div id="stack">stack</div>
        </div>
    );
}
