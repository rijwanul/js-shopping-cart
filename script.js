//CART - 1
//Cart item 1 - decrease quantity
const decreaseQuantity = document.getElementById('decreaseQuantity1');
decreaseQuantity.addEventListener('click', function () {
    startCalculation(1, -1, 1219);
});

//Cart item 1 - input field
const body = document.getElementById('body');
body.addEventListener('click', function(){
    updateProductTotal('currentPrice1','currentQuantity1', 1219);
})

//Cart item 1 - increase quantity
const increaseQuantity = document.getElementById('increaseQuantity1');
increaseQuantity.addEventListener('click', function () {
    startCalculation(1, 1, 1219);
});


//CART - 2
//Cart item 2 - decrease quantity
const decreaseQuantity2 = document.getElementById('decreaseQuantity2');
decreaseQuantity2.addEventListener('click', function () {
    startCalculation(2, -1, 59);
});

//Cart item 2 - input field
const body2 = document.getElementById('body');
body2.addEventListener('click', function(){
    updateProductTotal('currentPrice2','currentQuantity2', 59);
})

//Cart item 2 - increase quantity
const increaseQuantity2 = document.getElementById('increaseQuantity2');
increaseQuantity2.addEventListener('click', function () {
    startCalculation(2, 1, 59);
});





//Functions Hub
//Star calculation
function startCalculation(serial, positiveNegative) {
    serial = "" + serial;
    itemQuantity = "currentQuantity" + serial;
    itemPrice = "currentPrice" + serial;
    if (parseInt(document.getElementById(itemQuantity).value) > 0 || positiveNegative == 1) {
        quantityFunction(itemQuantity, positiveNegative);
        updateProductTotal(itemPrice , itemQuantity, productPrice);
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
function updateProductTotal(thePrice,theQuantity, productPrice) {
    const currentPrice = document.getElementById(thePrice);
    theQuantity = document.getElementById(theQuantity);
    const currentQuantity = theQuantity.value;
    var currentQuantityNumber = parseInt(currentQuantity);
    var newPrice = productPrice*currentQuantityNumber;
    currentPrice.innerText = newPrice;
    updateTotal();
}

//Update total
function updateTotal(){
    var product1Price = document.getElementById('currentPrice1').innerText;
    var productPriceNumber1 = parseInt(product1Price);
    var product1Price = document.getElementById('currentPrice2').innerText;
    var productPriceNumber2 = parseInt(product1Price);
    var totalPriceNumber = productPriceNumber1+productPriceNumber2;

    document.getElementById('subtotal').innerHTML = totalPriceNumber;
    var vat = (totalPriceNumber*15)/100;
    document.getElementById('tax').innerHTML = vat;
    var vatTotal = totalPriceNumber+vat;
    document.getElementById('total').innerHTML = vatTotal;
}