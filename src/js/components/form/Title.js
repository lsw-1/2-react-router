/**
 * Created by ludwi_000 on 5/4/2016.
 */
import React from "react";

export default class Title extends React.Component {

    constructor(){
        super();
        this.state = {
            title: "Title"
        }
    }

   _toggleEditing(){
           console.log(this.state.editing);
           const editing = !this.state.editing;
           this.setState({editing});

    }

    handleChange(e){
        const title = e.target.value;
        this.setState({title})
    }



    render() {
        const titleComponentStyle = {backgroundColor: "#", marginTop: "10px"};

        let textField;

        if(this.state.editing){
            textField =[
                <input class="form-control" type="text" placeholder="Title" onChange={this.handleChange.bind(this)} />,
                <button class="btn" onClick={this._toggleEditing.bind(this)}>Edit</button>]
        } else {
            textField = <h1 onClick={this._toggleEditing.bind(this)}>{this.state.title}</h1>
        }


        return (

            <div style={titleComponentStyle}>
                {textField}
            </div>
        );
    }

}

