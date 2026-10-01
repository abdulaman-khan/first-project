let month = 2;
let year = 2024;

let days;

if (month === 2) {

    // Leap year check
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        days = 29;
    } else {
        days = 28;
    }

}
else if (
    month === 4 ||
    month === 6 ||
    month === 9 ||
    month === 11
) {
    days = 30;
}
else if (month >= 1 && month <= 12) {
    days = 31;
}
else {
    days = 0;
    console.log("Invalid Month");
}

if (days !== 0) {
    console.log("Number of days:", days);
}