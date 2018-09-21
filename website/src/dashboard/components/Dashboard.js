import React from "react";
import Radium from "radium";

import Root, { pageInit } from "~/shared/components/Root";
import Navbar from "~/shared/components/navbar/Navbar";
import ProjectList from "~/dashboard/components/ProjectList";

import { makeStore } from "~/util/redux";
import reducers from "~/dashboard/reducers";
import { initialActions } from "~/dashboard/actions";

const store = makeStore(reducers);
initialActions(store.dispatch);

@Radium
export default class Dashboard extends React.Component {
    render() {
        return (
            <Root pageName="dashboard" store={store}>
                <Navbar />
                <ProjectList />
            </Root>
        )
    }
}

pageInit(Dashboard);
