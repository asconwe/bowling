import React, { Component } from 'react';
import './Scoreboard.css';
import Frame from './Frame';

class ScoreBoard extends Component {
    constructor(props) {
        super(props);

        this.renderFrames = this.renderFrames.bind(this);
    }

    renderFrames() {
        return this.props.frames && this.props.frames.map((scores, index) => (
            <Frame key={index} index={index} scores={scores} />
        ))
    }


    render() {
        return (
            <div>
                <p className="text">
                    Frames, test:{this.props.currentFrameIndex || 'help'}
                </p>
                <div className="scoreboard">
                    {this.renderFrames()}
                </div>
            </div>
        )
    }
}

export default ScoreBoard