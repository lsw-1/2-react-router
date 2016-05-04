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
    //TODO:1. Make input and h1 match
    //TODO:2. Make so that when not selected only h1 show and reverse when selected

/*    handleChange(e){
        const title = e.target.value;
        this.setState(this.state.title = title);
    }*/


    handleChange(e){
        const title = e.target.value;
        this.setState({title})
    }

    render() {
        const fStyle = {backgroundColor: "#CDCDA6", textAlign: "center", marginTop: "10px"};


        return (


            <div style={fStyle}>
                <input type="text" placeholder="Title" onChange={this.handleChange.bind(this)} />
                <h1>{this.state.title}</h1>
                <button class="btn">delete</button>
            </div>
        );
    }

}

