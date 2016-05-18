import React from "react";
import {Link} from "react-router";


export default class Header extends React.Component {

    render() {
        const headerComponentStyle = { Color: "white" ,backgroundColor: "black", textAlign: "center"};
        const noMargin = { marginTop: "0"};

        return (
            <div class="header" style={headerComponentStyle}>
                <h1 style={noMargin} class="page-header">Chas</h1>

                <h3>Konsultenkät för {this.props.konsult}</h3>

                <div class="nav nav-stacked">
                    <Link to="/">
                        <button class="btn btn-success">Questions</button>
                    </Link>
                    <Link to="responses">
                        <button class="btn btn-danger">Responses</button>
                    </Link>
                </div>

            </div>
        );
    }
}
