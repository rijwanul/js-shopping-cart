//Cart item 1 - decrease quantity
const decreaseQuantity = document.getElementById('decreaseQuantity1');
decreaseQuantity.addEventListener('click', function () {
    quantityFunction('currentQuantity1', -1);

    updateProductTotal('currentPrice1', -1);
});

//Cart item 1 - increase quantity
const increaseQuantity = document.getElementById('increaseQuantity1');
increaseQuantity.addEventListener('click', function () {
    quantityFunction('currentQuantity1', 1);

    updateProductTotal('currentPrice1', 1);
});


//Functions Hub
//Quantity Function
function quantityFunction(quantitySerial, plusMinus) {
    var theQuantity = document.getElementById(quantitySerial);
    var currentQuantity = theQuantity.value;
    currentQuantityNumber = parseInt(currentQuantity);
    if (currentQuantityNumber > 0) {
        var newQuantity = currentQuantityNumber + plusMinus;
        theQuantity.value = newQuantity;
    }
}

//change total product price
function updateProductTotal(thePrice, plusMinus) {
    const currentPrice = document.getElementById(thePrice);
    var currentPriceNumber = parseInt(currentPrice.innerText);
    var newPrice = currentPriceNumber + (1219 * plusMinus);
    currentPrice.innerText = newPrice;
}