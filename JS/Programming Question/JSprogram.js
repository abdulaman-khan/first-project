let personalDetails={
    stdName : "Aman",
    age : 22,
    Mobile_No : 9691364557,
    isActive : true,
    status : "Single",
    gender : "Male",
    dob : "12-08-2004",
    Qualification : "B.tech",
}

//1 values() :-

//console.log(Object.values(personalDetails))

//2 keys() :
//3 entries() :- returns array of all keys amd value of object

let items=Object.entries(personalDetails)
//console.log(items)

// 4 assign() :-

let addres ={
    permanent : "Gwalior Madhya Pradesh",
    temporary : "BTM LayOut Bengalore",
    pincode : 560026
}

let res=Object.assign(personalDetails,addres)
//console.log(res)

// 5 Seal() :-
Object.seal(addres)

addres.pincode="Madhya Pradesh"

console.log(addres)


delete addres.pincode
console.log(addres)

// 6 freeze() :-
Object.freeze(addres)
addres.pincode = 560025
console.log(addres)