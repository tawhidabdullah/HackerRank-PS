const myArray = [ 2, 13, 56, 8, 343 ]; 


const secondNumber = (myarray) => {
const unique = [...new Set(myArray)];
  console.log(unique)
const reverseSorted = unique.sort((a,b) => b-a); 
console.log(reverseSorted)
const second = reverseSorted[1];
return (second)
}

// Print Super cool SecodeNumber 
console.log(secondNumber(myArray))