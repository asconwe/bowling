import * as actions from './bowlingActions'
import { APPLY_ROLL_SCORE, KNOCK_DOWN_SOME_PINS } from './actionTypes';

describe('actions', () => {
    it('should create an action apply a score to a roll', () => {
        const score = 5;
        const frameIndex = 4;
        const expectedAction = {
            type: APPLY_ROLL_SCORE,
            score,
            frameIndex
        }
        expect(actions.applyRollScore(5, 4)).toEqual(expectedAction)
    });

    it('should create an action knock down some pins', () => {
        const randomFloat = 0.4;
        const expectedAction = {
            type: KNOCK_DOWN_SOME_PINS,
            randomFloat,
        }
        expect(actions.knockDownSomePins(0.4)).toEqual(expectedAction)
    });
})