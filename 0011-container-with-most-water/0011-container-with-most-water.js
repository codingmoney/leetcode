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

    //Optimal solution
    
    let maxWater = 0, l=0, r=height.length-1
    
    while(l<r){
        
            const area = Math.min(height[l],height[r]) * (r-l)
            
            maxWater = Math.max(area, maxWater)
        
    
        if(height[l]<height[r]){
            l++
        }else{
            r--
        }
    }
    
    
    return maxWater
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
};