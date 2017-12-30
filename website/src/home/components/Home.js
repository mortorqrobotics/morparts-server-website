import React from "react";
import Radium from "radium";

import Root, { pageInit } from "~/shared/components/Root";
import Navbar from "~/shared/components/navbar/Navbar";
import Button from "~/shared/components/Button";
import { request } from "~/util/ajax";

@Radium
export default class Home extends React.Component {

    addProject = async() => {
        await request("POST", "/projects", {
            name: "project",
            prefix: "1515",
        });
    }

    render() {
        return (
            <Root pageName="home">
                <Navbar />
                <h1>testing</h1>
                <Button text="Add Project" onClick={this.addProject} />
            </Root>
        )
    }
}

pageInit(Home);
