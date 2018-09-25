import { standardBoxShadow } from "~/shared/styles/boxShadows";
import { standardColor, selectedColor } from "~/shared/styles/colors";

const description = {
    margin: "15px 0",
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
        margin: "0 10px",
        display: "inline-block",
    },
    pin: {
        unselected: [glyph, {
            float: "right",
            opacity: "0.3",
            ":hover": {
                opacity: "0.5",
            },
        }],
        selected: [glyph, {
            float: "right",
        }],
    },
    pinnedPart: {
        minWidth: "200px",
        marginBottom: "10px",
        cursor: "pointer",
    },
    description: {
        editing: [description, {
            outline: "2px solid " + selectedColor,
            border: "none",
            minHeight: "150px",
        }],
        notEditing: [description, {
            outline: "1px solid #E9E9E9",
            border: "none",
            resize: "none",
            minHeight: "100px",
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

