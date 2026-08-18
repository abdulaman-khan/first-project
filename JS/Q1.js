// WAJSP to check number is positive or negative


const prompt=require("prompt-sync")({sigint:true})

let n= +prompt("Enter the number to check is positive or negative :")
if(n<0){
    console.log("Its Negative",n)
}else{
    console.log("Its Positive",n)
}