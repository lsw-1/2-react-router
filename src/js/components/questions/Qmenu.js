
/**
 * Created by ludwi_000 on 5/4/2016.
 */
import React from "react";

export default class Menu extends React.Component {

    addText(){
    //    TODO: Add Text component to Form component
    }

    addQuestion(){

    }

    addSection(){
        
    }


    render() {
        return (
            <div class="row">
                <button class="btn" onClick={this.addText}>Add Text</button>
                <button class="btn" onClick={this.addQuestion}>Add Question</button>
                <button class="btn" onClick={this.addSection}>Add Section</button>
            </div>
        );
    }

}