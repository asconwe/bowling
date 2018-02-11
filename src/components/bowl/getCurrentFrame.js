export default (frames) => {
    return frames.filter((frame) => {
        return (
            (frame[0] === 0 || frame[0])
            &&
            (frame[1] === 0 || frame[1])
            ||
            frame[0] === 10
        )
    }).length;
}