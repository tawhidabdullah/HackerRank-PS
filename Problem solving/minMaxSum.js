function miniMaxSum(arr) {

    const sortedArray = arr.sort((a, b )=> a - b); 
    const minNum = sortedArray[0]; 
    const maxNum = sortedArray[sortedArray.length-1];

   let  minSum = 0;
   let maxSum = 0;
   let maxNumCounter = 0;   
   let minNumCounter = 0;  

   for(let i = 0; i < arr.length; i++){
     if(arr[i] === maxNum && (!maxNumCounter)){
        maxNumCounter++; 
         continue; 
     }
     else minSum += arr[i];  
   } 

   for(let i = 0; i < arr.length; i++){
     if(arr[i] === minNum && (!minNumCounter)){
        minNumCounter++; 
         continue; 
     }
     else  maxSum += arr[i]; 
   } ; 

   return `${minSum} ${maxSum}`
}

console.log(miniMaxSum([5,5,5,5,5])) // 20 , 20