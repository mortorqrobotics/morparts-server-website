import { hoverColor, selectedColor } from "~/shared/styles/colors";

export const statusColors = {
    designing: "#0000ff",
    material: "#ff0000",
    ordered: "#ff9900",
    drawing: "#9900ff",
    ready: "##9900ff",
    manufacturing: "#ff0055",
    outsourced: "#663300",
    assembly: "#cccc00",
    done: "#00cc00",
};

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
    part: {
        fontSize: "20px",
        borderTop: "solid 1px",
        borderBottom: "solid 1px",
        borderLeft: "solid 1px",
        borderBottomLeftRadius: "5px",
        borderTopLeftRadius: "5px",
        margin: "10px 0px 10px 10px",
        padding: "2px",
        width: "400px",
        backgroundColor: "#E9E9E9",
    },
}

