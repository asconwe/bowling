import reducer from './bowlingReducer';
import { ADVANCE_FRAME, APPLY_ROLL_SCORE, KNOCK_DOWN_SOME_PINS } from '../actions/actionTypes';
import initialState from './initialState';

const nextState = reducer(undefined, { type: APPLY_ROLL_SCORE, score: 5, frameIndex: 0,});

describe('bowling reducer: APPLY_ROLL_SCORE', () => {
    it('should apply a score of 5 pins to the first roll of the first frame', () => {
        expect(
            reducer(undefined, {
                type: APPLY_ROLL_SCORE,
                score: 5,
                frameIndex: 0,
            }).frames[0])
            .toEqual([5, undefined, undefined]);
    })

    it('should apply a score of 3 to the second roll of the first frame', () => {
        expect(
            reducer(nextState, {
                    type: APPLY_ROLL_SCORE,
                    score: 3,
                    frameIndex: 0,
                }
            ).frames[0])
            .toEqual([5, 3, undefined])
    })
})