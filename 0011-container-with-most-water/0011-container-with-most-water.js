/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    //BRUTEFORCE
//     let maxWater = 0;
//     for(let i=0; i<height.length; i++){
//         for(let j=i+1; j<height.length; j++){
//             const length = Math.min(height[i],height[j])
//             const width = j-i
//             const area = length * width
            
//             maxWater = Math.max(area, maxWater)
            
//         }
//     }
    
//     return maxWater;
    
    let left=0, right=height.length-1
    let maxWater = 0
    while(left<right){
        const length = Math.min(height[left],height[right])
            const width = right-left
            const area = length * width
            
            maxWater = Math.max(area, maxWater)
        if(height[left]<height[right]){
            left++
        }else{
            right--
        }
    }
    
    
    return maxWater
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

};