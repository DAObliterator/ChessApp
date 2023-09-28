let alphabets = ["A", "B", "C", "D", "E", "F", "G", "H"];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

export const kingMoves = (
  index,
  color,
  OccupiedByBlacksArray,
  OccupiedByWhitesArray  
) => {
  //castle check mate conditions needs to be checked

  console.log( OccupiedByBlacksArray , " ---OccupiedByBlacksArray (kM) --- \n");
  console.log(OccupiedByWhitesArray, " ---OccupiedByWhitesArray (kM) --- \n");

  let column = index.slice(0, 1);
  let row = parseInt(index.slice(1));

  console.log(`${row}  --- row \n `);
  console.log(`${column}  --- column \n `);

  let accesiblePositions = [];

  accesiblePositions.push((row + 1).toString() + column);
  console.log((row + 1).toString() + column, "\n");

  accesiblePositions.push(
    (row + 1).toString() + alphabets[alphabets.indexOf(column) - 1]
  );
  console.log(
    (row + 1).toString() + alphabets[alphabets.indexOf(column) - 1],
    "\n"
  );

  accesiblePositions.push(
    (row + 1).toString() + alphabets[alphabets.indexOf(column) + 1]
  );
  console.log(
    (row + 1).toString() + alphabets[alphabets.indexOf(column) + 1],
    "\n"
  );

  accesiblePositions.push((row - 1).toString() + column);
  console.log((row - 1).toString() + column, "\n");

  accesiblePositions.push(
    (row - 1).toString() + alphabets[alphabets.indexOf(column) - 1]
  );
  console.log(
    (row - 1).toString() + alphabets[alphabets.indexOf(column) - 1],
    "\n"
  );

  accesiblePositions.push(
    (row - 1).toString() + alphabets[alphabets.indexOf(column) + 1]
  );
  console.log(
    (row - 1).toString() + alphabets[alphabets.indexOf(column) + 1],
    "\n"
  );

  accesiblePositions.push(
    row.toString() + alphabets[alphabets.indexOf(column) + 1]
  );
  console.log(row.toString() + alphabets[alphabets.indexOf(column) + 1], "\n");

  accesiblePositions.push(
    row.toString() + alphabets[alphabets.indexOf(column) - 1]
  );
  console.log(row.toString() + alphabets[alphabets.indexOf(column) - 1], "\n");

  accesiblePositions = accesiblePositions.map((element) => {
    return element.split("").reverse().join("");
  });

  accesiblePositions = accesiblePositions.filter(
    (element) => element.length === 2
  );

  accesiblePositions = accesiblePositions.filter(
    (element) => parseInt(element.slice(1)) <= 8
  );

  console.log(accesiblePositions, "\n");

  if (color === "white") {
    accesiblePositions = accesiblePositions.filter(
      (element) =>
        OccupiedByBlacksArray.includes(element) ||
        !OccupiedByWhitesArray.includes(element)
    );
  }
  if (color === "black") {
    console.log(" <<< piece is black \n");

    accesiblePositions = accesiblePositions.filter(
      (element) =>
        OccupiedByWhitesArray.includes(element) ||
        !OccupiedByBlacksArray.includes(element)
    );
  }

  console.log(accesiblePositions, "  <<< \n");

  return accesiblePositions;
};
