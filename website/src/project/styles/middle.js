import styles from "~/project/styles";

export default {
    container: [styles.container, {
        padding: "30px",
        display: "inline-block",
        backgroundColor: "white",
        boxShadow: "rgb(169, 169, 169) 1.5px 3px 8px -2px",
        width: "600px",
    }],
    trash: {
        fontSize: "20px",
        cursor: "pointer",
    },
    statusDot: styles.statusDot,
}
