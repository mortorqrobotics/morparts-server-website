import React from "react";
import Radium from "radium";

import Root, { pageInit } from "~/shared/components/Root";
import Navbar from "~/shared/components/navbar/Navbar";
import { request } from "~/util/ajax";

@Radium
export default class Home extends React.Component {

  addPart = async() => {
      await request("POST", "/parts");
  }

  render() {
    return (
      <Root pageName="home">
        <Navbar />
        <h1 onClick={this.addPart}>testing</h1>
      </Root>
    )
  }
}

pageInit(Home);
