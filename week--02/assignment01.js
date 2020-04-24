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