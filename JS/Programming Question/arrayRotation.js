let arr = [10, 20, 30, 40, 50];
let k = 2;

for (let i = 0; i < k; i++) {
    let first = arr[0];

    for (let j = 0; j < arr.length - 1; j++) {
        arr[j] = arr[j + 1];
    }

    arr[arr.length - 1] = first;
}

console.log("Rotated Array:", arr);