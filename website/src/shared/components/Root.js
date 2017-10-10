import React from "react";
import ReactDOM from "react-dom";

import { StyleRoot } from "radium";
import { Provider } from "react-redux";

export default class Root extends React.Component {

  getChildContext() {
    return {
      pageName: this.props.pageName;
    }
  }

  wrap = (contents) => {
    if (this.props.store) {
      return (
        <Provider store={this.props.store}>
          <div>
            {contents}
          </div>
        </Provider>
      )
    } else {
        return contents;
      }
  }

  render() {
    return (
      <StyleRoot styles = {styles.global}>
        {this.wrap(this.props.children)}
      </StyleRoot>
    )
  }
}

export function pageInit(page) {
  window._pageInit = {
    React: React,
    ReactDOM: ReactDOM,
    Page: Page,
  }
}