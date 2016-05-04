import React from "react";
import Menu from "../components/Menu"


export default class Questions extends React.Component {
    render() {
        const {query} = this.props.location;
        console.log(this.props);
        const { params } = this.props;
        const { article } = params;
        const {date, filter} = query;

        return (
            <div>
                <h1>Questions ({article})</h1>
                <Menu></Menu>
                
            </div>
        );
    }
}