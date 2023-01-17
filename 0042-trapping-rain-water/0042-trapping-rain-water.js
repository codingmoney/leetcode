/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left =0, right=height.length - 1, maxLeft=0, maxRight=0, water=0 

    while(left<right){
        if(height[left]<height[right]){
            if(maxLeft<height[left]){
                maxLeft = height[left]
            }else{
                water += maxLeft - height[left]
            }
            left++
        }else{
            if(maxRight<height[right]){
                maxRight = height[right]
            }else{
                water+= maxRight - height[right]
            }
            right--
        }
    }

    return water
};