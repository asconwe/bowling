import initialState from './initialState';
import { ADVANCE_FRAME, APPLY_ROLL_SCORE } from '../actions/actionTypes';

export default function stuff(state = initialState, action) {
    switch (action.type) {
        case ADVANCE_FRAME:
            const currentFrameIndex = state.currentFrameIndex + 1;
            return Object.assign({}, state, currentFrameIndex);
        case APPLY_ROLL_SCORE:
            const frameIndex = action.frameIndex;
            const rollIndex = action.rollIndex;
            const targetFrame = state.frames[frameIndex];
            const updatedFrame = [...targetFrame.slice(0, rollIndex), action.score, ...targetFrame.slice(rollIndex + 1)];
            const frames = [...state.frames.slice(0, frameIndex), updatedFrame, ...state.frames.slice(frameIndex + 1)];
            return Object.assign({}, state, frames);
        default:
            return state;
    }
}