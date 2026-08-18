// const prompt=require("prompt-sync")({sigint:true})

// 3. arrow function
// let a=+prompt("Enter the Number:")
// let b=+prompt("Enter the Number")
// let show=(a,b)=>{
//     console.log(a+b)
// }
// show(a,b);


// // 4 IIFE immediately invoked function expresssion
// ((a,b)=>{
//     console.log(a+b)
// })(a,b)

// 5. higher Ordered Function & 6. call back Function

function display1(){
    console.log("Monday")
}
function display2() {
    console.log("Tuesday")
}
function display3() {
    console.log("Wednesday")
}
display1(display2(display3()))