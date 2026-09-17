let password = prompt("Enter your password:");

let score = 0;

if (password.length >= 8) {
    score++;
}

if (/[A-Z]/.test(password)) {
    score++;
}

if (/[a-z]/.test(password)) {
    score++;
}

if (/[0-9]/.test(password)) {
    score++;
}

if (/[^A-Za-z0-9]/.test(password)) {
    score++;
}

if (score <= 2) {
    console.log("Password Strength: Weak");
}
else if (score <= 4) {
    console.log("Password Strength: Medium");
}
else {
    console.log("Password Strength: Strong");
}