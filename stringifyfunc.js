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
const stringifyNumber = (value) => {
    let result = ""
    if (typeof value === "number") {
        result += `${value}`
    }
    return result;
}

console.log(stringifyNumber(23));

// string parser

const stringifystring = (value) => {
    let result = ""
    if (typeof value === "string") {
        result += `"${value}"`
    }
    return result;
}
console.log(stringifystring("vinay"));

// array parser

const stringifyArray = (value) => {
    let result = "";
    let lastIndex = value.length - 1;
    result += '['
    for (let i = 0; i < value.length; i++) {
        if (value[i] === null) {
            result += `${value[i]}`
        }
        else if (value[i] === true) {
            result += `${true}`
        }
        else if (value[i] === false) {
            result += `${false}`
        }
        else if (typeof value[i] === "number") {
            result += `${value[i]}`
        }
        else if (typeof value[i] === "string") {
            result += `"${value[i]}"`
        }
        if (value[i] !== value[lastIndex]) {
        result += "," 
        } 
    }
    result += ']'
    return result;
}
console.log(stringifyArray(["vinay", 12, null]))