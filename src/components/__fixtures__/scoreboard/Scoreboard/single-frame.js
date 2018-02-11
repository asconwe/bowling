import Scoreboard from '../../../scoreboard/Scoreboard';

export default {
    component: Scoreboard,
    props: {
        frames: [
            [undefined, undefined, undefined]
        ],
        currentFrameIndex: 0
    }
}