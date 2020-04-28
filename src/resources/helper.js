export function sortByProperty(property) {
    return function (a, b) {
        if (a[property] > b[property])
            return -1;
        else if (a[property] < b[property])
            return 1;

        return 0;
    }
}

export function LightenDarkenColor(col, amt) {
    col = parseInt(col, 16);
    return `#${(((col & 0x0000FF) + amt) | ((((col >> 8) & 0x00FF) + amt) << 8) | (((col >> 16) + amt) << 16)).toString(16)}`;
}


// TEST
