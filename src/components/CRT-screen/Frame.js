import React from 'react';

const Frame = props => (
    <g transform={`translate(${props.index * 100}, 0)`} stroke="white" fill="none">
        <rect x="0" y="0" width="100" height="100" />
        <rect x="0" y="0" width="100" height="100" strokeWidth="3" filter="url(#blur)" />

        <rect x="20" y="0" width="40" height="40" />
        <rect x="20" y="0" width="40" height="40" strokeWidth="3" filter="url(#blur)" />

        <rect x="60" y="0" width="40" height="40" stroke="white" />
        <rect x="60" y="0" width="40" height="40" stroke="white" strokeWidth="3" filter="url(#blur)" />

        <text id="score1" x="25" y="30" fill="white" fontSize="30">
            {props.score1}
        </text>
        <text id="score1" x="25" y="30" fill="white" stroke="white" strokeWidth="3" fontSize="30" filter="url(#blur)">
            {props.score1}
        </text>


        <text id="score2" x="65" y="30" fill="white" fontSize="30">
            {props.score2}
        </text>
        <text id="score2" x="65" y="30" fill="white" stroke="white" strokeWidth="3" fontSize="30" filter="url(#blur)">
            {props.score2}
        </text>
        

        <text id="combined-score" x="55" y="87" fill="white" fontSize="40">
            {props.total}
        </text>
        <text id="combined-score" x="55" y="87" fill="white" stroke="white" strokeWidth="3" fontSize="40" filter="url(#blur)">
            {props.total}
        </text>
        
    </g>
);

export const TotalFrame = props => (
    <g transform="translate(1200)" stroke="white" fill="none">
        <rect x="0" y="0" width="100" height="100" />
        <rect x="0" y="0" width="100" height="100" strokeWidth="3" filter="url(#blur)" />

        <rect x="0" y="0" width="40" height="40" />
        <rect x="0" y="0" width="40" height="40" strokeWidth="3" filter="url(#blur)" />

        <rect x="40" y="0" width="40" height="40" stroke="white" />
        <rect x="40" y="0" width="40" height="40" stroke="white" strokeWidth="3" filter="url(#blur)" />

        <text id="score1" x="5" y="30" fill="white" fontSize="30">
            {props.score1}
        </text>
        <text id="score1" x="5" y="30" fill="white" stroke="white" strokeWidth="3" fontSize="30" filter="url(#blur)">
            {props.score1}
        </text>


        <text id="score2" x="45" y="30" fill="white" fontSize="30">
            {props.score2}
        </text>
        <text id="score2" x="45" y="30" fill="white" stroke="white" strokeWidth="3" fontSize="30" filter="url(#blur)">
            {props.score2}
        </text>
        

        <text id="combined-score" x="55" y="87" fill="white" fontSize="50">
            {props.total}
        </text>
        <text id="combined-score" x="55" y="87" fill="white" stroke="white" strokeWidth="3" fontSize="50" filter="url(#blur)">
            {props.total}
        </text>
   
    </g>
);

export default Frame