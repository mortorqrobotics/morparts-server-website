import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";

import Glyphicon from "react-bootstrap/lib/Glyphicon";
import Link from "~/shared/components/Link";
import styles from "~/shared/styles/navbar";

@Radium
class SearchBox extends React.Component {
    static propTypes = {
        // eslint-disable-next-line react/no-unused-prop-types
        path: PropTypes.string,
        // eslint-disable-next-line react/no-unused-prop-types
        glyph: PropTypes.string,
        // eslint-disable-next-line react/no-unused-prop-types
        name: PropTypes.string,
    };

    static contextTypes = {
        pageName: PropTypes.string,
    };

    onClick = () => {
        const { props } = this;
        window.location.assign(props.path);
    };

    render() {
        const { props, context } = this;
        return (
            <Link
                location={props.path}
                style={[
                    styles.link,
                    styles.glyphLink.li,
                    props.name === context.pageName
                        ? styles.glyphLink.selected
                        : styles.glyphLink.unselected,
                ]}
            >
                <Glyphicon glyph={props.glyph} />
            </Link>
        );
    }
}

export default SearchBox;
