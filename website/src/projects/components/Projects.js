import React from "react";
import Radium from "radium";

import Root, { pageInit } from "~/shared/components/Root";
import Navbar from "~/shared/components/navbar/Navbar";

@Radium
export default class Projects extends React.Component {

    render() {
        return (
            <Root pageName="projects">
                <Navbar />
                <h1>no nomenclature for you</h1>
            </Root>
        )
    }
}

pageInit(Projects);
