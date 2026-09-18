let marks = [95, 82, 76, 68, 91, 55, 73, 88];

let excellent = [];
let veryGood = [];
let good = [];
let average = [];
let needsImprovement = [];

for (let mark of marks) {

    if (mark >= 90) {
        excellent.push(mark);
    }
    else if (mark >= 80) {
        veryGood.push(mark);
    }
    else if (mark >= 70) {
        good.push(mark);
    }
    else if (mark >= 60) {
        average.push(mark);
    }
    else {
        needsImprovement.push(mark);
    }
}

console.log("Excellent:", excellent);
console.log("Very Good:", veryGood);
console.log("Good:", good);
console.log("Average:", average);
console.log("Needs Improvement:", needsImprovement);