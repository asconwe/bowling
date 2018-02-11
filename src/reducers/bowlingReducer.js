import initialState from './initialState';
import {
    APPLY_ROLL_SCORE,
    KNOCK_DOWN_SOME_PINS,
    APPLY_SPARE_AND_STRIKE_EXTRAS
} from '../actions/actionTypes';

export default function bowling(state = initialState, action) {
    switch (action.type) {

        case APPLY_ROLL_SCORE:
            const frameIndex = action.frameIndex;
            const targetFrame = state.frames[frameIndex];

            const updatedFrame = (targetFrame[0] === undefined)
                ? [state.mostRecentRollScore, undefined]
                : [targetFrame[0], state.mostRecentRollScore] ;

            const frames = [
                ...state.frames.slice(0, frameIndex), 
                updatedFrame, 
                ...state.frames.slice(frameIndex + 1)
            ];
        
            return Object.assign({}, state, { frames });

        case APPLY_SPARE_AND_STRIKE_EXTRAS:
            const extrasFrameIndex = action.frameIndex;
            const extrasTargetFrame = state.spareAndStrikeExtras[extrasFrameIndex];

            const extrasUpdatedFrame = (extrasTargetFrame[0] === undefined)
                ? [state.mostRecentRollScore, undefined]
                : [extrasTargetFrame[0], state.mostRecentRollScore]

            const spareAndStrikeExtras = [
                ...state.spareAndStrikeExtras.slice(0, extrasFrameIndex), 
                extrasUpdatedFrame, 
                ...state.spareAndStrikeExtras.slice(extrasFrameIndex + 1)
            ];

            return Object.assign({}, state, { spareAndStrikeExtras });


        case KNOCK_DOWN_SOME_PINS:
            const remainingPins = 10 - (state.frames[action.currentFrameIndex][0] || 0);
            const numberOfPinsKockedDown = Math.floor(action.randomFloat * (remainingPins + 1));
            return Object.assign({}, state, { mostRecentRollScore: numberOfPinsKockedDown })

        default:
            return state;
    }
}

