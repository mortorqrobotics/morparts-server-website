export const lightenColor = (color, amount) => {
    let output = "#";
    let rgb = [color.substring(1, 3), color.substring(3, 5), color.substring(5)];
    for (let value in rgb) {
        output += decimalToHex(Math.min(hexToDecimal(rgb[value]) + amount, 255));
    }
    return output;
}

const hexToDecimal = (hex) => {
    return parseInt(hex, 16);
}

const decimalToHex = (decimal) => {
    return decimal.toString(16);
}
