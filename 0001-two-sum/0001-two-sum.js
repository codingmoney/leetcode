/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
i 0,1,2
 [3,2,4], target = 6

 Hashmap { value : index }
 {
 3:0,
 2:1,
 
 }
 numTofind = target - currentNum

 */
var twoSum = function(nums, target) {
    const hashMap = {}
    
    for(let i=0; i<nums.length; i++){
        const currentNum = nums[i]
        const numToFind = target - currentNum
        
        if(hashMap[numToFind] >= 0 ){
            return [hashMap[numToFind], i]
        }else{
            hashMap[currentNum] = i
        }
    }
};