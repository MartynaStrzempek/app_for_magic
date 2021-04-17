import './turnPhase.scss';
import React from "react";

export const TurnPhase = (props) => {
    return (
        <div className={`phase-wrapper ${props.class}`}>
            <div className="phase-icon">
                {props.children}
            </div>
            <p className="phase-name">
                {props.phaseName}
            </p>
        </div>
    );
};
