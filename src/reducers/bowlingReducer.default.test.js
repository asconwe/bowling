import reducer from './bowlingReducer';
import { ADVANCE_FRAME, APPLY_ROLL_SCORE, KNOCK_DOWN_SOME_PINS } from '../actions/actionTypes';
import initialState from './initialState';

describe('bowling reducer default', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            initialState
        )
    }) 
})