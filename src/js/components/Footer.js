/**
 * Created by ludwi_000 on 5/4/2016.
 */
import React from "react";


export default class Footer extends React.Component {

    render() {
        const footerComponentStyle = {
            backgroundColor: "black",
            textAlign: "center",
            minHeight: "150px",
            bottom: "0px"
        };

        return (
            <div class="footer" style={footerComponentStyle}>
                <h2>Footer</h2>
            </div>
        );
    }

}
