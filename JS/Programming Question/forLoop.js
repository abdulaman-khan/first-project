// for loop

const prompt=require("prompt-sync")({sigint:true})

let n=prompt("Enter Number which table :")
// for (let i = 1; i < 11; i++) {
//    // console.log(n,"*",i," = ",n*i)    
// }
let i=1
while(i<11){
    console.log(n,"*",i," = ",n*i) 
    i++
}