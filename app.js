
// APPLE_COST, BANANA_COST, COCONUT_COST, cart, and transactions
// are the only global variables that you are allowed to have!

const APPLE_COST = 0.50;
const BANANA_COST = 0.25;
const COCONUT_COST = 2.00;

let cart = {
    apple: 0,
    banana: 0,
    coconut: 0
}

let transactions = [];

/**
 * This function is called whenever the "Add to Cart!" button is clicked.
 * It should first check if the amount, retrieved from input `add-amount`, is a positive number.
 * If it is not, alert the user "Please enter a positive number for an amount."
 * Otherwise, update the corresponding number of apples, bananas, or coconuts
 * (based on what was selected) in the cart.
 */
function addToCart() {
    alert("I should add to the cart!");
}

/**
 * This function is called whenever the "Checkout" button is clicked.
 * It should first check if the cart is empty; if it is, alert the
 * user that "You must have something in your cart to checkout!"
 * Otherwise,  add the transaction to the ongoing list, reset the cart
 * to 0 apples, bananas, and coconuts, and alert the user that 
 * "Checkout complete! Thank you for your purchase.".
 */
function checkout() { 
    alert("I should checkout!");
}

/**
 * This function is called whenever the "Reset Cart" button is clicked.
 * It should reset the cart to 0 apples, bananas, and coconuts.
 */
function resetCart() {
    alert("I should reset the cart!");
}

/**
 * This function is called whenever the "Log Transactions" button is clicked.
 * It should simply console.log the transactions list and alert the
 * user that it has done so saying "Check your console to see the list of transactions!"
 */
function logTransactions() {
    alert("I should log the transactions!");
}

/**
 * This function is completed for you. You can use it as you wish!
 * Updates the text of elements in "Cart Status" based upon the values
 * in the global value "cart".
 */
function updateCart() {
    document.getElementById("shopping-cart-item-apple").innerText = `${cart.apple} apple @ $${APPLE_COST.toFixed(2)}/each`;
    document.getElementById("shopping-cart-item-banana").innerText = `${cart.banana} banana @ $${BANANA_COST.toFixed(2)}/each`;
    document.getElementById("shopping-cart-item-coconut").innerText = `${cart.coconut} coconut @ $${COCONUT_COST.toFixed(2)}/each`;
    
    const total = cart.apple * APPLE_COST + cart.banana * BANANA_COST + cart.coconut * COCONUT_COST;
    document.getElementById("total").innerText = `Your total comes to $${total.toFixed(2)}`;
}
