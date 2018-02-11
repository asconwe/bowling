import {APPLY_ROLL_SCORE, ADVANCE_FRAME, KNOCK_DOWN_SOME_PINS } from './actionTypes';

export function applyRollScore(score, frameIndex) {
	return {
		type: APPLY_ROLL_SCORE, 
        score,
        frameIndex,
	}
}

export function advanceFrame() {
    return {
        type: ADVANCE_FRAME,
    }
}

export function knockDownSomePins(randomFloat, currentFrameScore) {
    return {
        type: KNOCK_DOWN_SOME_PINS,
        randomFloat
    }
}
