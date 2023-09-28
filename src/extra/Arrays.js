let alphabets = ["A", "B", "C", "D", "E", "F", "G", "H"];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

bishopMoves = (index, color, OccupiedByBlacksArray, OccupiedByWhitesArray) => {
  console.log(OccupiedByBlacksArray, " ---OccupiedByBlacksArray (bM) --- \n");
  console.log(OccupiedByWhitesArray, " ---OccupiedByWhitesArray (bM) --- \n");

  let column = index.slice(0, 1);

  let row = parseInt(index.slice(1));

  console.log(`${row}  --- row \n `);

  console.log(`${column}  --- column \n `);

  let Color = color === "white" ? "white" : "black";
  let otherColor = color === "white" ? "black" : "white";

  console.log(
    ` ${Color} and ${otherColor} --- Color and otherColor respectively --- \n`
  );

  let accesiblePositions = [];

  if (Color === "white") {
    let i = 1;

    while (alphabets.indexOf(column) + i <= 7 && row + i < 9) {
      if (
        !OccupiedByWhitesArray.includes(
          alphabets[alphabets.indexOf(column) + i] + (row + i).toString()
        ) &&
        !OccupiedByBlacksArray.includes(
          alphabets[alphabets.indexOf(column) + i] + (row + i).toString()
        )
      ) {
        console.log(
          alphabets[alphabets.indexOf(column) + i] + (row + i).toString(),
          " accesiblePositions for bishop thats neither Occupied by black nor white piece --- SE \n"
        );
        accesiblePositions.push(
          alphabets[alphabets.indexOf(column) + i] + (row + i).toString()
        );
        i++;
      }
      else if (
        OccupiedByBlacksArray.includes(
          alphabets[alphabets.indexOf(column) + i] + (row + i).toString()
        )
      ) {
        console.log(
          alphabets[alphabets.indexOf(column) + i] + (row + i).toString(),
          " accesiblePositions for bishop thats currently Occupied by a black piece which can be captured ---- SE \n"
        );
        accesiblePositions.push(
          alphabets[alphabets.indexOf(column) + i] + (row + i).toString()
        );
        break;
      } else {
        break;
      }
    }

    let j = 1;

    while (alphabets.indexOf(column) - j >= 0 && row - j > 0) {
      if (
        !OccupiedByWhitesArray.includes(
          alphabets[alphabets.indexOf(column) - j] + (row - j).toString()
        ) &&
        !OccupiedByBlacksArray.includes(
          alphabets[alphabets.indexOf(column) - j] + (row - j).toString()
        )
      ) {
        console.log(
          alphabets[alphabets.indexOf(column) - j] + (row - j).toString(),
          " accesiblePositions for bishop thats neither Occupied by black nor a white piece -- NW  \n"
        );
        accesiblePositions.push(
          alphabets[alphabets.indexOf(column) - j] + (row - j).toString()
        );
        j++;
      }
      else if (
        OccupiedByBlacksArray.includes(
          alphabets[alphabets.indexOf(column) - j] + (row - j).toString()
        )
      ) {
        console.log(
          alphabets[alphabets.indexOf(column) - j] + (row - j).toString(),
          " accesiblePositions for bishop thats currently Occupied by a black piece which can be captured   -- NW  \n"
        );
        accesiblePositions.push(
          alphabets[alphabets.indexOf(column) - j] + (row - j).toString()
        );
        break;
      } else {
        break;
      }
    }

    let l = 1;

    while (alphabets.indexOf(column) - l >= 0 && row + l < 9) {
      if (
        !OccupiedByWhitesArray.includes(
          alphabets[alphabets.indexOf(column) - l] + (row + l).toString()
        ) &&
        !OccupiedByBlacksArray.includes(
          alphabets[alphabets.indexOf(column) - l] + (row + l).toString()
        )
      ) {
        console.log(
          alphabets[alphabets.indexOf(column) - l] + (row + l).toString(),
          " accesiblePositions for bishop thats neither Occupied by black nor a white piece -- NE  \n"
        );
        accesiblePositions.push(
          alphabets[alphabets.indexOf(column) - l] + (row + l).toString()
        );
        l++;
      }
      else if (
        OccupiedByBlacksArray.includes(
          alphabets[alphabets.indexOf(column) - l] + (row + l).toString()
        )
      ) {
        console.log(
          alphabets[alphabets.indexOf(column) - l] + (row + l).toString(),
          " accesiblePositions for bishop thats currently Occupied by a black piece which can be captured   -- NE  \n"
        );
        accesiblePositions.push(
          alphabets[alphabets.indexOf(column) - l] + (row + l).toString()
        );
        break;
      } else {
        break;
      }
    }

    let m = 1;

    while (alphabets.indexOf(column) + m <= 7 && row - m > 0) {
      if (
        !OccupiedByWhitesArray.includes(
          alphabets[alphabets.indexOf(column) + m] + (row - m).toString()
        ) &&
        !OccupiedByBlacksArray.includes(
          alphabets[alphabets.indexOf(column) + m] + (row - m).toString()
        )
      ) {
        console.log(
          alphabets[alphabets.indexOf(column) + m] + (row - m).toString(),
          " accesiblePositions for bishop thats neither Occupied by black nor a white piece -- SW  \n"
        );
        accesiblePositions.push(
          alphabets[alphabets.indexOf(column) + m] + (row - m).toString()
        );
        m++;
      }
      else if (
        OccupiedByBlacksArray.includes(
          alphabets[alphabets.indexOf(column) + m] + (row - m).toString()
        )
      ) {
        console.log(
          alphabets[alphabets.indexOf(column) + m] + (row - m).toString(),
          " accesiblePositions for bishop thats currently Occupied by a black piece which can be captured   -- SW   \n"
        );
        accesiblePositions.push(
          alphabets[alphabets.indexOf(column) + m] + (row - m).toString()
        );
        break;
      } else {
        break;
      }
    }

    console.log(
      accesiblePositions,
      " accesiblePositions for White bishop after checking the Occupied tiles and modifying the Array --- \n"
    );

    return accesiblePositions;
  }

  if (Color === "black") {
    let i = 1;

    while (alphabets.indexOf(column) + i <= 7 && row + i < 9) {
      if (
        !OccupiedByBlacksArray.includes(
          alphabets[alphabets.indexOf(column) + i] + (row + i).toString()
        ) &&
        !OccupiedByWhitesArray.includes(
          alphabets[alphabets.indexOf(column) + i] + (row + i).toString()
        )
      ) {
        console.log(
          alphabets[alphabets.indexOf(column) + i] + (row + i).toString(),
          " accesiblePositions for bishop thats neither Occupied by black nor a white piece -- SE  \n"
        );
        accesiblePositions.push(
          alphabets[alphabets.indexOf(column) + i] + (row + i).toString()
        );
        i++;
      }
      else if (
        OccupiedByWhitesArray.includes(
          alphabets[alphabets.indexOf(column) + i] + (row + i).toString()
        )
      ) {
        console.log(
          alphabets[alphabets.indexOf(column) + i] + (row + i).toString(),
          " accesiblePositions for bishop thats currently Occupied by a white piece which can be captured   -- SE    \n"
        );
        accesiblePositions.push(
          alphabets[alphabets.indexOf(column) + i] + (row + i).toString()
        );
        break;
      } else {
        break;
      }
    }

    let j = 1;

    while (alphabets.indexOf(column) - j >= 0 && row - j > 0) {
      if (
        !OccupiedByBlacksArray.includes(
          alphabets[alphabets.indexOf(column) - j] + (row - j).toString()
        ) &&
        !OccupiedByWhitesArray.includes(
          alphabets[alphabets.indexOf(column) - j] + (row - j).toString()
        )
      ) {
        console.log(
          !OccupiedByBlacksArray.includes(
            alphabets[alphabets.indexOf(column) - j] + (row - j).toString()
          ),
          !OccupiedByWhitesArray.includes(
            alphabets[alphabets.indexOf(column) - j] + (row - j).toString()
          ),
          " brrr --- \n"
        );
        console.log(
          alphabets[alphabets.indexOf(column) - j] + (row - j).toString(),
          " accesiblePositions for bishop thats neither Occupied by white nor black piece -- SW   \n"
        );
        accesiblePositions.push(
          alphabets[alphabets.indexOf(column) - j] + (row - j).toString()
        );
        j++;
      }
      else if (
        OccupiedByWhitesArray.includes(
          alphabets[alphabets.indexOf(column) - j] + (row - j).toString()
        )
      ) {
        console.log(
          alphabets[alphabets.indexOf(column) - j] + (row - j).toString(),
          " accesiblePositions for bishop thats currently Occupied by a white piece which can be captured   -- SW    \n"
        );
        accesiblePositions.push(
          alphabets[alphabets.indexOf(column) - j] + (row - j).toString()
        );
        break;
      } else {
        break;
      }
    }

    let l = 1;

    while (alphabets.indexOf(column) - l >= 0 && row + l < 9) {
      if (
        !OccupiedByBlacksArray.includes(
          alphabets[alphabets.indexOf(column) - l] + (row + l).toString()
        ) &&
        !OccupiedByWhitesArray.includes(
          alphabets[alphabets.indexOf(column) - l] + (row + l).toString()
        )
      ) {
        console.log(
          alphabets[alphabets.indexOf(column) - l] + (row + l).toString(),
          " accesiblePositions for bishop thats neither Occupied by white nor black piece -- NW    \n"
        );
        accesiblePositions.push(
          alphabets[alphabets.indexOf(column) - l] + (row + l).toString()
        );
        l++;
      }
      else if (
        OccupiedByWhitesArray.includes(
          alphabets[alphabets.indexOf(column) - l] + (row + l).toString()
        )
      ) {
        console.log(
          alphabets[alphabets.indexOf(column) - l] + (row + l).toString(),
          " accesiblePositions for bishop thats currently Occupied by a white piece which can be captured   -- NW  \n"
        );
        accesiblePositions.push(
          alphabets[alphabets.indexOf(column) - l] + (row + l).toString()
        );
        break;
      } else {
        break;
      }
    }

    let m = 1;

    while (alphabets.indexOf(column) + m <= 7 && row - m > 0) {
      if (
        !OccupiedByBlacksArray.includes(
          alphabets[alphabets.indexOf(column) + m] + (row - m).toString()
        ) &&
        !OccupiedByWhitesArray.includes(
          alphabets[alphabets.indexOf(column) + m] + (row - m).toString()
        )
      ) {
        console.log(
          alphabets[alphabets.indexOf(column) + m] + (row - m).toString(),
          " accesiblePositions for bishop thats neither Occupied by white nor black piece -- SE     \n"
        );
        accesiblePositions.push(
          alphabets[alphabets.indexOf(column) + m] + (row - m).toString()
        );
        m++;
      }
      else if (
        OccupiedByWhitesArray.includes(
          alphabets[alphabets.indexOf(column) + m] + (row - m).toString()
        )
      ) {
        console.log(
          alphabets[alphabets.indexOf(column) + m] + (row - m).toString(),
          " accesiblePositions for bishop thats currently Occupied by a white piece which can be captured   -- SE   \n"
        );
        accesiblePositions.push(
          alphabets[alphabets.indexOf(column) + m] + (row - m).toString()
        );
        break;
      } else {
        break;
      }
    }

    accesiblePositions = accesiblePositions.filter(
      (element) => !OccupiedByWhitesArray.includes(element)
    );

    console.log(accesiblePositions, " accesiblePositions for Black bishop \n");

    return accesiblePositions;
  }
};

console.log(
  bishopMoves(
    "C1",
    "white",
    [
      "A7",
      "B7",
      "C7",
      "D7",
      "E7",
      "F7",
      "G7",
      "H7",
      "A8",
      "B8",
      "C8",
      "D8",
      "E8",
      "F8",
      "G8",
      "H8",
    ],
    [
      "A1",
      "B1",
      "C1",
      "D1",
      "E1",
      "G1",
      "H1",
      "A2",
      "B2",
      "C2",
      "F2",
      "G2",
      "H2",
      "E4",
      "D3",
      "E2",
    ]
  )
);
