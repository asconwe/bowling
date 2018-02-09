import {APPLY_ROLL_SCORE, ADVANCE_FRAME } from './actionTypes';

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

