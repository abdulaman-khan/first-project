// JSON Data to  JSON Object BY USing Parse()

const { json } = require("express/lib/response")


let JSON_Data = `{
    "id" : 1,
    "tittle" : "json data",   
    "category" : "json data to object",
    "price":999,
    "rating":5,
    "stock" :99

}`

// parse():- it converts JSON data into JS object

let JSObject= JSON.parse(JSON_Data)

console.log("JSON Data ", JSON_Data)
console.log("js object ", JSObject)


let personalDetails={
    stdName : "Aman",
    age : 22,
    Mobile_No : 9691364557,
    isActive : true,
    status : "Single",
    gender : "Male",
    dob : "12-08-2004",
    Qualification : "B.tech"
}

// 2 stringify () :- it converts js object to json data

let JSON_Converted =JSON.stringify(personalDetails)

console.log(personalDetails)
console.log(JSON_Converted)
