import React from "react";
import {Link} from "react-router";


export default class Header extends React.Component {

    render() {
        const hStyle = { backgroundColor: "#3C7979", textAlign: "center"};

        return (
            <div class="header" style={hStyle}>
                <h1>CHAS</h1>
                <h3>Konsultenkät för {this.props.konsult}</h3>
                <ul class="nav nav-bar">
                    <Link to="/">
                        <button class="btn btn-success">Question form</button>
                    </Link>
                    <Link to="responses">
                        <button class="btn btn-danger">Responses</button>
                    </Link>
                </ul>

            </div>
        );
    }

}
