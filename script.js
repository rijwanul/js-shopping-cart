var decreaseQuantity = document.getElementById ('decreaseQuantity1');
decreaseQuantity.addEventListener('click', function(){
    var theQuantity = document.getElementById('currentQuantity1');
    var currentQuantity = theQuantity.value;
    currentQuantityNumber = parseInt(currentQuantity);
    var newQuantity = currentQuantityNumber-1;
    theQuantity.value = newQuantity;
});