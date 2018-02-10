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
const mapDispatchToProps = ({ APPLY_ROLL_SCORE, ADVANCE_FRAME }) => ({ APPLY_ROLL_SCORE, ADVANCE_FRAME })

export default connect(mapStateToProps, mapDispatchToProps)(BowlContainer)