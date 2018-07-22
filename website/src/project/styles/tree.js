export const statusColors = {
    designing: "#4286f4",
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
        display: "inline-block",
        padding: "30px 100px 0px 30px",
        float: "left",
    },
    button: {
        backgroundColor: "#ffc547",
        fontSize: "10px",
        padding: "5px",
        borderRadius: "5px",
        cursor: "pointer",
        width: "fit-content",
    },
    radio: {
        width: "10px",
    },
    treeLine: {
        borderLeft: "solid 1px",
        margin: "10px 0px 10px 10px",
        backgroundColor: "#E9E9E9",
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
    statusLabel: {
        borderRadius: "3px",
        color: "white",
        padding: "2px",
        marginLeft: "2px",
    }
}

