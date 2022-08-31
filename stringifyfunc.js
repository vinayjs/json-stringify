// // null parser

// const stringifyNull = (value) => {
//     if (value === null) {
//         return `"${value}"`;
//     }
// }

// console.log(stringifyNull(null));

// // boolean parser

// const stringifyBoolean = (value) => {
//     if (value === true) {
//         return `"${true}"`;
//     }
//     else if (value === false) {
//         return `"${false}"`;
//     }
// }
// console.log(stringifyBoolean(true))
// console.log(stringifyBoolean(false))

// // number parser
// const stringifyNumber = (value) => {
//     let result = ""
//     if (typeof value === "number") {
//         result += `${value}`
//     }
//     return result;
// }

// console.log(stringifyNumber(23));

// // string parser

// const stringifystring = (value) => {
//     let result = ""
//     if (typeof value === "string") {
//         result += `"${value}"`
//     }
//     return result;
// }
// console.log(stringifystring("vinay"));

// // array parser

// const stringifyArr = (value) => {
//     let result = "";
//     let lastIndex = value.length - 1;
//     result += "'["
//     for (let i = 0; i < value.length; i++) {
//         if (value[i] === null) {
//             result += `${value[i]}`
//         }
//         else if (value[i] === true) {
//             result += `${true}`
//         }
//         else if (value[i] === false) {
//             result += `${false}`
//         }
//         else if (typeof value[i] === "number") {
//             result += `${value[i]}`
//         }
//         else if (typeof value[i] === "string") {
//             result += `"${value[i]}"`
//         }
//         if (value[i] !== value[lastIndex]) {
//         result += "," 
//         } 
//     }
//     result += "]'"
//     return result;
// }
// console.log(stringifyArr(["vinay", 12, null]))
// console.log(stringifyArr([2, 4, 6, true, "vinay"]))

// // object parser

// const stringifyObject = (obj) => {
//     let result = "";
//     let lastKey = Object.keys(obj).pop()
//     result += "'{";  
//     for (let key in obj) {
//         const value = obj[key];
//         result += `"${key}":`
//         if (value === null) {
//             result += `${value}`
//         }
//         else if (value === true) {
//             result += `${true}`
//         }
//         else if (value === false) {
//             result += `${false}`
//         }
//         else if (typeof value === "number") {
//             result += `${value}`
//         }
//         else if (typeof value === "string") {
//             result += `"${value}"`
//         }
//         else if (typeof value === "object") {
//             result += `${stringifyObject(value)}`
//         }
//         if (key !== lastKey) {
//             result += "," 
//             } 
//     }
//     result += "}'"
//     return result;
// }

// console.log(stringifyObject({ x: true, y: 32, z: 42}));
// console.log(JSON.stringify({ x: true, y: {x :5, y:false}}))
// console.log(JSON.stringify({ x: true, y: 32, z: 42}))


// // // array with object parser

// const stringifyArray = (value) => {
//     let result = "";
//     let lastIndex = value.length - 1;
//     result += "'["
//     for (let i = 0; i < value.length; i++) {
//         if (value[i] === null) {
//             result += `${value[i]}`
//         }
//         else if (value[i] === true) {
//             result += `${true}`
//         }
//         else if (value[i] === false) {
//             result += `${false}`
//         }
//         else if (typeof value[i] === "number") {
//             result += `${value[i]}`
//         }
//         else if (typeof value[i] === "string") {
//             result += `"${value[i]}"`
//         }
//         else if (typeof value[i] === "object") {
//             let output = "";
//             let object = value[i];
//             let lastKey = Object.keys(object).pop()
//             output += "{";  
//             for (let key in object) {
//                 const value = object[key];
//                 output += `"${key}":`
//                 if (value === null) {
//                     output += `${value}`
//                 }
//                 else if (value === true) {
//                     output += `${true}`
//                 }
//                 else if (value === false) {
//                     output += `${false}`
//                 }
//                 else if (typeof value === "number") {
//                     output += `${value}`
//                 }
//                 else if (typeof value === "string") {
//                     output += `"${value}"`
//                 }
//                 else if (typeof value === "object") {
//                     output += `${stringifyObject(value)}`
//                 }
//                 if (key !== lastKey) {
//                     output += "," 
//                 } 
//             }
//             output += "}"
//             result += output;
//         }
//         if (value[i] !== value[lastIndex]) {
//         result += "," 
//         } 
//     }
//     result += "]'"
//     return result;
// }

// console.log(JSON.stringify(["a", 22, { x: null, y: 6 }]));
// console.log(JSON.stringify([1, 2, "ACSD"]))
// console.log(JSON.stringify([1, 2, 3, 4]))
// console.log(JSON.stringify(["VINAY", "adarsh"]))
// console.log(JSON.stringify([true, null, 56]))
// console.log("end")
// console.log(stringifyArray(["a", 22, { x: null, y: 6 }]))
// console.log(stringifyArray([1, 2, "ACSD"]))
// console.log(stringifyArray([1, 2, 3, 4]))
// console.log(stringifyArray(["VINAY", "adarsh"]))
// console.log(stringifyArray([true, null, 56]))


