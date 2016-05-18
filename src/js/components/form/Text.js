/**
 * Created by ludwi_000 on 5/4/2016.
 */
import React from "react";

export default class Text extends React.Component {

    constructor() {
        super();
        this.state = {
            id: null,
            text: "Text",
            description: ""
        }
    }

    _toggleEditing() {
        const editing = !this.state.editing;
        this.setState({editing});
        console.log(this.state.editing);

    }
    
    _handleDelete(event) {
        event.preventDefault();
        console.log(event.target.parentElement);
        this.props.onDelete(this.props.id)
    }
    
    
    _handleChange(e) {
        const text = e.target.value;
        console.log(e.target);
        this.setState({text})
    }


 

    render() {
        const textComponentStyle = {backgroundColor:"", marginTop: "10px", paddingBottom: "10px"};

        let textField;

        if (this.state.editing) {
            textField = [
                <input  class="form-control" type="text" placeholder="text" 
                onChange={this._handleChange.bind(this)}/>,
                <button class="btn" onClick={this._toggleEditing.bind(this)}>Edit</button>]
        } else {
                textField = [
                <h1 onClick={this._toggleEditing.bind(this)}>{this.state.text}</h1>,
                <button class="btn btn-danger" onClick={this._handleDelete.bind(this)}>Delete</button>]
        }

        return (
            <div style={textComponentStyle}>
                {textField}
            </div>
        )
    }
}
