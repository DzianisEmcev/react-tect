import * as React from "react";

export class Calendar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: this.props.denisZapomniRazINavsegdaChtoEtoImyaCherezKotoroeNuzhnoStuchatsia
        };
    }

    calendarSetDate(event) {
        this.setState({
            value: event.target.value
        });
        this.props.changeDate(event.target.value);
    }

    render() {
        return <div>
            <label>{this.props.calendarName} Date(inclusive)</label>
            <input type="date" max="3000-01-01"
                   min="1000-01-01" className="form-control" onChange={this.calendarSetDate.bind(this)} value={this.state.value}/>
        </div>;
    };
}
