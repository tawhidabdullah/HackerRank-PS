function birthdayCakeCandles(ar) {
    let max = ar[0]; 
    let blowsCandlesCounter = 0; 
      for(let i = 1; i < ar.length; i++){
        if(ar[i] > max){
          max = ar[i]; 
        }
      } 
      for(let i = 0; i < ar.length; i++){
        if(ar[i] === max){
          blowsCandlesCounter++; 
        }
      }
  
      return blowsCandlesCounter; 
  
  }; 
  
  
  
  birthdayCakeCandles([3 ,2 ,1 ,3]); 