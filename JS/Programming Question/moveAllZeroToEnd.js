let arr = [0, 5, 0, 3, 8, 0, 2];

let result = [];
let zeros = 0;

for (let num of arr) {
    if (num === 0) {
        zeros++;
    } else {
        result.push(num);
    }
}

for (let i = 0; i < zeros; i++) {
    result.push(0);
}

console.log(result);