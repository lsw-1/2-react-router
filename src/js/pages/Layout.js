import React from "react";
import Header from "../components/Header";
import Form from "../components/questions/Form"


export default class Layout extends React.Component {

    render() {
        const konsult = "Ludwig";

        return (
            <div>
                <Header konsult={konsult}></Header>
                <div class="container">
                    {this.props.children}
                    <Form></Form>
                </div>
            </div>

        );
    }
}
