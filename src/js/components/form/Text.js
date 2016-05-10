/**
 * Created by ludwi_000 on 5/4/2016.
 */
import React from "react";

export default class Text extends React.Component {
    
    constructor(){
       super();
        this.state = {
            text: "Text",
            description: ""
        }
    }

    handleChange(e){
        const title = e.target.value;
        this.setState({title})

    }

    toggleEditing(){
        const editing = !this.state.editing;
        this.setState({editing});
        console.log(this.state.editing);


    }

    render() {
        const fStyle = {backgroundColor: "#CDCDA6", textAlign: "center", marginTop: "10px"};

        return (

            <div style={fStyle}>
                { !this.state.editing ?
                    <h1 onClick={this.toggleEditing.bind(this)}>{this.state.text}</h1> :
                    <input onClick={this.toggleEditing.bind(this)} type="text" placeholder="Text" autofocus="true" onChange={this.handleChange.bind(this)} /> }
                <button class="btn btn-danger">Delete</button>
            </div>
        )
    }

}
