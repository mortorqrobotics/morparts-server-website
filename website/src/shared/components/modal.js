import React from "react";
import Radium from "radium";

import { withCss } from "~/util/component";
import TextBox from "~/shared/components/TextBox";
import Button from "~/shared/components/Button";
import styles from "~/shared/styles/modal";

export const ModalTextBox = withCss(TextBox, styles.textBox);

export const ModalButton = Radium((props) => {
    const { style, text, onClick } = props;
    return (
        <Button
            style={[styles.button, props.style]}
            text={props.text}
            onClick={props.onClick}
        />
    )
})
