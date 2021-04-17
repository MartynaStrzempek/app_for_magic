import './turnPhases.scss';
import React from 'react';
import { TurnPhase } from '../turnPhase/turnPhase';
import ReplayIcon from '@material-ui/icons/Replay';
import SettingsIcon from '@material-ui/icons/Settings';
import ReorderIcon from '@material-ui/icons/Reorder';
import Filter1Icon from '@material-ui/icons/Filter1';
import ColorizeIcon from '@material-ui/icons/Colorize';
import CropPortraitIcon from '@material-ui/icons/CropPortrait';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import Filter2Icon from '@material-ui/icons/Filter2';
import AlarmIcon from '@material-ui/icons/Alarm';

export const TurnPhases = () => {
    return (
        <div className="turn-phases-wrapper">
            <TurnPhase class="margin-top" phaseName="Untap">
                <ReplayIcon />
            </TurnPhase>

            <TurnPhase class="margin-top" phaseName="Upkeep">
                <SettingsIcon />
            </TurnPhase>

            <TurnPhase class="margin-top" phaseName="Draw">
                <ReorderIcon />
            </TurnPhase>
            
            <TurnPhase class="margin-top" phaseName="Main">
                <Filter1Icon />
            </TurnPhase>

            <TurnPhase class="margin-top" phaseName="Attack">
                <ColorizeIcon />
            </TurnPhase>

            <TurnPhase class="margin-top" phaseName="Block">
                <CropPortraitIcon />
            </TurnPhase>

            <TurnPhase class="margin-top" phaseName="Damage">
                <LocalHospitalIcon />
            </TurnPhase>

            <TurnPhase class="margin-top" phaseName="Main">
                <Filter2Icon />
            </TurnPhase>

            <TurnPhase class="margin-top" phaseName="End">
                <AlarmIcon />
            </TurnPhase>
        </div>
    );
};
