let totalSeconds = Number(prompt("Enter total seconds:"));

let hours = Math.floor(totalSeconds / 3600);

let remainingSeconds = totalSeconds % 3600;

let minutes = Math.floor(remainingSeconds / 60);

let seconds = remainingSeconds % 60;

if (hours < 10) {
    hours = "0" + hours;
}

if (minutes < 10) {
    minutes = "0" + minutes;
}

if (seconds < 10) {
    seconds = "0" + seconds;
}

console.log(hours + ":" + minutes + ":" + seconds);