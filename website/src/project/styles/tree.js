import { defaultColor, hoverColor } from "~/shared/styles/colors";

export default {
    container: {
        width: "400px"
    },
    offset: {
        marginLeft: "15px",
    },
    button: {
        backgroundColor: defaultColor,
        fontSize: "11px",
        padding: "5px",
        borderRadius: "5px",
        cursor: "pointer",
        width: "fit-content",
        ":hover": {
            backgroundColor: hoverColor,
        },
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
}

