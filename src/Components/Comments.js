import * as React from "react";

export class Comments extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: "",
        };
    }

    handleSetComment(event) {
        this.setState({comment: event.target.value});
        this.props.commentMethod(event.target.value);
    }

    render() {
        return <div>
            <h5>Comments</h5>
            <textarea className="form-control" rows="3"
                      onChange={this.handleSetComment.bind(this)}
                      value={this.state.value}>
            </textarea>
        </div>;
    };
}