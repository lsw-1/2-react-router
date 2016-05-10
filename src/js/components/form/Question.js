/**
 * Created by ludwi_000 on 5/4/2016.
 */
import React from "react";

export default class Question extends React.Component {

    constructor(){
        super()


    }

    toggleEditing(){
        const editing = !this.state.editing;
        this.setState({editing});
        console.log(this.state.editing);
    }

    render() {
        return (
            <div>
                <h3>Question</h3>
                <input type="text"/>

                <ul>
                    <li><input type="radio"/>Option 1</li>
                    <li><input type="radio"/>Option 2</li>
                    <li><input type="radio"/>Option 3</li>
                </ul>
                <button class="btn btn-danger">Delete</button>
            </div>
        );  
    }

}
