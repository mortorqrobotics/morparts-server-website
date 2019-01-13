import {
    defaultColor,
    hoverColor,
    selectedColor,
} from "~/shared/styles/colors";

const glyph = {
    cursor: "pointer",
    fontSize: "20px",
    marginRight: "5px",
};

const button = {
    fontSize: "17px",
    width: "100px",
    fontWeight: "300",
    padding: "10px",
    margin: "5px",
    float: "right",
}

export default {
    partView: {
        float: "left",
        width: "500px",
        margin: "0 10px 20px",
    },
    pin: {
        unselected: [
            glyph,
            {
                float: "right",
                opacity: "0.3",
                ":hover": {
                    opacity: "0.5",
                },
            },
        ],
        selected: [
            glyph,
            {
                float: "right",
            },
        ],
    },
    description: {
        margin: "15px 0",
        maxWidth: "100%",
        minWidth: "100%",
        fontSize: "20px",
        padding: "15px",
        minHeight: "30px",
        height: "auto",
    },
    pinnedPart: {
        minWidth: "200px",
        marginBottom: "10px",
        marginLeft: "10px",
        cursor: "pointer",
    },
    name: {
        fontSize: "20px",
        fontWeight: "400",
        width: "50%",
        padding: "10px",
    },
    editButton: [
        button,
        {
            backgroundColor: defaultColor,
            ":hover": {
                backgroundColor: hoverColor,
            },
        },
    ],
    deleteButton: [
        button,
        {
            color: "white",
            backgroundColor: "#DD2818",
            ":hover": {
                backgroundColor: "#C71111",
            },
        },
    ],
};
