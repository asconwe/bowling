import React from 'react';
import { connect } from 'react-redux';
import { knockDownSomePins, applyRollScore, applySpareAndStrikeExtras } from "../../actions/bowlingActions";

import getCurrentFrame from './getCurrentFrame';
import getFramesScoreAppliesTo from './getFramesScoreAppliesTo';

function Rollable(WrappedComponent) {

    class RollContainer extends React.Component {
        constructor(props) {
            super(props);
    
            this.rollBowlingBall = this.rollBowlingBall.bind(this);
        }
    
        rollBowlingBall() {
            const currentFrameIndex = this.props.currentFrameIndex;
            const scoreFactor = this.props.scoreFactor
                ? this.props.scoreFactor()
                : Math.random();
            const framesScoreAppliesTo = this.props.framesScoreAppliesTo;
            if (currentFrameIndex < 10) {
                return this.props.onRoll(
                    scoreFactor,
                    currentFrameIndex,
                    this.props.frames[currentFrameIndex],
                    framesScoreAppliesTo
                );
            }
            
            const lastFrame = this.props.frames[9];
            const lastExtra = this.props.spareAndStrikeExtras[9];
            if (lastFrame[0] === 10 && lastExtra[1] === undefined) {
                if (lastExtra[0] === 10) {
                    return this.props.onRollAfterExtraStrike(scoreFactor)
                }
                console.log(currentFrameIndex, 'here')
                return this.props.onExtraRoll(
                    scoreFactor,
                    lastExtra,
                    framesScoreAppliesTo,
                )
            }
            if (lastFrame[0] + lastFrame[1] === 10 && lastExtra[0] === undefined) {
                return this.props.onExtraRoll(
                    scoreFactor,
                    lastExtra,
                    framesScoreAppliesTo,
                )
            }
        }
    
        render() {
            return (
                <WrappedComponent action={this.rollBowlingBall} {...this.props}/>
            )
        }
    }
    
    const mapStateToProps = ({bowling: { frames, mostRecentRollScore, spareAndStrikeExtras }}) => {
        const currentFrameIndex = getCurrentFrame(frames);
        return {
            frames,
            spareAndStrikeExtras,
            currentFrameIndex,
            framesScoreAppliesTo: getFramesScoreAppliesTo(currentFrameIndex, frames),
            rollScore: mostRecentRollScore,
        }
    }
    
    const mapDispatchToProps = (dispatch) => {
        return {
            onRoll: (scoreFactor, currentFrameIndex, frame, framesScoreAppliesTo, spareAndStrikeExtras) => {
                dispatch(knockDownSomePins(scoreFactor, frame));
                dispatch(applyRollScore(currentFrameIndex));
                framesScoreAppliesTo.forEach(frameIndex => {
                    dispatch(applySpareAndStrikeExtras(frameIndex));
                });
            },
            onExtraRoll: (scoreFactor, frame, framesScoreAppliesTo) => {
                dispatch(knockDownSomePins(scoreFactor, frame));
                dispatch(applySpareAndStrikeExtras(9));
                framesScoreAppliesTo.forEach(frameIndex => {
                    dispatch(applySpareAndStrikeExtras(frameIndex));
                });
            },
            onRollAfterExtraStrike: (scoreFactor) => {
                console.log('onRollAfterExtraStrike')
                dispatch(knockDownSomePins(scoreFactor, [0, undefined]));
                dispatch(applySpareAndStrikeExtras(9));
            }
        }
    }
    return connect(mapStateToProps, mapDispatchToProps)(RollContainer)
}

export default Rollable;