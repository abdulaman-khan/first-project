let bill = 347;
let paid = 500;

let change = paid - bill;

console.log("Change:", change);

let notes = [500, 200, 100, 50, 20, 10, 5, 2, 1];

for (let note of notes) {
    let count = Math.floor(change / note);

    if (count > 0) {
        console.log(note + " x " + count);

        change = change % note;
    }
}