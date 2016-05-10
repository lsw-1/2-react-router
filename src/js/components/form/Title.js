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
    //TODO:2. select input element

    toggleEditing(){
        console.log(this.state.editing);
        const editing = !this.state.editing;
        this.setState({editing});
        

    }

    handleChange(e){
        const title = e.target.value;
        this.setState({title})
    }



    render() {
        const fStyle = {backgroundColor: "#CDCDA6", textAlign: "center", marginTop: "10px"};

        let textfield;

        if(this.state.editing){
            textfield = <input id="some" onClick={this.toggleEditing.bind(this)} type="text" placeholder="Title" onChange={this.handleChange.bind(this)} />
        } else {
            textfield = <h1 onClick={this.toggleEditing.bind(this)}>{this.state.title}</h1>
        }


        return (

            <div style={fStyle}>
                {textfield}
            </div>
        );
    }

}

