import React from 'react';

export default (props) => {
    return (
        <div className="frame">
        {props.index + 1}
        <div className="first roll">
            <span>{props.scores[0] !== undefined && props.scores[0]}</span>
        </div>
        <div className="second roll">
            {props.scores[1] !== undefined && props.scores[1]}
        </div>
        <div className="total">
            {props.scores[0] && props.scores.reduce((sum, score) => sum + (score || 0), 0)}
        </div>
    </div>
    )
}