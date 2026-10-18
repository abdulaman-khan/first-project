const prompt=require("prompt-sync")({sigint:true})


let num= +prompt("Enter the number")
switch (num) {
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monday")
        break;
    case 3:
        console.log("Tuesday")
        break
    default:
        console.log("OPPs! Wrong Choose")
        break;
}