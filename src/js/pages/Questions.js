import React from "react";
import Form from "../components/questions/Form"


export default class Questions extends React.Component {
    render() {
        const {query} = this.props.location;
        console.log(this.props);
        const { params } = this.props;
        const { article } = params;
        const {date, filter} = query;

        const fStyle = { backgroundColor: "#D5ABB4", textAlign: "center"};

        return (
            <div style={fStyle}>
                <h1>Questions</h1>
                
                <Form></Form>
                
            </div>
        );
    }
}