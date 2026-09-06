let arr = [1, 2, 3, 5, 6];

let n = 6;
let total = n * (n + 1) / 2;

let sum = 0;

for (let num of arr) {
    sum = sum + num;
}

console.log("Missing Number:", total - sum);