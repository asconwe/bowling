import React from 'react';

import Scoreboard from '../../../scoreboard/Scoreboard';
import Frame from '../../../scoreboard/Frame'

export default {
    component: Scoreboard,
    children: (
        <Frame index={3} score1="5" score2="4" />
    )
}