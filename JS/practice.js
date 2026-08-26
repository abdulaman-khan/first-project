let prompt = require("prompt-sync")({ sigint: true });

let n = parseInt(prompt("Enter the Object value: "));

let states = [];

for (let i = 0; i < n; i++) {
    let state = prompt("Enter State Name: ");
    let capital = prompt("Enter Capital Name: ");

    states.push({
        state: state,
        capital: capital
    });
}

console.table(states);

for (let i = 0; i < states.length; i++) {
    console.log(`${states[i].state} : ${states[i].capital}`);
}