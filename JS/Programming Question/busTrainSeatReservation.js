let seats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let bookedSeats = [];

let choice = prompt(
    "1. Book Seat\n2. Cancel Seat\n3. Show Seats\n4. Exit"
);

if (choice == 1) {

    let seatNumber = Number(prompt("Enter seat number:"));

    if (!seats.includes(seatNumber)) {
        console.log("Invalid seat number");
    }
    else if (bookedSeats.includes(seatNumber)) {
        console.log("Seat already booked");
    }
    else {
        bookedSeats.push(seatNumber);
        console.log("Seat booked successfully");
    }

}
else if (choice == 2) {

    let seatNumber = Number(prompt("Enter seat number to cancel:"));

    let index = bookedSeats.indexOf(seatNumber);

    if (index === -1) {
        console.log("Seat is not booked");
    }
    else {
        bookedSeats.splice(index, 1);
        console.log("Seat cancelled successfully");
    }

}
else if (choice == 3) {

    console.log("All Seats:", seats);
    console.log("Booked Seats:", bookedSeats);

}
else if (choice == 4) {

    console.log("Thank you!");

}
else {
    console.log("Invalid choice");
}