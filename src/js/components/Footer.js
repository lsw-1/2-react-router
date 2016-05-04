/**
 * Created by ludwi_000 on 5/4/2016.
 */
import React from "react";


export default class Footer extends React.Component {

    render() {
        const fStyle = {
            backgroundColor: "#D5ABB4",
            textAlign: "center"
        };

        return (
            <div class="footer" style={fStyle}>
                <h2>Footer</h2>
            </div>
        );
    }

}
