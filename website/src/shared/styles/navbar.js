import { defaultColor, hoverColor, selectedColor } from "~/shared/styles/colors";
const navbarHeight = 40;

export default {
    container: {
        height: navbarHeight + "px",
        backgroundColor: defaultColor,
    },
    title: {
        fontSize: "18px",
        marginLeft: "18px",
        marginRight: "12px",
        fontFamily: "'Titillium Web', sans-serif",
        cursor: "pointer",
        display: "inline-block",
        verticalAlign: "top",
        marginTop: "8px",
        "@media screen and (max-width: 700px)": {
            marginLeft: "10px",
            marginRight: "4px",
        },
        "@media screen and (max-width: 490px)": {
            marginLeft: "6px",
            marginRight: "0px",
        },
        "@media screen and (max-width: 330px)": {
            marginTop: "8.5px",
            display: "none",
        },
    },
    link: {
        color: "#333",
        textDecoration: "none",
    },
    glyphLink: {
        li: {
            textAlign: "center",
            display: "inline-block",
            width: "35px",
            fontSize: "20px",
            height: "100%",
            paddingTop: "8px",
            position: "relative",
            marginLeft: "0px 2px 0px -5px",
            ":hover": {
                cursor: "pointer",
            },
            "@media screen and (max-width: 820px)": {
                display: "none",
            },
        },
        selected: {
            backgroundColor: selectedColor,
        },
        unselected: {
            backgroundColor: defaultColor,
        },
    },
}
