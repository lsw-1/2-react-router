import React from "react";
import Title from "./form/Title";
import Question from "./form/Question";
import Text from "./form/Text";


export default class Form extends React.Component {

    constructor() {
        super();
        this.state = {
            editing: false,
            formComponents: ["Title", "Question"]
        }
    };


    render() {
        const fStyle = {backgroundColor: "#D5ABB4", textAlign: "center"};

        let fields = this.state.formComponents.map((component) => {
            if (component === "Text") {
                return <Text handleDelete={this._deleteField()} ></Text>
            } else if (component === "Title") {
                return <Title></Title>
            } else if (component === "Question") {
                return <Question></Question>
            }
        });


        return (
            <div style={fStyle}>
                <ul class="column">
                    <button class="btn" onClick={() => this._addField("Text")}>Add Text</button>
                    <button class="btn" onClick={() => this._addField("Question")}>Add Question</button>
                    <button class="btn" onClick={() => this._addField("Text")}>Add Section</button>
                </ul>
                {fields}
            </div>
        );
    }


    _addField(type) {
        this.setState({
                formComponents: this.state.formComponents.concat(type)
            }
        )
    }

    _deleteField(evt){
        let currentObject = evt.target.value;
        console.log(currentObject)
    }

}

