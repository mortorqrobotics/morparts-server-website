import { standardBoxShadow } from "~/shared/styles/boxShadows";
import { standardColor, selectedColor } from "~/shared/styles/colors";

const description = {
    marginTop: "10px",
    maxWidth: "100%",
    minWidth: "100%",
    fontSize: "20px",
    padding: "15px",
};

const glyph = {
    cursor: "pointer",
    fontSize: "20px",
    marginRight: "5px",
}

export default {
    container: {
        display: "inline-block",
    },
    partView: {
        width: "500px",
    },
    pin: [glyph, {
        float: "right",
        opacity: "0.3",
        fontSize: "20px",
        cursor: "pointer",
        ":hover": {
            opacity: "0.5",
        },
    }],
    description: {
        editing: [description, {
            outline: "2px solid " + selectedColor,
            border: "5px solid " + standardColor,
            minHeight: "150px",
        }],
        notEditing: [description, {
            outline: "none",
            border: "none",
            resize: "none",
        }],
    },
    save: [glyph, {
        color: "green",
    }],
    cancel: [glyph, {
        color: "red",
    }],
    deleteButton: {
        backgroundColor: "#cc0000",
        color: "white",
        fontSize: "15px",
        width: "100px",
        fontWeight: "300",
        padding: "10px",
        float: "right",
    },
}

