// inputs : an intezer number that will represent the row
// oupputs: should be print the inputs number of staircase "*" ;

function spaces(spc) {
  if (spc === 0) {
    return "";
  }
  return " " + spaces(spc - 1);
}

function stars(str) {
  if (str === 0) {
    return "";
  }
  return "*" + stars(str - 1);
}

function makeStarCase(num, spc, str) {
  if (num === 0) {
    return;
  }
  console.log(spaces(spc) + stars(str));
  makeStarCase(num - 1, spc - 1, str + 2);
}

function staircase(number) {
  // we will put 3 agurments in the makeStarCase
  // number =>> which will be specified the number of times stairs will be printed in the screen
  // (number -1 ) ==>> the second arguments will specify the number of space that will be printed, which starts with given inputs
  // collumn -1 ;
  // 1 => the third arguments will specify the number of stars that will be printed in the screen , which will starts with 1
  // the every time will be incremented by 1;

  return makeStarCase(number, number - 1, 1);
}

staircase(5);

// the key idea here is that
// when a new stair will start created then a space will be decremented and a star will be incremented
