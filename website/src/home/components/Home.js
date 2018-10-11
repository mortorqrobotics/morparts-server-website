import React from "react";
import Radium from "radium";

import Root, { pageInit } from "~/shared/components/Root";
import Navbar from "~/shared/components/navbar/Navbar";
import Heading from "~/home/components/Heading";
import Body from "~/home/components/Body";

import { makeStore } from "~/util/redux";
import reducers from "~/home/reducers";
import { initialActions } from "~/home/actions";

const store = makeStore(reducers);
initialActions(store.dispatch);

@Radium
class Home extends React.Component {
    render() {
        return (
            <Root pageName="home" store={store}>
                <Navbar />
                <Heading />
                <Body />
            </Root>
        );
    }
}

export default Home;

pageInit(Home);
