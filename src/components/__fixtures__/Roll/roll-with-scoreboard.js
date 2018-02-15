import React from 'react';
import RollContainer from '../../roll/RollContainer';
import ScoreboardContainer from '../../scoreboard/ScoreboardContainer';
import initialState from '../../../reducers/initialState';

const RollButton = (props) => <button onClick={props.action}>Roll!</button>

const Roll = RollContainer(RollButton);

const ScoreboardAndRollButton = () => (
    <div>
        Random:<Roll />
        All standing pins:<Roll scoreFactor={() => 0.99} />
        <ScoreboardContainer />
    </div>
)

export default {
    component: ScoreboardAndRollButton,
    reduxState: initialState,
}