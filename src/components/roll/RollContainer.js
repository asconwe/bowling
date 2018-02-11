import React from 'react';
import { connect } from 'react-redux';
import { knockDownSomePins, applyRollScore, applySpareAndStrikeExtras } from "../../actions/bowlingActions";

import RollButton from './RollButton';
import getCurrentFrame from './getCurrentFrame';
import getFramesScoreAppliesTo from './getFramesScoreAppliesTo';

class RollContainer extends React.Component {
    constructor(props) {
        super(props);

        this.rollBowlingBall = this.rollBowlingBall.bind(this);
    }

    rollBowlingBall() {
        this.props.onRoll(
            Math.random(), 
            this.props.currentFrameIndex,
            this.props.framesScoreAppliesTo
        );
    }

    render() {
        return (
            <RollButton onClick={this.rollBowlingBall} />
        )
    }
}

const mapStateToProps = ({ frames, mostRecentRollScore }) => {
    const currentFrameIndex = getCurrentFrame(frames);
    return {
        currentFrameIndex,
        framesScoreAppliesTo: getFramesScoreAppliesTo(currentFrameIndex, frames),
        rollScore: mostRecentRollScore,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRoll: (randomFloat, currentFrameIndex, framesScoreAppliesTo) => {
            dispatch(knockDownSomePins(randomFloat, currentFrameIndex));
            dispatch(applyRollScore(currentFrameIndex))
            framesScoreAppliesTo.forEach(frameIndex => {
                dispatch(applySpareAndStrikeExtras(frameIndex))
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RollContainer);