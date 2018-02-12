export function getFrameTotal(scores) {
    return scores[0] !== undefined && scores.reduce((sum, score) => sum + (score || 0), 0);
}

export function getRunningTotal(frames, index) {
    return frames.slice(0, index + 1)
        .reduce((total, scores) => (getFrameTotal(scores) + total), 0)
}

export function getAbsoluteTotal(frames, spareAndStrikeExtras, currentFrameIndex) {
    return frames.slice(0, currentFrameIndex + 1)
        .reduce((total, scores, index) => {
            const frameTotal = getFrameTotal(scores.concat(spareAndStrikeExtras[index])) + total
            console.log(frameTotal);
            return frameTotal;
        }, 0)
}