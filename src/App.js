import React from 'react';

import Screen from './components/CRT-screen/Screen';
import RollContainer from './components/roll/RollContainer';
import ScoreboardContainer from './components/CRT-screen/ScoreboardContainer';

const RollButton = (props) => <button onClick={props.action}>Roll!</button>

const Roll = RollContainer(RollButton);

const App = (props) => (
    <div>
        testRandom:<Roll />
        All standing pins:<Roll scoreFactor={() => 0.99} />
        <Screen>
            <ScoreboardContainer />
        </Screen>
    </div>
)

export default App;
