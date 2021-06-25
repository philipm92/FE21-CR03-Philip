// Calculate Invoice Function
function calculateInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice) {
     return starterPrice + maindishPrice + dessertPrice + beveragePrice;
 }

var starter_prices = [4.95, 3.99, 3.49, 11.9];
var maindish_prices = [12.99, 8.45, 5.95, 4.29];
var dessert_prices = [1.99, 3.29, 3.95, 4.55];
var beverage_prices = [2.49, 2.49, 2.9, 0.99];

console.log("Your total invoice amount is: " + calculateInvoice(starter_prices[0], maindish_prices[2], dessert_prices[0], beverage_prices[3]));

console.log("Your total invoice amount is: " + calculateInvoice(starter_prices[1], maindish_prices[3], dessert_prices[2], beverage_prices[0]));

console.log("Your total invoice amount is: " + calculateInvoice(starter_prices[3], maindish_prices[1], dessert_prices[1], beverage_prices[2]));
console.log("\n\n\n");

const studentInvoice = function(starterPrice, maindishPrice, dessertPrice, beveragePrice) {
    return (starterPrice*0.9) + (maindishPrice*0.9) + (dessertPrice*0.9) + beveragePrice;
};

console.log("Your total invoice amount as a student is: " + studentInvoice(starter_prices[0], maindish_prices[0], dessert_prices[0], beverage_prices[0]));

console.log("Your total invoice amount with 10% discount is: " + studentInvoice(starter_prices[1], maindish_prices[3], dessert_prices[2], beverage_prices[0]));

console.log("Your total invoice amount as a student is: " + studentInvoice(starter_prices[3], maindish_prices[1], dessert_prices[1], beverage_prices[2]));
