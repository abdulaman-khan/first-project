let str = "JavaScript is easy to learn";

let result = "";

for (let char of str) {
    if (char !== " ") {
        result += char;
    }
}

console.log(result);