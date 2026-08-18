// // WAPJS to check a student has pass or fail or passing marks 35

const prompt=require("prompt-sync")({sigint:true})

let marks= +prompt("Enter your Marks :")

if (marks>=35) {
    console.log("Pass",marks)
} else {
    console.log("Failed !",marks)
}