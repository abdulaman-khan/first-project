let num = 125;

let ones = [
    "", "One", "Two", "Three", "Four",
    "Five", "Six", "Seven", "Eight", "Nine"
];

let teens = [
    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen",
    "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
];

let tens = [
    "", "", "Twenty", "Thirty", "Forty",
    "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
];

let result = "";

if (num >= 100) {
    result = result + ones[Math.floor(num / 100)] + " Hundred ";
    num = num % 100;
}

if (num >= 20) {
    result = result + tens[Math.floor(num / 10)] + " ";
    num = num % 10;
}

if (num >= 10) {
    result = result + teens[num - 10] + " ";
    num = 0;
}

if (num > 0) {
    result = result + ones[num];
}

console.log(result.trim());