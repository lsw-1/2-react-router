import React from "react";
import Title from "./form/Title";
import Question from "./form/Question";
import Text from "./form/Text";


export default class Form extends React.Component {

    constructor() {
        super();
        this.state = {
            editing: false,
            formComponents: ["Question"]
        };
    }

    _addField(type) {
        this.setState({
            formComponents: this.state.formComponents.concat(type)
                    , id: this.state.id + 1
        });
            console.log(this.state.id)
    }

    _deleteField(formField) {
        const formComponents = [...this.state.formComponents];
        formComponents.splice(formField, 1);
        this.setState({formComponents});
    }


    render() {
        const formComponentStyle = {
            backgroundColor: "" 
        };

        let formattedFormFields = this.state.formComponents.map((component, i) => {
            if (component === "Text") {
                return <Text
                    key={i}
                    id={i}
                    onDelete={this._deleteField.bind(this)}/>;
            } else if (component === "Question") {
                return <Question
                    key={i}
                    id={i}
                    onDelete={this._deleteField.bind(this)}/>
            }
        });

        return( <div class="card" style={formComponentStyle}>
                < ul class=" bg-inverse nav-bar">
                    < button class="btn" onClick={() => this._addField("Text")}> Add Text</button>
                    < button class="btn" onClick={() => this._addField("Question")}> Add Question</button>
                </ul>
                <Title/>
                {formattedFormFields}
            </div>
        )
    }
}