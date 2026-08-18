// WAPJS to check number is 3 digit or not

const prompt=require("prompt-sync")({sigint:true})

let n= +prompt("Enter Number to Check 3-digit :")
if((n>99 && n<1000) || (n < -99 && n > -1000)){
    console.log("Its triple digit number ",n)
}
else{
    console.log("its not",n)
}
