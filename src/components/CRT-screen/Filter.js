import React from 'react';

import crtpng from '../../assets/dmap.png';

export const DisplacementFilter = (props) => (
    <filter id={props.id}>
        <circle id="circle1" cx="100" cy="100" r="70" />
        <feImage
            xlinkHref={crtpng}
            result="fisheye"
            height="100%"
            width="100%"
            x="0"
            y="0"
        />
        <feDisplacementMap
            in2="fisheye"
            in="SourceGraphic"
            scale="100"
            xChannelSelector="R"
            yChannelSelector="A"
        />
    </filter>
);

export const BlurFilter = (props) => (
    <filter id={props.id}>
        <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
    </filter>
)
