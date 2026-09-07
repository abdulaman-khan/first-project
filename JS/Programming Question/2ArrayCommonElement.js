let arr1 = [10, 20, 30, 40, 50];
let arr2 = [30, 40, 60, 70, 50];

let common = [];

for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
        common.push(arr1[i]);
    }
}

console.log("Common Elements:", common);