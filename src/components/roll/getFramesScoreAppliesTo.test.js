import getFramesScoreAppliesTo from './getFramesScoreAppliesTo';
import initialState from '../../reducers/initialState';

describe('function getFramesScoreAppliesTo', () => {
    it('should return 0 index from initialState', () => {
        expect(getFramesScoreAppliesTo(initialState.frames)).toEqual(0)
    })
})