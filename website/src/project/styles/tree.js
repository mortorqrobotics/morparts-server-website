import styles from "~/project/styles";

export default {
    assemblyDiv: {
        marginLeft: "15px",
    },
    container: [styles.container, {
        marginRight: "20px",
        float: "left",
        width: "400px",
    }],
    button: {
        backgroundColor: "#ffc547",
        fontSize: "10px",
        padding: "5px",
        borderRadius: "5px",
        cursor: "pointer",
        width: "fit-content",
    },
    treeLine: {
        borderLeft: "solid 1px",
        margin: "10px 0px 10px 10px",
    },
    label: {
        fontSize: "15px",
        cursor: "pointer",
        width: "fit-content",
        display: "inline-block",
        ":hover": {
            fontWeight: "500",
        },
    },
    selected: {
        fontSize: "18px",
        fontWeight: "500",
    },
    glyph: {
        marginRight: "2px",
    },
    statusDot: styles.statusDot,
}

