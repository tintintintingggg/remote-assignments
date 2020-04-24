// Assignment 1: Function and Array

function max(numbers){
    var maxNumber = numbers[0];
    for(var i = 0 ; i < numbers.length ; i++){
        if(numbers[i] > maxNumber){
            maxNumber = numbers[i];
        }
    }
    return maxNumber;
}

// Assignment 2: Object

function calculate(args){
    let result;
    if(args.op==="+"){
        result=args.n1+args.n2;
    }else if(args.op==="-"){
        result=args.n1-args.n2;
    }else{
        result="Not supported";
    }
    return result;
}

// 第一個方法
calculate({n1:5, n2:6, op:"+"});

// 第二個方法
var arg1 = {
    n1: 10,
    n2: 4,
    op: "-"
};
calculate(arg1);

// 第三個方法
class allArgs {
    constructor(n1, n2, op){
        this.n1 = n1;
        this.n2 = n2;
        this.op = op;
    }
}
var arg2 = new allArgs(6,4,"+");
calculate(arg2);

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

// Assignment 5

function twoSum(nums, target){
    for(var i = 0 ; i<nums.length ; i++){
        var num1 = nums[i];
        for(var j = 0 ; j<nums.length ; j++){
            if(i !== j){
                if(num1 + nums[j] === target){
                    var result = "[ "+[num1, nums[j]]+" ]";
                    return result;
                    break;
                }
            }
        }
    }
}

twoSum([2, 7, 11, 15], 9);