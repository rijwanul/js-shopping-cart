//Cart item 1 - decrease quantity
const decreaseQuantity = document.getElementById('decreaseQuantity1');
decreaseQuantity.addEventListener('click', function () {
    startCalculation(1, -1);
});

//Cart item 1 - input field
const body = document.getElementById('body');
body.addEventListener('click', function(){
    const inputField = document.getElementById('currentQuantity1');
    updateProductTotal('currentPrice1','currentQuantity1');
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
        updateProductTotal(itemPrice , itemQuantity);
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
function updateProductTotal(thePrice,theQuantity) {
    const currentPrice = document.getElementById(thePrice);
    theQuantity = document.getElementById(theQuantity);
    const currentQuantity = theQuantity.value;
    var currentQuantityNumber = parseInt(currentQuantity);
    var newPrice = 1219*currentQuantityNumber;
    currentPrice.innerText = newPrice;
}