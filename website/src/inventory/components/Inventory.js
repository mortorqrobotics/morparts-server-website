import React from "react";
import Radium from "radium";
import fuzzyFilterFactory from "react-fuzzy-filter";

import Root, { pageInit } from "~/shared/components/Root";
import Navbar from "~/shared/components/navbar/Navbar";
import Buttons from "~/inventory/components/Buttons";
import Parts from "~/inventory/components/Parts";

import { makeStore } from "~/util/redux";
import reducers from "~/project/reducers";
import { initialActions } from "~/project/actions";

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
                <Buttons />
                <Parts Filter={FilterResults} />
            </Root>
        );
    }
}

export default Inventory;

pageInit(Inventory);
