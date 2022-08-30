// null parser

const stringifyNull = (value) => {
    if (value === null) {
        return `"${value}"`;
    }
    else{
        return value;
    }
}

console.log(stringifyNull(null));
