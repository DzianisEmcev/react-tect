import * as React from "react";

export class Day extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <div>
            <label>Day(s)</label>
            <input type="text" className="form-control" value={this.props.result}/>
        </div>
    }
}