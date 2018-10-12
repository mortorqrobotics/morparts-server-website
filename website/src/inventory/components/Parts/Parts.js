import React from "react";
import PropTypes from "prop-types";

const Parts = ({ Filter, parts }) => (
    <Filter
        items={[
            {
                hello: 1,
            },
            {
                hello: 2,
            },
            {
                hello: 3,
            },
        ]}
    >
        {results =>
            results.map((result, i) => (
                <div key={i}>{JSON.stringify(result)}</div>
            ))
        }
    </Filter>
);

Parts.propTypes = {
    Filter: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    parts: PropTypes.arrayOf(PropTypes.shape({})),
};

export default Parts;
