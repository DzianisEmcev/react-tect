import React from "react";

export class ButtonComponent extends React.Component {
    render() {
        return <button type="button" className={this.props.style}>{this.props.name}</button>;
    }
}