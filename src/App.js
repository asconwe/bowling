import React from 'react';
import RollContainer from './components/roll/RollContainer';
import Screen from './components/CRT-screen/Screen';
import ScoreboardContainer from './components/CRT-screen/ScoreboardContainer';

const App = (props) => (
    <div>
        Random:<RollContainer />
        All standing pins:<RollContainer scoreFactor={() => 0.99} />
        <Screen>
            <ScoreboardContainer name={props.name} />
        </Screen>
    </div>
)

export default App;
