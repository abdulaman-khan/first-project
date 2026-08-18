// WAPJS to check the number is even or odd

const prompt=require("prompt-sync")({sigint:true})

let n= +prompt("Enter the number :")
if (n%2==0) {
    console.log("Its Even ",n)
} else {
    console.log("Its Odd",n)
}