// hard work with no rules
function pageCount(n, p) {
  // SUDO CODE :
  // IF the last number is even then the last page is not printed in the both side
  // ELSE PRINT IN THE BOTH SIDE
  if (p <= 0 || p === 1 || p === n) return 0;
  if (!(n % 2 === 0) && p === n - 1) return 0;

  let endCounter = n % 2 === 0 ? 1 : 0;
  let startCounter = 1;
  let end;
  let temp = n;
  if (endCounter === 1) {
    end = n / 2 + 1;
  } else {
    end = n / 2;
  }

  for (let i = 1; i <= p; i = i + 2) {
    if (p === i + 1 || p === i + 2) {
      break;
    } else startCounter++;
  }

  for (let i = end; i >= 1; i = i - 2) {
    if (p === temp - 1 || p === temp - 2) {
      console.log(n);
      break;
    } else endCounter++;
    temp--;
  }

  console.log(`temp : ${temp}`);

  console.log(`startcounter: ${startCounter} endCounter: ${endCounter}`);

  if (endCounter < startCounter) return endCounter;
  else return startCounter;
}

pageCount(96993, 70030);

//////////// smart work with  rules ////////////////////////

function pageCount(n, p) {
  /*
          n: the number of pages in the book
          p: the page number to turn to
    */

  const pageTurns = Math.floor(p / 2);
  const totalTurns = Math.floor(n / 2);

  /* Returns the total number of page turns it takes to get
    to a page or how many it requires if starting from the back */

  return Math.min(pageTurns, totalTurns - pageTurns);
}
