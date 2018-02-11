import React, { Component } from 'react';
import { connect } from 'react-redux';
import Frame from './Frame';
import Scoreboard from './Scoreboard';
import getFrameTotal from './getFrameTotal';

class ScoreboardContainer extends Component {
    constructor(props) {
        super(props);

        this.renderFrames = this.renderFrames.bind(this);
    }

    renderFrames() {
        return this.props.frames && this.props.frames.map((scores, index) => (
            <Frame
                key={index}
                index={index}
                score1={scores[0] !== undefined && scores[0]}
                score2={scores[1] !== undefined && scores[1]}
                total={getFrameTotal(scores)}
            />
        ))
    }

    render() {
        return (
            <Scoreboard>
                {this.renderFrames()}
            </Scoreboard>
        )
    }
}

const mapStateToProps = ({ frames, currentFrameIndex }) => ({ frames, currentFrameIndex });

export default connect(mapStateToProps)(ScoreboardContainer)


