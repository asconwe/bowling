/*
**  apply score to the two previous frames if 
**      both previous frames were strikes and this is the first roll of the frame
**
**  apply score to last frame if 
**      the last frame was strike
**      or the last frame was a spare and this is the first roll of the frame
**  
**  apply score to no other frames
**
*/

export default (currentFrameIndex, frames) => {
    const frameMinusOne = frames[currentFrameIndex - 1];
    const frameMinusTwo = frames[currentFrameIndex - 2];

    if (currentFrameIndex < 10) {

        if (currentFrameIndex > 1) {
            // Both previous frames were strikes
            if (frameMinusOne[0] === 10 && frameMinusTwo[0] === 10) {
                // And this is the first roll of the frame
                if (frames[currentFrameIndex][0] === undefined) {
                    return [currentFrameIndex - 1, currentFrameIndex - 2];
                }
            }
        }
        if (currentFrameIndex > 0) {
            // The last frame was a strike
            if (frameMinusOne[0] === 10) {
                return [currentFrameIndex - 1];
            }
            // The last frame was a spare
            if (frameMinusOne[0] + frameMinusOne[1] === 10) {
                // And this is the first roll of the frame
                if (frames[currentFrameIndex][0] === undefined) {
                    return [currentFrameIndex - 1]
                }
            }
        }
        return [];
    }
    if (frameMinusTwo[0] === 10) {
        return [currentFrameIndex - 2]
    }
    if (frameMinusOne[0] === 10) {
        return [currentFrameIndex - 1]
    }
    return [];
}