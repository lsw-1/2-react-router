import React from "react";
import Form from "../components/Form";


export default class Questions extends React.Component {
    render() {

        const questionsStyle = {
          height: "100%"
        };

        return (
            <div style={questionsStyle}>
                <h1>Questions</h1>
                <Form></Form>
            </div>
        );
    }
}