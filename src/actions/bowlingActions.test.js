import * as actions from `./bowlingActions`
import { APPLY_ROLL_SCORE, KNOCK_DOWN_SOME_PINS, APPLY_SPARE_AND_STRIKE_EXTRAS } from `./actionTypes`;

describe(`actions`, () => {
    it(`should create an action to apply a score to a roll`, () => {
        const frameIndex = 4;
        const expectedAction = {
            type: APPLY_ROLL_SCORE,
            frameIndex
        }
        expect(actions.applyRollScore(4)).toEqual(expectedAction)
    });

    it(`should create an action to apply a score to a previous frame`, () => {
        const frameIndex = 4;
        const expectedAction = {
            type: APPLY_SPARE_AND_STRIKE_EXTRAS,
            frameIndex
        }
        expect(actions.applyRollScore(4)).toEqual(expectedAction)
    });

    it(`should create an action knock down some pins`, () => {
        const randomFloat = 0.4;
        const expectedAction = {
            type: KNOCK_DOWN_SOME_PINS,
            randomFloat,
        }
        expect(actions.knockDownSomePins(0.4)).toEqual(expectedAction)
    });
})