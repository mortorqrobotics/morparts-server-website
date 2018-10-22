import React from "react";
import PropTypes from "prop-types";
import Empty from "./Empty";

const fuseConfig = {
    keys: ["hello"],
};

const Parts = ({ Filter, parts, dispatch }) =>
    parts.length > 0 ? (
        <Filter items={parts} fuseConfig={fuseConfig}>
            {results =>
                results.map((result, i) => (
                    <div key={i}>{JSON.stringify(result)}</div>
                ))
            }
        </Filter>
    ) : (
        <Empty dispatch={dispatch} />
    );

Parts.propTypes = {
    Filter: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    parts: PropTypes.arrayOf(PropTypes.shape({})),
    dispatch: PropTypes.func,
};

export default Parts;
