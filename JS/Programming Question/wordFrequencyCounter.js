let sentence = prompt("Enter a sentence:");

let words = sentence.toLowerCase().split(" ");

let frequency = {};

for (let word of words) {

    if (frequency[word]) {
        frequency[word]++;
    }
    else {
        frequency[word] = 1;
    }
}

console.log(frequency);