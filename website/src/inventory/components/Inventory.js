import React from "react";
import Radium from "radium";
import fuzzyFilterFactory from "react-fuzzy-filter";
import PropTypes from "prop-types";

import AddItem from "~/inventory/components/AddItem";
import Parts from "~/inventory/components/Parts";
import Selector from "~/inventory/components/Inventory Selector";
import Root, { pageInit } from "~/shared/components/Root";
import Navbar from "~/shared/components/navbar/Navbar";

import { makeStore } from "~/util/redux";
import reducers from "~/inventory/reducers";
import { initialActions } from "~/inventory/actions";

const { InputFilter, FilterResults } = fuzzyFilterFactory();

const store = makeStore(reducers);
initialActions(store.dispatch);

@Radium
class Inventory extends React.Component {
    render() {
        return (
            <Root pageName="inventory" store={store}>
                <Navbar />
                <InputFilter debounceTime={200} />
                <div />
                <Selector />
                <div />
                <AddItem />
                <Parts Filter={FilterResults} />
            </Root>
        );
    }
}

export default Inventory;

pageInit(Inventory);
