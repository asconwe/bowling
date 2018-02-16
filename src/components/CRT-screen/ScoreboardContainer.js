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
        return this.props.frames && this.props.frames.map((scores, index) => {
            const score1 = scores[0] === 10 ? 'X' : scores[0];
            const score2 = scores[0] + scores[1] === 10 ? '/' : scores[1];
            return (
                <Frame
                    key={index}
                    index={index}
                    score1={score1}
                    score2={score2}
                    total={this.runningTotal(index)}
                />
            )
            
        })
    }

    runningTotal(index) {
        return index < this.props.currentFrameIndex && getRunningTotal(this.props.frames, index);
    }

    render() {
        return (
            <Scoreboard name={this.props.name} frames={this.props.frames} spareAndStrikeExtras={this.props.spareAndStrikeExtras} total={getAbsoluteTotal(
                this.props.frames,
                this.props.spareAndStrikeExtras,
                this.props.currentFrameIndex
            )}>
                {this.renderFrames()}
            </Scoreboard>
        )
    }
}

const mapStateToProps = ({bowling: { frames, spareAndStrikeExtras }}) => (
    {
        frames,
        currentFrameIndex: getCurrentFrame(frames),
        spareAndStrikeExtras
    });

export default connect(mapStateToProps)(ScoreboardContainer)


