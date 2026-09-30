let date = "29/02/2024";

let parts = date.split("/");

let day = Number(parts[0]);
let month = Number(parts[1]);
let year = Number(parts[2]);

let valid = true;

// Check month
if (month < 1 || month > 12) {
    valid = false;
}

// Find maximum days in the month
let maxDays;

if (month === 2) {
    // Leap year check
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        maxDays = 29;
    } else {
        maxDays = 28;
    }
}
else if (
    month === 4 ||
    month === 6 ||
    month === 9 ||
    month === 11
) {
    maxDays = 30;
}
else {
    maxDays = 31;
}

// Check day
if (day < 1 || day > maxDays) {
    valid = false;
}

if (valid) {
    console.log("Valid Date");
} else {
    console.log("Invalid Date");
}