import React from 'react';

export default (props) => {
    return (
        <div className="frame">
            {props.index + 1}
            <div className="first roll">
                <span>{props.score1}</span>
            </div>
            <div className="second roll">
                <span>{props.score2}</span>
            </div>
            <div className="frame-total">
                {props.total}
            </div>
        </div>
    )
}