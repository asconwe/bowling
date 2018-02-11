import React from 'react';
import { connect } from 'react-redux';
import RollButton from './RollButton';
import { knockDownSomePins } from './bowlingFunctions';
import getCurrentFrame from './getCurrentFrame';

class RollContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    rollBowlingBall() {
        this.props.knockDownSomePins(Math.random());
    }

    render() {
        return (
            <RollButton rollBowlingBall={this.rollBowlingBall} />
        )
    }
}

const mapStateToProps = ({ frames }) => {
    return {
        currentFrame: getCurrentFrame(frames)
    }
}

const mapDispatchToProps = ({ knockDownSomePins }) => ({ knockDownSomePins });

export default connect(mapStateToProps, mapDispatchToProps);