let roman = "XIV";

let values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

let result = 0;

for (let i = 0; i < roman.length; i++) {

    let current = values[roman[i]];
    let next = values[roman[i + 1]];

    if (current < next) {
        result = result - current;
    } else {
        result = result + current;
    }
}

console.log(result);