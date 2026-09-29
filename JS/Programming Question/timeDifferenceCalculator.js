let startHour = 10;
let startMinute = 30;

let endHour = 12;
let endMinute = 45;

// Convert both times into minutes
let startTime = startHour * 60 + startMinute;
let endTime = endHour * 60 + endMinute;

// Find difference
let difference = endTime - startTime;

// Convert minutes back to hours and minutes
let hours = Math.floor(difference / 60);
let minutes = difference % 60;

console.log("Time Difference:", hours + " hours " + minutes + " minutes");