let signal = prompt("Enter traffic signal:");

signal = signal.toLowerCase();

if (signal === "red") {
    console.log("STOP");
}
else if (signal === "yellow") {
    console.log("WAIT");
}
else if (signal === "green") {
    console.log("GO");
}
else {
    console.log("Invalid signal");
}