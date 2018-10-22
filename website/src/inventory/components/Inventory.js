import React from "react";
import Radium from "radium";
import fuzzyFilterFactory from "react-fuzzy-filter";

import AddItem from "~/inventory/components/AddItem";
import Parts from "~/inventory/components/Parts";
import Dropdown from "~/shared/components/Dropdown";
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
        const { inventoryId, inventories } = this.props;
        return (
            <Root pageName="inventory" store={store}>
                <Navbar />
                <InputFilter debounceTime={200} />
                <div />
                <Dropdown>
                    {(inventories || []).map(val => (
                        <option name={val} selected={val === inventoryId}>
                            {val}
                        </option>
                    ))}
                </Dropdown>
                <AddItem />
                <Parts Filter={FilterResults} />
            </Root>
        );
    }
}

export default Inventory;

pageInit(Inventory);
