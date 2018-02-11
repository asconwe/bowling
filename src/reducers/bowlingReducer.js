import initialState from './initialState';
import { APPLY_ROLL_SCORE, KNOCK_DOWN_SOME_PINS } from '../actions/actionTypes';

export default function bowling(state = initialState, action) {
    switch (action.type) {

        case APPLY_ROLL_SCORE:
            const frameIndex = action.frameIndex;
            const targetFrame = state.frames[frameIndex];
            const rollIndex = targetFrame.filter(score => score !== undefined).length; // Count the rolls where the score is not undefined
            const updatedFrame = [...targetFrame.slice(0, rollIndex), state.mostRecentRollScore, ...targetFrame.slice(rollIndex + 1)];
            const frames = [...state.frames.slice(0, frameIndex), updatedFrame, ...state.frames.slice(frameIndex + 1)];
            return Object.assign({}, state, { frames });

        case KNOCK_DOWN_SOME_PINS:
            const remainingPins = 10 - (state.frames[action.currentFrameIndex][0] || 0);
            const numberOfPinsKockedDown = Math.floor(action.randomFloat * (remainingPins + 1));
            return Object.assign({}, state, { mostRecentRollScore: numberOfPinsKockedDown })
        
        default:
            return state;
    }
}

