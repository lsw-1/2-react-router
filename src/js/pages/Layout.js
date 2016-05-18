import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";




export default class Layout extends React.Component {

    render() {
        const konsult = "Ludwig";
        const containerStyle = {
            height: "100%"
        };

        

        return (
            <div>
                <Header konsult={konsult}/>
                <div class="container" style={containerStyle}>
                    {this.props.children}
                </div>
            </div>

        );
    }
}
