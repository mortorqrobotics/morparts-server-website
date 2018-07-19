import { hoverColor, selectedColor } from "~/shared/styles/colors";

const part = {
    fontSize: "20px",
    borderTop: "solid 1px",
    borderBottom: "solid 1px",
    borderLeft: "solid 1px",
    borderBottomLeftRadius: "5px",
    borderTopLeftRadius: "5px",
    margin: "10px 0px 10px 10px",
    padding: "2px",
    width: "250px",
    backgroundColor: "#E9E9E9",
}

export default {
    assemblyDiv: {
        marginLeft: "15px",
    },
    container: {
        marginLeft: "15px",
        width: "350px",
    },
    button: {
        backgroundColor: "#ffc547",
        width: "100px",
        fontSize: "15px",
        margin: "10px",
    },
    radio: {
        width: "10px",
    },
    part,
    hovered: [part, {
        backgroundColor: hoverColor,
    }],
    selected: [part, {
        backgroundColor: selectedColor,
    }],
}

