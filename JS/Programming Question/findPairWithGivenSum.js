
let arr = [1, 4, 6, 8, 3, 5];
let target = 9;

arr.sort((a, b) => a - b);

let left = 0;
let right = arr.length - 1;

while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === target) {
        console.log(arr[left], arr[right]);
        left++;
        right--;
    }
    else if (sum < target) {
        left++;
    }
    else {
        right--;
    }
}
