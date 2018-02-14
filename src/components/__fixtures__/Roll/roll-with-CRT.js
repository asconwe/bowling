import React from 'react';
import RollContainer from '../../roll/RollContainer';
import Screen from '../../CRT-screen/Screen';
import ScoreboardContainer from '../../CRT-screen/ScoreboardContainer';
import initialState from '../../../reducers/initialState';


const ScoreboardAndRollButton = () => (
    <div>
        Random:<RollContainer />
        All standing pins:<RollContainer scoreFactor={() => 0.99} />
        <Screen>
            <ScoreboardContainer />
        </Screen>
    </div>
)

export default {
    component: ScoreboardAndRollButton,
    reduxState: initialState,
}