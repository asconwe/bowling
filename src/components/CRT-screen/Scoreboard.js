import React from "react";
import { TotalFrame } from './Frame';

export default props => {
    return (
        <g transform="translate(0, 10)">
            <rect x="0" y="0" width="200" height="100" stroke="white" fill="none"/>
            <rect x="0" y="0" width="200" height="100" stroke="white" strokeWidth="3" fill="none" filter="url(#blur)"/>
            <text id="name" x="20" y="35" fontSize="30" fill="white">{props.name}</text>
            <use href="#name" filter="url(#blur)" />

            <g transform="translate(200)">
                {props.children}
            </g>

            <TotalFrame 
                score1={props.spareAndStrikeExtras[9][0] === 10 ? 'X' : props.spareAndStrikeExtras[9][0]}
                score2={props.spareAndStrikeExtras[9][1] === 10 ? 'X' : props.spareAndStrikeExtras[9][1]} 
                total={props.total} />
        </g>
    );
};