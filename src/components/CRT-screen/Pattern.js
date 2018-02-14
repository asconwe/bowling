import React from 'react';

export const Lines = (props) => (
    <defs>
        <pattern id={props.id} width="10" height="8" patternUnits="userSpaceOnUse">
            <path d={`M 10 ${props.keyFrame} L 0 ${props.keyFrame} 0 ${props.keyFrame}`} fill="none" stroke="white" strokeWidth="0.2" />
        </pattern>
    </defs>
)


export class CRTLines extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keyFrame: 1
        }
    }

    componentDidMount() {
        this.nextKeyFrame();
    }

    nextKeyFrame() {
        setTimeout(() => {
            console.log('hello')
            if (this.state.keyFrame < 5) {
                this.setState({
                    keyFrame: this.state.keyFrame + 2
                })
                return this.nextKeyFrame();
            }
            this.setState({
                keyFrame: 1
            })
            return this.nextKeyFrame();
        }, 200)
    }

    render() {
        return (
            <Lines id={this.props.id} keyFrame={this.state.keyFrame} />
        );
    }
}