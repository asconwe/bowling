import ScoreboardContainer from '../../../scoreboard/ScoreboardContainer';
import initialState from '../../../../reducers/initialState';

export default {
    component: ScoreboardContainer,
    reduxState: initialState,
    props: {
        currentFrameIndex: 3,
    }
}