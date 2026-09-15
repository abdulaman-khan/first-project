let arr1 = [10, 20, 30, 40];
let arr2 = [20, 30, 50, 60];
let arr3 = [30, 20, 70, 80];

let common = [];

for (let num of arr1) {
    if (arr2.includes(num) && arr3.includes(num)) {
        common.push(num);
    }
}

console.log("Common Elements:", common);