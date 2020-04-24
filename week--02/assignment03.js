// Assignment 3: Function, Array, and Object

function avg(data){
    var productsArray = data.products;
    var priceArray = [];
    for(var i = 0 ; i<productsArray.length ; i++){
        priceArray[i] = productsArray[i].price;
    }
    var sum = 0;
    for(var j = 0 ; j<priceArray.length ; j++){
        sum += priceArray[j];
    }
    var averagePrice = sum/priceArray.length;
    // alert(averagePrice);
    return averagePrice;
}

avg({
    size:3,
    products:[
        {
            name:"Product 1",
            price:100
        },
        {
            name:"Product 2",
            price:700
        },
        {
            name:"Product 3",
            price:250
        }
    ]
}) ;


/* 
 data: object
   size
   products
    [{}  {}  {}]
*/