import React from "react";
import Radium from "radium";

import styles from "~/shared/styles/navbar";
import GlyphLink from "~/shared/components/navbar/GlyphLink";
import Link from "~/shared/components/Link";

@Radium
class Navbar extends React.Component {
    render() {
        return (
            <div>
                <div style={styles.container}>
                    <Link
                        style={[styles.link, styles.title]}
                        text="MorParts"
                        location="/"
                    />
                    <GlyphLink
                        path="/inventory"
                        glyph="wrench"
                        name="inventory"
                    />
                    <GlyphLink
                        path="/dashboard"
                        glyph="list"
                        name="dashboard"
                    />
                </div>
            </div>
        );
    }
}

export default Navbar;
