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

// boolean parser

const stringifyBoolean = (value) => {
    if (value === true) {
        return `"${true}"`;
    }
    else if (value === false) {
        return `"${false}"`;
    }
}
console.log(stringifyBoolean(true))
console.log(stringifyBoolean(false))

// number parser
