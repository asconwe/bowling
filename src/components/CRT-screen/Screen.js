import React, { Component } from 'react';

import { BlurFilter, DisplacementFilter } from './Filter.js'
import { CRTLines } from './Pattern';
import './Screen.css';

class Screen extends Component {
    render() {
        return (
            <div className="screen">
                <svg
                    className="tv-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1500 1200"
                >
                    <BlurFilter id="blur" />
                    <DisplacementFilter id="displace" />
                    <CRTLines id="grid" />
                    <g filter="url(#displace)" >
                    <rect width="100%" height="100%"  fill="url(#grid)"/>
                        <g transform="translate(70, 140)">
                            {this.props.children}
                        </g>
                    </g>
                </svg>
            </div>
        );
    }
}

export default Screen;