let str1 = "listen";
let str2 = "silent";

let a = str1.split("").sort().join("");
let b = str2.split("").sort().join("");

if (a === b) {
    console.log("Anagram");
} else {
    console.log("Not Anagram");
}