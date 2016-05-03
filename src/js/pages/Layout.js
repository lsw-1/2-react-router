import React from "react";
import { Link } from "react-router";


export default class Layout extends React.Component {
  render() {

      return (
      <div>
          {this.props.children}
          <h1>Killer News</h1>
          <Link to="archives" ><button class="btn btn-success">Archives</button></Link>
          <Link to="settings">Settings</Link>
      </div>

    );
  }
}
