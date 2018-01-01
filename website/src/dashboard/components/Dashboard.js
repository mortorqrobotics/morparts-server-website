import React from "react";
import Radium from "radium";

import Root, { pageInit } from "~/shared/components/Root";
import Navbar from "~/shared/components/navbar/Navbar";
import Button from "~/shared/components/Button";
import ProjectList from "~/dashboard/components/ProjectList";
import styles from "~/dashboard/styles";
import { request } from "~/util/ajax";

import { makeStore } from "~/util/redux";
import reducers from "~/dashboard/reducers";
const store = makeStore(reducers);
import { initialActions } from "~/dashboard/actions";
initialActions(store.dispatch);

@Radium
export default class Dashboard extends React.Component {

    render() {
        return (
            <Root pageName="dashboard" store={store}>
                <Navbar />
                <h1 style={styles.h1}>Projects</h1>
                <ProjectList />
            </Root>
        )
    }
}

pageInit(Dashboard);
