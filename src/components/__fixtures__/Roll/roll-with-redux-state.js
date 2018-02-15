import React from 'react';

import RollContainer from '../../roll/RollContainer';
import initialState from '../../../reducers/initialState';

const RollButton = (props) => <button onClick={props.action}>Roll!</button>

export default {
    component: RollContainer(RollButton),
    reduxState: initialState,
}