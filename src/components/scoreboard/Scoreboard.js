import React from 'react';
import './Scoreboard.css';

const Scoreboard = (props) => {
    return (
        <div className="scoreboard">
            {props.children}
        </div>
    )
}


export default Scoreboard