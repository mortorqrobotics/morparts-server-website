import { defaultColor, hoverColor } from "~/shared/styles/colors";
import { standardBoxShadow } from "~/shared/styles/boxShadows";

export default {
    h1: {
        margin: "40px 20px 0px",
        textAlign: "center",
    },
    container: {
        textAlign: "center",
        paddingTop: "30px",
        listStyle: "none",
        paddingLeft: "0px",
    },
    li: {
        width: "100%",
    },
    project: {
        fontSize: "1.5em",
        width: "50%",
        display: "inline-block",
        padding: "30px",
        borderTop: "1px dashed #fff",
        ":hover": {
            backgroundColor: "#efefef",
            cursor: "pointer",
        },
    },
    hr: {
        borderBottom: "1px dashed #fff",
        marginTop: "0px",
        width: "50%",
    },
    button: {
        fontSize: "20px",
        height: "40px",
        width: "150px",
        backgroundColor: defaultColor,
        boxShadow: standardBoxShadow,
        ":hover": {
            backgroundColor: hoverColor,
        },
    },
};
