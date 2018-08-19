import React from "react";
import Radium from "radium";

import Root, { pageInit } from "~/shared/components/Root";
import Navbar from "~/shared/components/navbar/Navbar";
import Heading from "~/home/components/Heading"
import Body from "~/home/components/Body";

@Radium
export default class Home extends React.Component {

    render() {
        return (
            <Root pageName="home">
                <Navbar />
                <Heading />
                <Body />
            </Root>
        )
    }
}

pageInit(Home);
