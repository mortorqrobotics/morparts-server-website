import React from "react";
import Radium from "radium";

import Root, { pageInit } from "~/shared/components/Root";

@radium
export default class Home extends React.Component {

  render() {
    return (
      <Root pageName="home">
        <h1>testing</h1>
      </Root>
    )
  }
}

pageInit(Home);
