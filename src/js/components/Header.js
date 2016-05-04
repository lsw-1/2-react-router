import React from "react";
import {Link} from "react-router";


export default class Header extends React.Component {

    render() {
        return (
            <div class="header">
                <h1>CHAS</h1>
                <h3>Konsultenkät för {this.props.konsult}</h3>

                <Link to="/">
                    <button class="btn btn-success">Question form</button>
                </Link>
                <Link to="responses">
                    <button class="btn btn-success">Responses</button>
                </Link>
            </div>
        );
    }

}
