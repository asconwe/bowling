import React from 'react';
import RollContainer from '../../roll/RollContainer';
import ScoreboardContainer from '../../scoreboard/ScoreboardContainer';
import initialState from '../../../reducers/initialState';


const ScoreboardAndRollButton = () => (
    <div>
        <RollContainer />
        <ScoreboardContainer />
    </div>
)

export default {
    component: ScoreboardAndRollButton,
    reduxState: initialState,
}