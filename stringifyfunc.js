const input = require("./input.json")
//const string = modules.export ("stringifyfunc.js")

// function call parsers based on input type & returns stringified output
const stringify = (input) => {
  let result = "";
  if (input === null) {
    result += stringifyNull(input);
  } else if (typeof input === "boolean") {
    result += stringifyBoolean(input);
  } else if (typeof input === "number") {
    result += stringifyNumber(input);
  } else if (typeof input === "string") {
    result += stringifystring(input);
  } else if (Array.isArray(input)) {
    result += stringifyArray(input);
  } else if (typeof input === "object") {
    result += stringifyObject(input);
  }
  return result;
};

// returns stringified output for the null input.
const stringifyNull = (value) => {
  let result = "";
  if (value === null) {
     result += `${value}`;
  }
  return result
};

// returns stringified output for a boolean input.
const stringifyBoolean = (value) => {
  let result = "";
  if (typeof value === "boolean") {
    result += `${value}`;
  }
  return result
};

// returns stringified output for number datatype.
const stringifyNumber = (value) => {
  let result = "";
  if (typeof value === "number") {
    result += `${value}`;
  }
  return result;
};

// returns stringified output for "string" datatype.
const stringifystring = (value) => {
  let result = "";
  if (typeof value === "string") {
    result += `"${replacer(value)}"`;
  }
  return result;
};

// returns stringified output for "array" datatype.
const stringifyArray = (value) => {
  let result = "";
  let lastIndex = value.length - 1;
  result += "[";
  for (let i = 0; i < value.length; i++) {
    result += stringify(value[i]);
    if (value[i] !== value[lastIndex]) {
      result += ",";
    }
  }
  result += "]";
  return result;
};

// returns stringified output for "object" datatype.
const stringifyObject = (obj) => {
  let result = "";
  let lastKey = Object.keys(obj).pop();
  result += "{";
  for (let key in obj) {
    const value = obj[key];
    result += `"${key}":`;
    result += stringify(value);
    if (key !== lastKey) {
      result += ",";
    }
  }
  result += "}";
  return result;
};

// returns the stringified output for special characters.
const replacer = (string) => {
  let str = "";
  if (typeof string === "string") {
      str += string
      .replace(/[\"]/g, '\\"')
      .replace(/[\b]/g, "\\b")
      .replace(/[\f]/g, "\\f")
      .replace(/[\n]/g, "\\n")
      .replace(/[\r]/g, "\\r")
      .replace(/[\t]/g, "\\t");
  }
  return str;
};


const myStringify = stringify(input);
const jsonStringify = JSON.stringify(input);

console.log("myStringify", myStringify);
console.log(myStringify === jsonStringify ? true : false);
console.log("jsStringify", jsonStringify);

