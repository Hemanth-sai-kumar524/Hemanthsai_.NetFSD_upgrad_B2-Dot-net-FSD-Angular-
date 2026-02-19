let num = 7;  

//  checking number is positive or negative using ternary operator
let result = (num >= 0) ? "Positive" : "Negative";
console.log("Number is:", result);

// checking whether the number is even or odd
if (num % 2 === 0) {
    console.log("Number is: Even");
} else {
    console.log("Number is: Odd");
}

console.log("Numbers from 1 to", num + ":");

for (let i = 1; i <= num; i++) {
    console.log(i);
}
