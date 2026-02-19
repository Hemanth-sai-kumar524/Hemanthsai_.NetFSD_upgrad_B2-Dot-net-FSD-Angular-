 // Purchaseamount
let amount = 4500;  

let discount = 0;

if (amount >= 5000) {
    //dicount after 20%
    discount = amount * 0.20;
}
else if (amount >= 3000) {
    //discount after 10%
    discount = amount * 0.10;
}
else {
    //No discount
    discount = 0;
}

let finalAmount=amount- discount;

console.log("Purchase Amount: " + amount);
console.log("Discount: " + discount);
console.log("Final Payable Amount: " + finalAmount);
