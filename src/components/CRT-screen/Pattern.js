import React from 'react';

export const Lines = (props) => (
    <defs>
        <pattern id={props.id} width="10" height="8" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 0" fill="none" stroke="white" strokeWidth="0.3" />
        </pattern>
    </defs>
)


export class CRTLines extends React.Component {
    render() {
        return (
            <Lines id={this.props.id} />
        );
    }
}