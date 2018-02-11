import React from 'react';
import { connect } from 'react-redux';
import { knockDownSomePins, applyRollScore } from "../../actions/bowlingActions";

import RollButton from './RollButton';
import getCurrentFrame from './getCurrentFrame';

class RollContainer extends React.Component {
    constructor(props) {
        super(props);

        this.rollBowlingBall = this.rollBowlingBall.bind(this);
    }

    rollBowlingBall() {
        this.props.onKnockDownSomePins(Math.random(), this.props.currentFrame);
        this.props.onApplyRollScore(this.props.rollScore, this.props.currentFrame);
    }

    render() {
        return (
            <RollButton onClick={this.rollBowlingBall} />
        )
    }
}

const mapStateToProps = ({ frames, mostRecentRollScore }) => {
    return {
        currentFrame: getCurrentFrame(frames),
        rollScore: mostRecentRollScore,
    }
}

export default connect(mapStateToProps, { 
    onKnockDownSomePins: knockDownSomePins,
    onApplyRollScore: applyRollScore,
})(RollContainer);