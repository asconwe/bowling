import React from 'react';
import { connect } from 'react-redux';
import RollButton from './RollButton';
import { knockDownSomePins } from './bowlingFunctions';

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

const mapDispatchToProps = ({ knockDownSomePins }) => ({ knockDownSomePins });

export default connect(null, mapDispatchToProps);