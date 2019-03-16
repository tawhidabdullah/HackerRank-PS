/*
 * Complete the simpleArraySum function below.
 */

const array = [14,434,545]; 
function simpleArraySum(ar) {
    /*
     * Write your code here.
     */
    let sumOfArray = 0; 
    for (let i = 0; i < ar.length; i++){
        sumOfArray += ar[i]; 
    }
    return sumOfArray; 

}

simpleArraySum(array); 