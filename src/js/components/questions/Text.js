/**
 * Created by ludwi_000 on 5/4/2016.
 */
import React from "react";

export default class Title extends React.Component {

    render() {
        const fStyle = {backgroundColor: "#CDCDA6", textAlign: "center", marginTop: "10px"};

        return (
            <div style={fStyle}>
                <p>Add text below:</p>
                <input type="text"/>
                <button>Delete</button>
            </div>
        );
    }

}
