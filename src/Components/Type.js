import * as React from "react";

export class Type extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            typeArr: this.props.typeArr
        };
    }

    chooseTypeMethod(event) {
        this.setState({typeArr: event.target.value});
        this.props.vacationMethod(event.target.value);
    }

    render() {
        return <div>
            <div>
                <h5>{this.props.typeName}</h5>
            </div>
            <select className="form-control" onChange={this.chooseTypeMethod.bind(this)}>
                {this.props.typeArr}
            </select>
        </div>
    };
}