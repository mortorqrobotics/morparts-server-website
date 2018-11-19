import React from "react";
import Radium from "radium";

import Root, { pageInit } from "~/shared/components/Root";
import Navbar from "~/shared/components/navbar/Navbar";
import Heading from "~/home/components/Heading";

@Radium
class Home extends React.Component {
    render() {
        return (
            <Root pageName="home">
                <Navbar />
                <Heading />
            </Root>
        );
    }
}

export default Home;

pageInit(Home);
