import React from "react";
import PropTypes from "prop-types";
import Empty from "./Empty";
import Part from "./Part";

const fuseConfig = {
    keys: ["name", "purchaseLink", "barcode"],
};

const Parts = ({ Filter, parts, dispatch, inventoryId }) =>
    Object.keys(parts).length > 0 ? (
        <Filter items={Object.values(parts)} fuseConfig={fuseConfig}>
            {results =>
                results.map((result, i) => <Part key={i} part={result} />)
            }
        </Filter>
    ) : (
        <Empty dispatch={dispatch} inventoryId={inventoryId} />
    );
Parts.propTypes = {
    Filter: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    parts: PropTypes.shape({
        [PropTypes.string]: PropTypes.shape({}),
    }),
    dispatch: PropTypes.func,
    inventoryId: PropTypes.string,
};

export default Parts;
