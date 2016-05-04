import React from "react";
import Title from "./Title";
import Menu from "./Qmenu"


export default class Form extends React.Component {



    render() {

            const fStyle = { backgroundColor: "#D5ABB4", textAlign: "center"};

        return (
            <div className="form-content"  style={fStyle}>
                <Menu></Menu>

                <Title></Title>

            </div>
        );
    }

}

