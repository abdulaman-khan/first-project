let arr = [100, 4, 200, 1, 3, 2];

let longest = 0;

for (let i = 0; i < arr.length; i++) {

    let current = arr[i];
    let count = 1;

    while (arr.includes(current + 1)) {
        current++;
        count++;
    }

    if (count > longest) {
        longest = count;
    }
}

console.log("Longest Consecutive Sequence:", longest);