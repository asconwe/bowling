import React, { Component } from 'react';
import { connect } from 'react-redux';
import Scoreboard from './Scoreboard';
import Frame from './Frame';
import getCurrentFrame from '../roll/getCurrentFrame';
import { getRunningTotal, getAbsoluteTotal } from '../scoreboard/totals';

class ScoreboardContainer extends Component {
    constructor(props) {
        super(props);

        this.renderFrames = this.renderFrames.bind(this);
        this.runningTotal = this.runningTotal.bind(this);
    }

    renderFrames() {
        return this.props.frames && this.props.frames.map((scores, index) => (
            <Frame
                key={index}
                index={index}
                score1={scores[0] !== undefined && scores[0]}
                score2={scores[1] !== undefined && scores[1]}
                total={this.runningTotal(index)}
            />
        ))
    }

    runningTotal(index) {
        return index < this.props.currentFrameIndex && getRunningTotal(this.props.frames, index);
    }

    render() {
        return (
            <Scoreboard frames={this.props.frames} spareAndStrikeExtras={this.props.spareAndStrikeExtras} total={getAbsoluteTotal(
                this.props.frames,
                this.props.spareAndStrikeExtras,
                this.props.currentFrameIndex
            )}>
                {this.renderFrames()}
            </Scoreboard>
        )
    }
}

const mapStateToProps = ({ frames, spareAndStrikeExtras }) => (
    {
        frames,
        currentFrameIndex: getCurrentFrame(frames),
        spareAndStrikeExtras
    });

export default connect(mapStateToProps)(ScoreboardContainer)


