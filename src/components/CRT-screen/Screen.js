import React, { Component } from 'react';

import { BlurFilter, DisplacementFilter } from './Filter.js'
import { CRTLines } from './Pattern';
import './Screen.css';

class Screen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keyFrame: 1,
            interval: "",
        }
        
        this.nextKeyFrame = this.nextKeyFrame.bind(this);
    }

    componentDidMount() {
        this.setState({interval: setInterval(this.nextKeyFrame, 250)});
    }
    
    componentWillUnmount() {
        clearInterval(this.state.interval)
    }

    nextKeyFrame() {
        if (this.state.keyFrame < 6) {
            this.setState({
                keyFrame: this.state.keyFrame + 1
            })

        } else {
            this.setState({
                keyFrame: 1
            })
        }
    }
    
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
                    <g filter="url(#displace)">
                        <rect transform={`translate(0, ${this.state.keyFrame})`}width="100%" height="100%"  fill="url(#grid)"/>
                        <g transform="translate(40, 140)">
                            {this.props.children}
                        </g>
                    </g>
                </svg>
            </div>
        )
    }
}

export default Screen;

