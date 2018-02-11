import getCurrentFrame from './getCurrentFrame';
import initialState from '../../reducers/initialState';

describe('function getCurrentFrame', () => {
    it('should get the 0 index from initialState', () => {
        expect(getCurrentFrame(initialState.frames)).toEqual(0)
    })
    
    it('should get the 0 index after one roll', () => {
        expect(getCurrentFrame([[0, undefined, undefined], [undefined, undefined, undefined]])).toEqual(0)
    })
    
    it('should get the 1 index after two rolls', () => {
        expect(getCurrentFrame([[0, 0, undefined], [undefined, undefined, undefined]])).toEqual(1)
    })
    
    it('should get the 1 index after one roll that is a strike', () => {
        expect(getCurrentFrame([[10, undefined, undefined], [undefined, undefined, undefined]])).toEqual(1)
    })
})