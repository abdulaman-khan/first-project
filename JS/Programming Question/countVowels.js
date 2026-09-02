
let str = "JavaScript Programming";
let count = 0;
for (let char of str.toLowerCase()) {
    if ("aeiou".includes(char)) {
        count++;
    }
}