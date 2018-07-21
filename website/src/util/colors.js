export const lightenColor = (color) => {
    return (color & 0x7f7f7f) << 1;
}

export const darkenColor = (color) => {
    return (color & 0xfefefe) >> 1;
}


