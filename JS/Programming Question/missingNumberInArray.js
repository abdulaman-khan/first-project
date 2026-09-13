let arr = [1, 2, 3, 5, 6, 7];

let n = arr.length + 1;
let total = n * (n + 1) / 2;

let sum = 0;

for (let num of arr) {
    sum = sum + num;
}

let missing = total - sum;

console.log("Missing Number:", missing);