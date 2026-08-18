// // WAPJS to check largest number in 3 variable

const prompt=require("prompt-sync")({sigint:true})

let a= +prompt("Enter First Number:")
let b= +prompt("Enter First Number:")
let c= +prompt("Enter First Number:")

if(a>b && a>c){
    console.log(" first number is Greater ",a)
}
else if( b>c){
    console.log(" Second number is Greater ",b)
}
else{
    console.log(" Third number is Greater ",c)
}
