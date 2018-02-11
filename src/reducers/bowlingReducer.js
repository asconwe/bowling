import initialState from './initialState';
import { ADVANCE_FRAME, APPLY_ROLL_SCORE, KNOCK_DOWN_SOME_PINS } from '../actions/actionTypes';

export default function bowling(state = initialState, action) {
    switch (action.type) {
        case ADVANCE_FRAME:
            const currentFrameIndex = state.currentFrameIndex + 1;
            return Object.assign({}, state, { currentFrameIndex });

        case APPLY_ROLL_SCORE:
            const frameIndex = action.frameIndex;
            const targetFrame = state.frames[frameIndex];
            const rollIndex = targetFrame.filter(score => score !== 0 && score).length;
            const updatedFrame = [...targetFrame.slice(0, rollIndex), action.score, ...targetFrame.slice(rollIndex + 1)];
            const frames = [...state.frames.slice(0, frameIndex), updatedFrame, ...state.frames.slice(frameIndex + 1)];
            return Object.assign({}, state, { frames });

        case KNOCK_DOWN_SOME_PINS:
            const remainingPins = 10 - (state.frames[currentFrameIndex][0] || 0);
            const numberOfPinsKockedDown = Math.floor(action.randomFloat * (remainingPins));
            return Object.assign({}, state, { mostRecentRollScore: numberOfPinsKockedDown })
        
        default:
            return state;
    }
}

