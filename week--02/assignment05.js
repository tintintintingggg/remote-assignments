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