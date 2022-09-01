// stringify()

const stringify = (input) => {
    let result = ""
    if (input === null) {
       result += stringifyNull(input)
    }
    else if (typeof input === "boolean") {
        result += stringifyBoolean(input)
    }
    else if (typeof input === "number") {
        result += stringifyNumber(input)
    }
    else if (typeof input === "string") {
        result += stringifystring(input)
    }
    else if (Array.isArray(input)) {
        result += stringifyArray(input)
    }
    else if (typeof input === "object") {
        result += stringifyObject(input)
    }
    return result;
}




// stringify(null)

const stringifyNull = (value) => {
    if (value === null) {
        return `"${value}"`;
    }
}

// stringify(boolean)

const stringifyBoolean = (value) => {
    if (value === true) {
        return `"${true}"`;
    }
    else if (value === false) {
        return `"${false}"`;
    }
}



//  stringify(number) 

const stringifyNumber = (value) => {
    let result = ""
    if (typeof value === "number") {
        result += `${value}`
    }
    return result;
}


//  stringify(string)

const stringifystring = (value) => {
    let result = ""
    if (typeof value === "string") {
        result += `"${value}"`
    }
    return result;
}


//  stringify(array) 

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
                    output += `${stringifyObject(value)}`
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


//  stringify(object)
 
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
        else if (Array.isArray(value)) {
            result += `"${stringifyArray(value)}"`
        }
        else if (typeof value === "object") {
            result += `${stringifyObject(value)}`
        }
        if (key !== lastKey) {
            result += "," 
            } 
    }
    result += "}'"
    return result;
}