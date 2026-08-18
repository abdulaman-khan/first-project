//Login Credentials Program

const prompt = require("prompt-sync")({ sigint: true })

// Create Account
let createUserName = prompt("Create Username: ")
let createPassWord = prompt("Create Password: ")

console.log("\nAccount Created Successfully!")
console.log("Now Let's Login\n")

// Login
let userName = prompt("Enter Username: ")

if (createUserName === userName) {

    let passWord = prompt("Enter Password: ")

    if (createPassWord === passWord) {
        console.log("Login Successful")
    } else {
        console.log("Wrong Password")
    }

} else {
    console.log("Username Does Not Exist")
}