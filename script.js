//Cart item 1 - decrease quantity
const decreaseQuantity = document.getElementById('decreaseQuantity1');
decreaseQuantity.addEventListener('click', function () {
    startCalculation(1, -1);
});

//Cart item 1 - input field
const body = document.getElementById('body');
body.addEventListener('click', function(){
    const inputField = document.getElementById('currentQuantity1');
    console.log (inputField.value);
})

//Cart item 1 - increase quantity
const increaseQuantity = document.getElementById('increaseQuantity1');
increaseQuantity.addEventListener('click', function () {
    startCalculation(1, 1);
});


//Functions Hub
//Star calculation
function startCalculation(serial, positiveNegative) {
    serial = "" + serial;
    itemQuantity = "currentQuantity" + serial;
    itemPrice = "currentPrice" + serial;
    if (parseInt(document.getElementById(itemQuantity).value) > 0 || positiveNegative == 1) {
        quantityFunction(itemQuantity, positiveNegative);
        updateProductTotal(itemPrice, positiveNegative, itemQuantity);
    }
}

//Quantity Function
function quantityFunction(quantitySerial, plusMinus) {
    var theQuantity = document.getElementById(quantitySerial);
    var currentQuantity = theQuantity.value;
    currentQuantityNumber = parseInt(currentQuantity); 
    var newQuantity = currentQuantityNumber + plusMinus;
    theQuantity.value = newQuantity;
}

//change total product price
function updateProductTotal(thePrice, plusMinus, theQuantity) {
    const currentPrice = document.getElementById(thePrice);
    var currentPriceNumber = parseInt(currentPrice.innerText);
    var newPrice = currentPriceNumber + (1219 * plusMinus);
    currentPrice.innerText = newPrice;
}