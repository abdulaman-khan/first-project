let names = ["Aman", "Rahul", "Abhishek", "Raj", "Mohit"];

let longest = names[0];

for (let name of names) {
    if (name.length > longest.length) {
        longest = name;
    }
}

console.log("Longest Name:", longest);