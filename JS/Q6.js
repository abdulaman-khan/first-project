// WAPJS to assign grades based on the marks 
// 90 - 100 = A
// 75 - 89 = B
// 60 - 74 = C
// 35 - 59 = D
// below 35 fail


const prompt = require("prompt-sync")({ sigint: true })

let marks = +prompt("Enter Your Marks: ")

if (marks < 0 || marks > 100) {
    console.log("Invalid Marks")
}
else if (marks >= 90) {
    console.log("Grade A")
}
else if (marks >= 75) {
    console.log("Grade B")
}
else if (marks >= 60) {
    console.log("Grade C")
}
else if (marks >= 35) {
    console.log("Grade D")
}
else {
    console.log("Fail")
}