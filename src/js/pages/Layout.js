import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";




export default class Layout extends React.Component {

    render() {
        const konsult = "Ludwig";
        const containerStyle = {
            marginTop: "20px"
        };
        

        return (
            <div>
                <Header konsult={konsult}></Header>
                <div class="container" style={containerStyle}>
                    {this.props.children}
                </div>
                <Footer></Footer>
            </div>

        );
    }
}
