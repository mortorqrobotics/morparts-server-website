import React from "react";
import Radium from "radium";

import Root, { pageInit } from "~/shared/components/Root";
import Navbar from "~/shared/components/navbar/Navbar";

@Radium
export default class Nomenclature extends React.Component {

  render() {
    return (
      <Root pageName="nomenclature">
        <Navbar />
        <h1>no nomenclature for you</h1>
      </Root>
    )
  }
}

pageInit(Nomenclature);