// stringify function

const stringify = (input) => {

    const stringifyNull = (value) => {
        if (value === null) {
            return `"${value}"`;
        }
    }
    const stringifyBoolean = (value) => {
        if (value === true) {
            return `"${true}"`;
        }
        else if (value === false) {
            return `"${false}"`;
        }
    }
    const stringifyNumber = (value) => {
        let result = ""
        if (typeof value === "number") {
            result += `${value}`
        }
        return result;
    }
    const stringifystring = (value) => {
        let result = ""
        if (typeof value === "string") {
            result += `"${value}"`
        }
        return result;
    }
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
    else if (typeof input === "array"){
        result += stringifyArray(input)
    }
    else if (typeof input === "object") {
        result += stringifyObject(input)
    }
    return result;
}

// console.log(JSON.stringify({"apiVersion":"2.0",
// "data":{
//    "updated":"2010-01-07T19:58:42.949Z",
//    "totalItems":800,
//    "startIndex":1,
//    "itemsPerPage":1,
//    "items":[
//        {"id": 2000134987,

//         "uploaded":"2007-06-05T22:07:03.000Z",
//         "updated":"2010-01-07T13:26:50.000Z",
//         "uploader":"GoogleDeveloperDay",
//         "category":"News",
//         "description":"Google Maps API Introduction ...",
//         "tags":[
//            "GDD07","GDD07US","Maps"
//         ],
//         "thumbnail":{
//            "default":"http://i.ytimg.com/vi/hYB0mn5zh2c/default.jpg",
//            "hqDefault":"http://i.ytimg.com/vi/hYB0mn5zh2c/hqdefault.jpg"
//         },
//         "player":{
//            "default":"http://www.youtube.com/watch?vu003dhYB0mn5zh2c"
//         },
//         "content":{
//            "1":"rtsp://v5.cache3.c.youtube.com/CiILENy.../0/0/0/video.3gp",
//            "5":"http://www.youtube.com/v/hYB0mn5zh2c?f...",
//            "6":"rtsp://v1.cache1.c.youtube.com/CiILENy.../0/0/0/video.3gp"
//         },
//         "duration":2840,
//         "aspectRatio":"widescreen",
//         "rating":4.63,
//         "ratingCount":68,
//         "viewCount":220101,
//         "favoriteCount":201,
//         "commentCount":22,
//         "status":{
//            "value":"restricted",
//            "reason":"limitedSyndication"
//         },
//         "accessControl":{
//            "syndicate":"allowed",
//            "commentVote":"allowed",
//            "rate":"allowed",
//            "list":"allowed",
//            "comment":"allowed",
//            "embed":"allowed",
//            "videoRespond":"moderated"
//         }
//        }
//    ]
// }
// }));
// console.log(stringify(null));
// console.log(stringify(true));
// console.log(stringify(32));
// console.log(stringify("vinay", "adarsh"));
// console.log(stringify([1, 2, 3]));
console.log(stringify({"apiVersion":"2.0",
"data":{
   "updated":"2010-01-07T19:58:42.949Z",
   "totalItems":800,
   "startIndex":1,
   "itemsPerPage":1,
   "items":[
       {"id": 2000134987,

        "uploaded":"2007-06-05T22:07:03.000Z",
        "updated":"2010-01-07T13:26:50.000Z",
        "uploader":"GoogleDeveloperDay",
        "category":"News",
        "description":"Google Maps API Introduction ...",
        "tags":[
           "GDD07","GDD07US","Maps"
        ],
        "thumbnail":{
           "default":"http://i.ytimg.com/vi/hYB0mn5zh2c/default.jpg",
           "hqDefault":"http://i.ytimg.com/vi/hYB0mn5zh2c/hqdefault.jpg"
        },
        "player":{
           "default":"http://www.youtube.com/watch?vu003dhYB0mn5zh2c"
        },
        "content":{
           "1":"rtsp://v5.cache3.c.youtube.com/CiILENy.../0/0/0/video.3gp",
           "5":"http://www.youtube.com/v/hYB0mn5zh2c?f...",
           "6":"rtsp://v1.cache1.c.youtube.com/CiILENy.../0/0/0/video.3gp"
        },
        "duration":2840,
        "aspectRatio":"widescreen",
        "rating":4.63,
        "ratingCount":68,
        "viewCount":220101,
        "favoriteCount":201,
        "commentCount":22,
        "status":{
           "value":"restricted",
           "reason":"limitedSyndication"
        },
        "accessControl":{
           "syndicate":"allowed",
           "commentVote":"allowed",
           "rate":"allowed",
           "list":"allowed",
           "comment":"allowed",
           "embed":"allowed",
           "videoRespond":"moderated"
        }
       }
   ]
}
}));
