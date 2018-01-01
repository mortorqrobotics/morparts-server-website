import { standardBoxShadow } from "~/shared/styles/boxShadows";
import { defaultColor, selectedColor } from "~/shared/styles/colors";

const item = {
    width: "100%",
    borderRadius: "1px",
    marginTop: "10px",
    marginBottom: "5px",
    boxShadow: standardBoxShadow,
    ":focus": {
        outline: "none",
    },
}

const textBox = [item, {
    padding: "8px 4px 8px 4px",
    fontSize: "15px",
}]

export default {
    textBox: textBox,
    button: [item, {
        height: "37px",
        backgroundColor: defaultColor,
        color: "black",
        ":hover": {
            backgroundColor: selectedColor,
        },
    }],
}
