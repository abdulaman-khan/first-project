let correctUsername = "admin";
let correctPassword = "admin123";

let attempts = 3;

while (attempts > 0) {

    let username = prompt("Enter username:");
    let password = prompt("Enter password:");

    if (username === correctUsername && password === correctPassword) {
        console.log("Login Successful!");
        break;
    }
    else {
        attempts--;

        if (attempts > 0) {
            console.log("Invalid username or password");
            console.log("Attempts remaining:", attempts);
        }
        else {
            console.log("Account Blocked!");
        }
    }
}