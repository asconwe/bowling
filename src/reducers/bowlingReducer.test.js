import reducer from './bowlingReducer';
import { ADVANCE_FRAME, APPLY_ROLL_SCORE, KNOCK_DOWN_SOME_PINS } from '../actions/actionTypes';
import initialState from './initialState';

describe('bowling reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            initialState
        )
    }) 

    it('should apply a score of 5 pins to the first roll of the first frame', () => {
        expect(
            reducer(undefined, {
                type: APPLY_ROLL_SCORE,
                score: 5,
                frameIndex: 0,
            }).frames[0])
            .toEqual([5, undefined, undefined]);
    })
})