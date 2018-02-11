import {APPLY_ROLL_SCORE, KNOCK_DOWN_SOME_PINS } from './actionTypes';

export function applyRollScore(frameIndex) {
	return {
		type: APPLY_ROLL_SCORE, 
        frameIndex,
	}
}

export function knockDownSomePins(randomFloat, currentFrameIndex) {
    return {
        type: KNOCK_DOWN_SOME_PINS,
        randomFloat,
        currentFrameIndex,
    }
}
