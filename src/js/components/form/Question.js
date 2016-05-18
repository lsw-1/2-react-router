/**
 * Created by ludwi_000 on 5/4/2016.
 */
import React from "react";

export default class Question extends React.Component {

    constructor() {
        super();
        this.state = {
            text: "Question",
            description: "none",
            answers: ["Option 1", "Option 2"]
        }
    }

    _toggleEditing() {
        const editing = !this.state.editing;
        this.setState({editing});
        console.log(this.state.editing);
    }

    _handleDelete(event) {
        event.preventDefault();
        this.props.onDelete(this.props.id)
    }

    _handleChange(e) {
        const title = e.target.value;
        this.setState({text})
    }

    _addOption(text) {
        let answers = this.state.answers;
        answers.push(text);
        this.setState({answers});
        console.log(...this.state.answers)
    }

    _deleteOption(e){
        e.preventDefault();
        let answers = this.state.answers;
        let optName = (e.currentTarget.previousSibling.innerHTML);
        answers.splice(optName, 1);
        console.log(answers);

        this.setState({answers});
    }

    render() {

        const cancelButtonStyle = {height: "20px", width: "20px", marginLeft: "1rem"};

        let formattedAnswers = this.state.answers.map((answer, i) => {
            return (
                <div class="radio">
                    <input id={i} type="radio" />
                    <label for={i}>{answer}</label>
                    <button style={cancelButtonStyle} class="btn btn-danger" onClick={this._deleteOption.bind(this)}>.</button>
                </div>
            )
        });

        let textField;

        if (this.state.editing) {
            textField = [
                <input class="form-control" type="text" placeholder="Write a question"
                       onChange={this._handleChange.bind(this)}/>,
                <button class="btn" onClick={this._toggleEditing.bind(this)}>Edit</button>]
        } else {
            textField = <h1 onClick={this._toggleEditing}>{this.state.text}</h1>
        }

        return (
            <div>
                {textField}
                <div class="form-group">
                    <label htmlFor="addOption">Add Option</label>
                    <input class="form-control" type="text" id="addOption"/>
                    <button class="btn" onClick={() => this._addOption(document.getElementById("addOption").value)}>Submit</button>
                </div>

                <ul>
                    {formattedAnswers}
                </ul>

                <button class="btn btn-danger" onClick={this._handleDelete.bind(this)}>Delete</button>

            </div>
        );
    }

}
