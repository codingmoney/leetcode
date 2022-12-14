/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}

 [3,2,4], target = 6

 Hashmap { value : index }
 
 numTofind = target - currentNum

 */
var twoSum = function(nums, target) {
    
  const hashMap = {}
  
  for(let i=0; i<nums.length; i++){
      const num = nums[i]
      const numToFind = target - num
      
      if(hashMap[numToFind]>=0){
          return [hashMap[numToFind], i]
      }else{
          hashMap[num] = i
      }
  }
    
};