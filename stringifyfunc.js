// null parser

const stringifyNull = (value) => {
    if (value === null) {
        return `"${value}"`;
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

const stringifyArr = (value) => {
    let result = "";
    let lastIndex = value.length - 1;
    result += "'["
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
    result += "]'"
    return result;
}
console.log(stringifyArr(["vinay", 12, null]))
console.log(stringifyArr([2, 4, 6, true, "vinay"]))

// object parser

const stringifyObject = (obj) => {
    let result = "";
    let lastKey = Object.keys(obj).pop()
    result += "'{";  
    for (let key in obj) {
        const value = obj[key];
        result += `"${key}":`
        if (value === null) {
            result += `${value}`
        }
        else if (value === true) {
            result += `${true}`
        }
        else if (value === false) {
            result += `${false}`
        }
        else if (typeof value === "number") {
            result += `${value}`
        }
        else if (typeof value === "string") {
            result += `"${value}"`
        }
        else if (typeof value === "object") {
            result += `${stringify(value)}`
        }
        if (key !== lastKey) {
            result += "," 
            } 
    }
    result += "}'"
    return result;
}
console.log(stringifyObject({ x: true, y: {x :5, y:false}}));
console.log(stringifyObject({ x: true, y: 32, z: 42}));
console.log(JSON.stringify({ x: true, y: {x :5, y:false}}))
console.log(JSON.stringify({ x: true, y: 32, z: 42}))


// array with object parser

const stringifyArray = (value) => {
    let result = "";
    let lastIndex = value.length - 1;
    result += "'["
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
        else if (typeof value[i] === "object") {
            let output = "";
            let object = value[i];
            let lastKey = Object.keys(object).pop()
            output += "{";  
            for (let key in object) {
                const value = object[key];
                output += `"${key}":`
                if (value === null) {
                    output += `${value}`
                }
                else if (value === true) {
                    output += `${true}`
                }
                else if (value === false) {
                    output += `${false}`
                }
                else if (typeof value === "number") {
                    output += `${value}`
                }
                else if (typeof value === "string") {
                    output += `"${value}"`
                }
                else if (typeof value === "object") {
                    output += `${stringify(value)}`
                }
                if (key !== lastKey) {
                    output += "," 
                } 
            }
            output += "}"
            result += output;
        }
        if (value[i] !== value[lastIndex]) {
        result += "," 
        } 
    }
    result += "]'"
    return result;
}

console.log(JSON.stringify(["a", 22, { x: null, y: 6 }]));
console.log(JSON.stringify([1, 2, "ACSD"]))
console.log(JSON.stringify([1, 2, 3, 4]))
console.log(JSON.stringify(["VINAY", "adarsh"]))
console.log(JSON.stringify([true, null, 56]))
console.log("end")
console.log(stringifyArray(["a", 22, { x: null, y: 6 }]))
console.log(stringifyArray([1, 2, "ACSD"]))
console.log(stringifyArray([1, 2, 3, 4]))
console.log(stringifyArray(["VINAY", "adarsh"]))
console.log(stringifyArray([true, null, 56]))