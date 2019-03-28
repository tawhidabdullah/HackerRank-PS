/*

function divisibleSumPairs(n, k, ar) {
    const results = []; 
    for(let i = 0; i < n; i++){
        for(let j = i+1; j < ar.length; j++){
             if((((ar[i] + ar[j]) % k) === 0) && (ar[i] < ar[j]) ){
                 results.push([ar[i],ar[j]]); 
             }
          
        }
       
   }
  
    // there' is no match then return 'get a life'   
   return results.length; 

}

console.log(divisibleSumPairs(6,3,[1,3,2,6,1,2])); 

*/



// divisible sum with multipule pointers 

function divisibleSumPairs(n, k, ar) {
   let firstPointer = 0; 
    const results = []; 
   for(let secondPointer = firstPointer + 1 ; secondPointer < ar.length; secondPointer++){
    if(((ar[firstPointer] + ar[secondPointer]) % k) === 0 ){
       firstPointer++; 
       ar[firstPointer] = ar[secondPointer];    
    }

   }

   return firstPointer+1; 

}

console.log(divisibleSumPairs(6,3,[1,3,2,6,1,2])); 





/*


I've just spent half an hour looking through this and the parent comments above (which are given some credit for the idea) - it's a really clever solution to the problem, and if you read petreeftime's description above, it covers it pretty well. I found a key to understanding it was to alter the code so that you see the contents of all the relevant variables at each step, and then it became clear how it was working (I'm using Python 3.6, hence the f strings):

def divisibleSumPairs(n, k, ar):
    nums = [0] * k
    count = 0
    for ele in ar:
        modu = ele % k
        print(f"{ele} {modu} {count} {nums} - after modu")
        count += nums[(k - modu) % k]
        print(f"{ele} {modu} {count} {nums} - after count+=")
        nums[modu] += 1
        print(f"{ele} {modu} {count} {nums} - after nums+=")
        print("-----------------------")
    return count
The first step works out the mod value of the current array element - that's really the only thing that matters - a 3 and a 6 will have the same effect as a 3 and a 3 (for a k of 3).

Next step is to increment the counter by the number of possible combinations that yield k mod 0.

The third step adds the current array element to the nums list, which will allow that to be counted towards future possibilities in other steps.

*/
