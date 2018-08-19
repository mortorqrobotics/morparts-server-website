const statusDot = {
    width: "8px",
    height: "8px",
    display: "inline-block",
    borderRadius: "4px",
    margin: "0px 4px",
}

export const tree = {
    offset: {
        marginLeft: "15px",
    },
    button: {
        backgroundColor: "#ffc547",
        fontSize: "11px",
        padding: "5px",
        borderRadius: "5px",
        cursor: "pointer",
        width: "fit-content",
    },
    line: {
        borderLeft: "solid 1px",
        margin: "10px 0px 10px 10px",
    },
    label: {
        fontSize: "15px",
        cursor: "pointer",
        ":hover": {
            fontWeight: "500",
        },
    },
    identifier: {
        fontSize: "13px",
        color: "#A4A4A4",
        padding: "2px",
    },
    selected: {
        fontSize: "18px",
        fontWeight: "500",
    },
    glyph: {
        marginRight: "2px",
    },
    statusDot,
}

export default {
    heading: {
        textAlign: "center",
        padding: "20px",
    },
    description: {
        marginTop: "10px",
        maxWidth: "100%",
        width: "100%",
        height: "200px",
        fontSize: "20px",
    },
    statusDot,
}
