let alphabets = ["A", "B", "C", "D", "E", "F", "G", "H"];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

export const pawnMoves = (
  index,
  color,
  OccupiedByBlacksArray,
  OccupiedByWhitesArray
) => {
  console.log(OccupiedByBlacksArray, " ---OccupiedByBlacksArray (pM) --- \n");
  console.log(OccupiedByWhitesArray, " ---OccupiedByWhitesArray (pM) --- \n");

  let column = index.slice(0, 1);

  let row = parseInt(index.slice(1));

  console.log(`${row}  --- row \n `);

  console.log(`${column}  --- column \n `);

  let accesiblePositions = [];

  let Color = color === "white" ? "white" : "black";
  let otherColor = color === "white" ? "black" : "white";

  if (Color === "white") {
    if (
      !OccupiedByWhitesArray.includes(
        alphabets[alphabets.indexOf(column)] + (row + 1).toString()
      ) &&
      !OccupiedByBlacksArray.includes(
        alphabets[alphabets.indexOf(column)] + (row + 1).toString()
      )
    ) {
      accesiblePositions.push(
        alphabets[alphabets.indexOf(column)] + (row + 1).toString()
      );
    }
    if (
      OccupiedByBlacksArray.includes(
        alphabets[alphabets.indexOf(column) - 1] + (row + 1).toString()
      )
    ) {
      accesiblePositions.push(
        alphabets[alphabets.indexOf(column) - 1] + (row + 1).toString()
      );
    }
    if (
      OccupiedByBlacksArray.includes(
        alphabets[alphabets.indexOf(column) + 1] + (row + 1).toString()
      )
    ) {
      accesiblePositions.push(
        alphabets[alphabets.indexOf(column) + 1] + (row + 1).toString()
      );
    }
    if (
      row === 2 &&
      !OccupiedByWhitesArray.includes(column + (row + 2).toString()) &&
      !OccupiedByBlacksArray.includes(column + (row + 2).toString())
    ) {
      accesiblePositions.push(column + (row + 2).toString());
    }

    console.log(
      accesiblePositions,
      " these are all possible positions if the pawn is moved \n"
    );

    return accesiblePositions;
  }
  if (Color === "black") {
    if (
      !OccupiedByWhitesArray.includes(
        alphabets[alphabets.indexOf(column)] + (row - 1).toString()
      ) &&
      !OccupiedByBlacksArray.includes(
        alphabets[alphabets.indexOf(column)] + (row - 1).toString()
      )
    ) {
      accesiblePositions.push(
        alphabets[alphabets.indexOf(column)] + (row - 1).toString()
      );
    }
    if (
      OccupiedByWhitesArray.includes(
        alphabets[alphabets.indexOf(column) - 1] + (row - 1).toString()
      )
    ) {
      accesiblePositions.push(
        alphabets[alphabets.indexOf(column) - 1] + (row - 1).toString()
      );
    }
    if (
      OccupiedByWhitesArray.includes(
        alphabets[alphabets.indexOf(column) + 1] + (row - 1).toString()
      )
    ) {
      accesiblePositions.push(
        alphabets[alphabets.indexOf(column) + 1] + (row - 1).toString()
      );
    }
    if (
      row === 7 &&
      !OccupiedByWhitesArray.includes(column + (row - 2).toString()) &&
      !OccupiedByBlacksArray.includes(column + (row - 2).toString())
    ) {
      accesiblePositions.push(column + (row - 2).toString());
    }

    console.log(
      accesiblePositions,
      "All possible positions if the pawn is moved \n"
    );

    return accesiblePositions;
  }

  //inlcude en passant
};
