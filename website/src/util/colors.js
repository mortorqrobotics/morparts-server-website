const hexToDecimal = hex => parseInt(hex, 16);

const decimalToHex = decimal => decimal.toString(16);

export const lightenColor = (color, amount) => {
    let output = "#";
    const rgb = [
        color.substring(1, 3),
        color.substring(3, 5),
        color.substring(5),
    ].forEach(value => {
        output += decimalToHex(
            Math.min(hexToDecimal(rgb[value]) + amount, 255),
        );
    });
    return output;
};

export default lightenColor;
