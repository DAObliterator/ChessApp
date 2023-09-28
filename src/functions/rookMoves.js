let alphabets = ["A", "B", "C", "D", "E", "F", "G", "H"];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

export const rookMoves = (
  index,
  color,
  OccupiedByBlacksArray,
  OccupiedByWhitesArray,
) => {

    console.log(`rookMoves called , less gooo baby \n`);

     console.log(
       OccupiedByBlacksArray,
       " ---OccupiedByBlacksArray (rM) --- \n"
     );
     console.log(
       OccupiedByWhitesArray,
       " ---OccupiedByWhitesArray (rM) --- \n"
     );

  let column = index.slice(0, 1);
  let row = parseInt(index.slice(1));

  console.log(`${row}  --- row \n `);
  console.log(`${column}  --- column \n `);

  let accesiblePositions = [];

  let Color = color === "white" ? "white" : "black";
  let otherColor = color === "white" ? "black" : "white";

  if (color === "white") {
    let i = 1;

    while (alphabets.indexOf(column) + i <= 7) {
      if (
        !OccupiedByWhitesArray.includes(
          alphabets[alphabets.indexOf(column) + i] + row.toString()
        ) &&
        !OccupiedByBlacksArray.includes(
          alphabets[alphabets.indexOf(column) + i] + row.toString()
        )
      ) {
        console.log(
          alphabets[alphabets.indexOf(column) + i] + row.toString(),
          " accesiblePositions for rook thats neither Occupied by a white piece nor a black piece --- E \n"
        );
        accesiblePositions.push(
          alphabets[alphabets.indexOf(column) + i] + row.toString()
        );
        i++;
      }
      if (
        OccupiedByBlacksArray.includes(
          alphabets[alphabets.indexOf(column) + i] + row.toString()
        )
      ) {
        console.log(
          alphabets[alphabets.indexOf(column) + i] + row.toString(),
          " accesiblePositions for rook thats currently Occupied by a black piece but can be captured --- E \n"
        );
        accesiblePositions.push(
          alphabets[alphabets.indexOf(column) + i] + row.toString()
        );
        break;
      } else {
        break;
      }
    }

    let j = 1;
    while (alphabets.indexOf(column) - j >= 0) {
      if (
        !OccupiedByWhitesArray.includes(
          alphabets[alphabets.indexOf(column) - j] + row.toString()
        ) &&
        !OccupiedByBlacksArray.includes(
          alphabets[alphabets.indexOf(column) - j] + row.toString()
        )
      ) {
        console.log(
          alphabets[alphabets.indexOf(column) - j] + row.toString(),
          " accesiblePositions for rook thats neither Occupied by a white piece nor a black piece --- W \n"
        );
        accesiblePositions.push(
          alphabets[alphabets.indexOf(column) - j] + row.toString()
        );
        j++;
      }
      if (
        OccupiedByBlacksArray.includes(
          alphabets[alphabets.indexOf(column) - j] + row.toString()
        )
      ) {
        console.log(
          alphabets[alphabets.indexOf(column) - j] + row.toString(),
          " accesiblePositions for rook thats currently Occupied by a black piece but can be captured --- E \n"
        );
        accesiblePositions.push(
          alphabets[alphabets.indexOf(column) - j] + row.toString()
        );
        break;
      } else {
        break;
      }
    }

    let k = 1;
    while (row + k < 9) {
      if (
        !OccupiedByWhitesArray.includes(column + (row + k).toString()) &&
        !OccupiedByBlacksArray.includes(column + (row + k).toString())
      ) {
        console.log(
          column + (row + k).toString(),
          `tile thats neither Occupied by white nor black piece --- S \n`
        );
        accesiblePositions.push(column + (row + k).toString());
        k++;
      }
      if (OccupiedByBlacksArray.includes(column + (row + k).toString())) {
        accesiblePositions.push(column + (row + k).toString());
        console.log(
          column + (row + k).toString(),
          `Tile that is Occupied by a black piece but can be captured`
        );
        break;
      } else {
        break;
      }
    }

    let l = 1;
    while (row - l > 1) {
      if (
        !OccupiedByWhitesArray.includes(column + (row - l).toString()) &&
        !OccupiedByBlacksArray.includes(column + (row - l).toString())
      ) {
        accesiblePositions.push(column + (row - l).toString());
        console.log(
          column + (row - l).toString(),
          `tile thats neither Occupied by white nor black piece --- N`
        );
        l++;
      }
      if (OccupiedByBlacksArray.includes(column + (row - l).toString())) {
        accesiblePositions.push(column + (row - l).toString());
        console.log(
          column + (row - l).toString(),
          `tile thats Occupied by a black piece which can be captured --- N`
        );
        break;
      } else {
        break;
      }
    }

    console.log(
      accesiblePositions,
      " this is the accesiblePositions for the white rook \n"
    );
    return accesiblePositions;
  }
  if (color === "black") {
    let i = 1;

    while (alphabets.indexOf(column) + i <= 7) {
      if (
        !OccupiedByBlacksArray.includes(
          alphabets[alphabets.indexOf(column) + i] + row.toString()
        ) &&
        !OccupiedByWhitesArray.includes(
          alphabets[alphabets.indexOf(column) + i] + row.toString()
        )
      ) {
        console.log(
          alphabets[alphabets.indexOf(column) + i] + row.toString(),
          " accesiblePositions for rook thats neither Occupied by a white piece nor a black piece --- E \n"
        );
        accesiblePositions.push(
          alphabets[alphabets.indexOf(column) + i] + row.toString()
        );
        i++;
      }
      if (
        OccupiedByWhitesArray.includes(
          alphabets[alphabets.indexOf(column) + i] + row.toString()
        )
      ) {
        console.log(
          alphabets[alphabets.indexOf(column) + i] + row.toString(),
          " accesiblePositions for rook thats currently Occupied by a black piece but can be captured --- E \n"
        );
        accesiblePositions.push(
          alphabets[alphabets.indexOf(column) + i] + row.toString()
        );
        break;
      } else {
        break;
      }
    }

    let j = 1;
    while (alphabets.indexOf(column) - j >= 0) {
      if (
        !OccupiedByBlacksArray.includes(
          alphabets[alphabets.indexOf(column) - j] + row.toString()
        ) &&
        !OccupiedByWhitesArray.includes(
          alphabets[alphabets.indexOf(column) - j] + row.toString()
        )
      ) {
        console.log(
          alphabets[alphabets.indexOf(column) - j] + row.toString(),
          " accesiblePositions for rook thats neither Occupied by a white piece nor a black piece --- W \n"
        );
        accesiblePositions.push(
          alphabets[alphabets.indexOf(column) - j] + row.toString()
        );
        i++;
      }
      if (
        OccupiedByWhitesArray.includes(
          alphabets[alphabets.indexOf(column) - j] + row.toString()
        )
      ) {
        console.log(
          alphabets[alphabets.indexOf(column) - j] + row.toString(),
          " accesiblePositions for rook thats currently Occupied by a black piece but can be captured --- E \n"
        );
        accesiblePositions.push(
          alphabets[alphabets.indexOf(column) - j] + row.toString()
        );
        break;
      } else {
        break;
      }
    }

    let k = 1;
    while (row + k < 9) {
      if (
        !OccupiedByBlacksArray.includes(column + (row + k).toString()) &&
        !OccupiedByWhitesArray.includes(column + (row + k).toString())
      ) {
        accesiblePositions.push(column + (row + k).toString());
        k++;
      }
      if (OccupiedByWhitesArray.includes(column + (row + k).toString())) {
        accesiblePositions.push(column + (row + k).toString());
        break;
      } else {
        break;
      }
    }

    let l = 1;
    while (row - l > 1) {
      if (
        !OccupiedByBlacksArray.includes(column + (row - l).toString()) &&
        !OccupiedByWhitesArray.includes(column + (row - l).toString())
      ) {
        accesiblePositions.push(column + (row - l).toString());
        l++;
      }
      if (OccupiedByWhitesArray.includes(column + (row - l).toString())) {
        accesiblePositions.push(column + (row - l).toString());
        break;
      } else {
        break;
      }
    }

    console.log(
      accesiblePositions,
      " this is the accesiblePositions for the white rook \n"
    );
    return accesiblePositions;
  }
};
