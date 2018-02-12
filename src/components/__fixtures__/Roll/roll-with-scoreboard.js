import React from 'react';
import RollContainer from '../../roll/RollContainer';
import ScoreboardContainer from '../../scoreboard/ScoreboardContainer';
import initialState from '../../../reducers/initialState';


const ScoreboardAndRollButton = () => (
    <div>
        Random:<RollContainer />
        All standing pins:<RollContainer scoreFactor={() => 0.99} />
        <ScoreboardContainer />
    </div>
)

export default {
    component: ScoreboardAndRollButton,
    reduxState: initialState,
}