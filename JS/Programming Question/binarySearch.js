let arr = [10, 20, 30, 40, 50, 60, 70];
let target = 50;

let low = 0;
let high = arr.length - 1;
let index = -1;

while (low <= high) {

    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
        index = mid;
        break;
    }
    else if (arr[mid] < target) {
        low = mid + 1;
    }
    else {
        high = mid - 1;
    }
}

console.log(index);