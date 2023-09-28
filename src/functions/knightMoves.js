let alphabets = ["A", "B", "C", "D", "E", "F", "G", "H"];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

export const knightMoves = (
  index,
  color,
  OccupiedByBlacksArray,
  
  OccupiedByWhitesArray,
  
) => {
     console.log(
       OccupiedByBlacksArray,
       " ---OccupiedByBlacksArray (kM) --- \n"
     );
     console.log(
       OccupiedByWhitesArray,
       " ---OccupiedByWhitesArray (kM) --- \n"
     );

  let accesiblePositions = [];

  let column = index.slice(0, 1);

  let row = parseInt(index.slice(1));

  console.log(`${row}  --- row \n `);

  console.log(`${column}  --- column \n `);

  /* c - 1 + r - 2  , c  - 1 + r + 2 , c + 1 + r - 2 , c + 1 + r + 2, 
       r - 1 + c - 2 , r - 1 + c + 2 ,r + 1 + c - 2 , r + 1 + c + 2 ,
    */

  let cond1 =
    alphabets.indexOf(column) - 1 >= 0 && alphabets.indexOf(column) - 1 < 8;
  let cond2 =
    alphabets.indexOf(column) + 1 >= 0 && alphabets.indexOf(column) + 1 < 8;
  let cond3 =
    alphabets.indexOf(column) - 2 >= 0 && alphabets.indexOf(column) - 2 < 8;
  let cond4 =
    alphabets.indexOf(column) + 2 >= 0 && alphabets.indexOf(column) + 2 < 8;
  let cond5 = 0 < row - 1 && row - 1 < 9;
  let cond6 = 0 < row + 1 && row + 1 < 9;
  let cond7 = 0 < row - 2 && row - 2 < 9;
  let cond8 = 0 < row + 2 && row + 2 < 9;

  /*1*/ console.log(
    `  cond 1 --- ${cond1} and cond2 --- ${cond2} and cond3 --- ${cond3} and cond4 --- ${cond4} and cond5 --- ${cond5} and cond6 --- ${cond6} and cond7 --- ${cond7} and cond8 --- ${cond8}`
  );

  if (cond1 && cond7) {
    accesiblePositions.push(
      alphabets[alphabets.indexOf(column) - 1] + (row - 2).toString()
    );
  }
  if (cond1 && cond8) {
    accesiblePositions.push(
      alphabets[alphabets.indexOf(column) - 1] + (row + 2).toString()
    );
  }
  if (cond2 && cond7) {
    accesiblePositions.push(
      alphabets[alphabets.indexOf(column) + 1] + (row - 2).toString()
    );
  }
  if (cond2 && cond8) {
    accesiblePositions.push(
      alphabets[alphabets.indexOf(column) + 1] + (row + 2).toString()
    );
  }
  if (cond5 && cond3) {
    accesiblePositions.push(
      alphabets[alphabets.indexOf(column) - 2] + (row - 1).toString()
    );
  }
  if (cond5 && cond4) {
    accesiblePositions.push(
      alphabets[alphabets.indexOf(column) + 2] + (row - 1).toString()
    );
  }
  if (cond6 && cond3) {
    accesiblePositions.push(
      alphabets[alphabets.indexOf(column) - 2] + (row + 1).toString()
    );
  }
  if (cond6 && cond4) {
    accesiblePositions.push(
      alphabets[alphabets.indexOf(column) + 2] + (row + 1).toString()
    );
  }

  if (color === "white") {
    accesiblePositions = accesiblePositions.filter(
      (element) => !OccupiedByWhitesArray.includes(element)
    );
  }
  if (color === "black") {
    accesiblePositions = accesiblePositions.filter(
      (element) => !OccupiedByBlacksArray.includes(element)
    );
  }

  /*2*/ console.log(
    accesiblePositions,
    " positions where the knight can move --- "
  );
  //if (color === "black") {}

  return accesiblePositions;
};
