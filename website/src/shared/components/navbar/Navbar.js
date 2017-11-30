import React from "react";
import Radium from "radium";

@Radium
export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <a href="/">Inventory</a>
        <a href="/inventory">Inventory</a>
      </div>
    )
  }
}
