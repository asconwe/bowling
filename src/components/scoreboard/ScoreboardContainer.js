import React, { Component } from 'react';
import { connect } from 'react-redux';
import Scoreboard from './Scoreboard';

class BowlContainer extends Component {
    render() {
        return (
            <Scoreboard 
                frames={this.props.frames}
                currentFrameIndex={this.props.currentFrameIndex}
            />
        )
    }
}

const mapStateToProps = ({ frames, currentFrameIndex }) => ({ frames, currentFrameIndex });
const mapDispatchToProps = ({ APPLY_ROLL_SCORE }) => ({ APPLY_ROLL_SCORE })

export default connect(mapStateToProps, mapDispatchToProps)(BowlContainer)