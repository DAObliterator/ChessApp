import "./App.css";

function App() {
  
  const handleClick = (index) => {
    //console.log(` ${index} div was clicked \n`);
    //based on whats clicked return the array of clickable indexes ....
    // function to check if its out of range

    if (
      unoccupiedTilesArray
        .filter((element) => element.includes(index)) // the tile is not currently occupied by any piece
        .includes(true)
    ) {
      console.log(
        unoccupiedTilesArray.map((element) => element.includes(index))
      );
      console.log(`This ${index} is currently unoccupied`);
    } else {
      let ID = pieces.find((obj) => obj.position === index).id;

      let name = pieces.find((obj) => obj.position === index).name;
      let color = pieces.find((obj) => obj.position === index).color;

      console.log(`This ${index} is currently occupied by a piece with ${ID}`);

      switch (name) {
        case "K":
          kingMoves(index, color);
          removeIntersections(color, kingMoves(index, color));
          break;
        case "Q":
          queenMoves(index, color);
          removeIntersections(color, queenMoves(index, color));
          break;
        case "R":
          rookMoves(index, color);
          removeIntersections(color, rookMoves(index, color));
          break;
        case "N":
          knightMoves(index, color);
          removeIntersections(color, knightMoves(index, color));
          break;
        case "B":
          bishopMoves(index, color);
          removeIntersections(color, bishopMoves(index, color));
          break;
        case "P":
          pawnMoves(index, color);
          removeIntersections(color, pawnMoves(index, color));
          break;
        default:
          break;
      }
    }
  };

  const removeIntersections = (color, accesiblePositions) => {
    if (color === "white") {
      console.log(`color inside of removeIntersections is white \n`);
      let intersectionsRemovedArray = accesiblePositions.filter(
        (element) => !occupiedByWhitesArray.includes(element)
      );

      let threatenedPiecesArray = accesiblePositions.filter((element) =>
        occupiedByBlacksArray.includes(element)
      );

      console.log(
        { intersectionsRemovedArray, threatenedPiecesArray },
        " interesectionRemovedArray and threatenedPiecesArray \n"
      );
      return { intersectionsRemovedArray, threatenedPiecesArray };
    } else if (color === "black") {
      console.log(`color inside of removeIntersections is black \n`);
      let intersectionsRemovedArray = accesiblePositions.filter(
        (element) => !occupiedByBlacksArray.includes(element)
      );

      let threatenedPiecesArray = accesiblePositions.filter((element) =>
        occupiedByWhitesArray.includes(element)
      );

      console.log(
        { intersectionsRemovedArray, threatenedPiecesArray },
        " interesectionRemovedArray and threatenedPiecesArray \n"
      );
      return { intersectionsRemovedArray, threatenedPiecesArray };
    }
  };

  let kingMoves = (index, color) => {
    //castle check mate conditions needs to be checked

    let column = index.slice(0, 1);
    let row = parseInt(index.slice(1));

    console.log(`${row}  --- row \n `);
    console.log(`${column}  --- column \n `);

    //accesiblePositions = []
  };

  let queenMoves = (index, color) => {
    let column = index.slice(0, 1);
    let row = parseInt(index.slice(1));

    console.log(`${row}  --- row \n `);
    console.log(`${column}  --- column \n `);

    let accesiblePositions = [];

    let i = 1;
    while (alphabets.indexOf(column) + i <= 7) {
      console.log(
        alphabets[alphabets.indexOf(column) + i] + row.toString(),
        " accesiblePositions for rook \n"
      );
      accesiblePositions.push(
        alphabets[alphabets.indexOf(column) + i] + row.toString()
      );
      i++;
    }

    let j = 1;
    while (alphabets.indexOf(column) - j >= 0) {
      console.log(
        alphabets[alphabets.indexOf(column) - j] + row.toString(),
        " accesiblePositions for rook \n"
      );
      accesiblePositions.push(
        alphabets[alphabets.indexOf(column) - j] + row.toString()
      );
      j++;
    }

    let k = 1;
    while (row + k <= 8) {
      accesiblePositions.push(column + (row + k).toString());
      k++;
    }

    let l = 1;
    while (row - l >= 1) {
      accesiblePositions.push(column + (row - l).toString());
      l++;
    }

    let n = 1;

    while (alphabets.indexOf(column) + n <= 7 && row + n < 8) {
      console.log(
        alphabets[alphabets.indexOf(column) + n] + (row + n).toString(),
        " accesiblePositions for bishop \n"
      );
      accesiblePositions.push(
        alphabets[alphabets.indexOf(column) + n] + (row + n).toString()
      );
      n++;
    }

    let o = 1;

    while (alphabets.indexOf(column) - o >= 0 && row - o > 1) {
      console.log(
        alphabets[alphabets.indexOf(column) - o] + (row - o).toString(),
        " accesiblePositions for bishop \n"
      );
      accesiblePositions.push(
        alphabets[alphabets.indexOf(column) - o] + (row - o).toString()
      );
      o++;
    }

    let p = 1;

    while (alphabets.indexOf(column) - p >= 0 && row + p < 8) {
      console.log(
        alphabets[alphabets.indexOf(column) - p] + (row + p).toString(),
        " accesiblePositions for bishop \n"
      );
      accesiblePositions.push(
        alphabets[alphabets.indexOf(column) - p] + (row + p).toString()
      );
      p++;
    }

    let q = 1;

    while (alphabets.indexOf(column) + q <= 7 && row - q > 1) {
      console.log(
        alphabets[alphabets.indexOf(column) + q] + (row - q).toString(),
        " accesiblePositions for bishop \n"
      );
      accesiblePositions.push(
        alphabets[alphabets.indexOf(column) + q] + (row - q).toString()
      );
      q++;
    }

    console.log(accesiblePositions, " accesiblePositions for queen \n");

    return accesiblePositions;
  };

  let rookMoves = (index, color) => {
    let column = index.slice(0, 1);
    let row = parseInt(index.slice(1));

    console.log(`${row}  --- row \n `);
    console.log(`${column}  --- column \n `);

    let accesiblePositions = [];

    let i = 1;
    while (alphabets.indexOf(column) + i <= 7) {
      console.log(
        alphabets[alphabets.indexOf(column) + i] + row.toString(),
        " accesiblePositions for rook \n"
      );
      accesiblePositions.push(
        alphabets[alphabets.indexOf(column) + i] + row.toString()
      );
      i++;
    }

    let j = 1;
    while (alphabets.indexOf(column) - j >= 0) {
      console.log(
        alphabets[alphabets.indexOf(column) - j] + row.toString(),
        " accesiblePositions for rook \n"
      );
      accesiblePositions.push(
        alphabets[alphabets.indexOf(column) - j] + row.toString()
      );
      j++;
    }

    let k = 1;
    while (row + k <= 8) {
      accesiblePositions.push(column + (row + k).toString());
      k++;
    }

    let l = 1;
    while (row - l >= 1) {
      accesiblePositions.push(column + (row - l).toString());
      l++;
    }

    console.log(
      accesiblePositions,
      " this is the accesiblePositions for rook \n"
    );
    return accesiblePositions;
  };

  //bishopMoves //
  let bishopMoves = (index, color) => {
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

      while (alphabets.indexOf(column) + i <= 7 && row + i < 8) {
        if (
          !occupiedByWhitesArray.includes(
            alphabets[alphabets.indexOf(column) + i] + (row + i).toString()
          ) &&
          !occupiedByBlacksArray.includes(
            alphabets[alphabets.indexOf(column) + i] + (row + i).toString()
          )
        ) {
          console.log(
            alphabets[alphabets.indexOf(column) + i] + (row + i).toString(),
            " accesiblePositions for bishop thats neither occupied by black nor white piece --- SE \n"
          );
          accesiblePositions.push(
            alphabets[alphabets.indexOf(column) + i] + (row + i).toString()
          );
          i++;
        } else if (
          occupiedByBlacksArray.includes(
            alphabets[alphabets.indexOf(column) + i] + (row + i).toString()
          )
        ) {
          console.log(
            alphabets[alphabets.indexOf(column) + i] + (row + i).toString(),
            " accesiblePositions for bishop thats currently occupied by a black piece which can be captured ---- SE \n"
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

      while (alphabets.indexOf(column) - j >= 0 && row - j > 1) {
        if (
          !occupiedByWhitesArray.includes(
            alphabets[alphabets.indexOf(column) - j] + (row - j).toString() &&
              !occupiedByBlacksArray.includes(
                alphabets[alphabets.indexOf(column) - j] + (row - j).toString()
              )
          )
        ) {
          console.log(
            alphabets[alphabets.indexOf(column) - j] + (row - j).toString(),
            " accesiblePositions for bishop thats neither occupied by black nor a white piece -- NW \n"
          );
          accesiblePositions.push(
            alphabets[alphabets.indexOf(column) - j] + (row - j).toString()
          );
          j++;
        } else if (
          occupiedByBlacksArray.includes(
            alphabets[alphabets.indexOf(column) - j] + (row - j).toString()
          )
        ) {
          console.log(
            alphabets[alphabets.indexOf(column) - j] + (row - j).toString(),
            " accesiblePositions for bishop thats currently occupied by a black piece which can be captured   -- NW \n"
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

      while (alphabets.indexOf(column) - l >= 0 && row + l < 8) {
        if (
          !occupiedByWhitesArray.includes(
            alphabets[alphabets.indexOf(column) - l] + (row + l).toString()
          ) &&
          !occupiedByBlacksArray.includes(
            alphabets[alphabets.indexOf(column) - l] + (row + l).toString()
          )
        ) {
          console.log(
            alphabets[alphabets.indexOf(column) - l] + (row + l).toString(),
            " accesiblePositions for bishop thats neither occupied by black nor a white piece -- NE  \n"
          );
          accesiblePositions.push(
            alphabets[alphabets.indexOf(column) - l] + (row + l).toString()
          );
          l++;
        } else if (
          occupiedByBlacksArray.includes(
            alphabets[alphabets.indexOf(column) - l] + (row + l).toString()
          )
        ) {
          console.log(
            alphabets[alphabets.indexOf(column) - l] + (row + l).toString(),
            " accesiblePositions for bishop thats currently occupied by a black piece which can be captured   -- NE  \n"
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

      while (alphabets.indexOf(column) + m <= 7 && row - m > 1) {
        if (
          !occupiedByWhitesArray.includes(
            alphabets[alphabets.indexOf(column) + m] + (row - m).toString()
          ) &&
          !occupiedByBlacksArray.includes(
            alphabets[alphabets.indexOf(column) + m] + (row - m).toString()
          )
        ) {
          console.log(
            alphabets[alphabets.indexOf(column) + m] + (row - m).toString(),
            " accesiblePositions for bishop thats neither occupied by black nor a white piece -- SW  \n"
          );
          accesiblePositions.push(
            alphabets[alphabets.indexOf(column) + m] + (row - m).toString()
          );
          m++;
        } else if (
          occupiedByBlacksArray.includes(
            alphabets[alphabets.indexOf(column) + m] + (row - m).toString()
          )
        ) {
          console.log(
            alphabets[alphabets.indexOf(column) + m] + (row - m).toString(),
            " accesiblePositions for bishop thats currently occupied by a black piece which can be captured   -- SW   \n"
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
        " accesiblePositions for White bishop after checking the occupied tiles and modifying the Array --- \n"
      );

      return accesiblePositions;
    }

    if (Color === "black") {
      let i = 1;

      while (alphabets.indexOf(column) + i <= 7 && row + i < 8) {
        if (
          !occupiedByBlacksArray.includes(
            alphabets[alphabets.indexOf(column) + i] + (row + i).toString()
          ) &&
          !occupiedByWhitesArray.includes(
            alphabets[alphabets.indexOf(column) + i] + (row + i).toString()
          )
        ) {
          console.log(
            alphabets[alphabets.indexOf(column) + i] + (row + i).toString(),
            " accesiblePositions for bishop thats neither occupied by black nor a white piece -- SE  \n"
          );
          accesiblePositions.push(
            alphabets[alphabets.indexOf(column) + i] + (row + i).toString()
          );
          i++;
        } else if (
          occupiedByWhitesArray.includes(
            alphabets[alphabets.indexOf(column) + i] + (row + i).toString()
          )
        ) {
          console.log(
            alphabets[alphabets.indexOf(column) + i] + (row + i).toString(),
            " accesiblePositions for bishop thats currently occupied by a white piece which can be captured   -- SE    \n"
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

      while (alphabets.indexOf(column) - j >= 0 && row - j > 1) {
        if (
          !occupiedByBlacksArray.includes(
            alphabets[alphabets.indexOf(column) - j] + (row - j).toString()
          ) &&
          !occupiedByWhitesArray.includes(
            alphabets[alphabets.indexOf(column) - j] + (row - j).toString()
          )
        ) {
          console.log(
            !occupiedByBlacksArray.includes(
              alphabets[alphabets.indexOf(column) - j] + (row - j).toString()
            ) ,
              !occupiedByWhitesArray.includes(
                alphabets[alphabets.indexOf(column) - j] + (row - j).toString()
              ) , " brrr --- \n"
          );
          console.log(
            alphabets[alphabets.indexOf(column) - j] + (row - j).toString(),
            " accesiblePositions for bishop thats neither occupied by white nor black piece -- SW   \n"
          );
          accesiblePositions.push(
            alphabets[alphabets.indexOf(column) - j] + (row - j).toString()
          );
          j++;
        } else if (
          occupiedByWhitesArray.includes(
            alphabets[alphabets.indexOf(column) - j] + (row - j).toString()
          )
        ) {
          console.log(
            alphabets[alphabets.indexOf(column) - j] + (row - j).toString(),
            " accesiblePositions for bishop thats currently occupied by a white piece which can be captured   -- SW    \n"
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

      while (alphabets.indexOf(column) - l >= 0 && row + l < 8) {
        if (
          !occupiedByBlacksArray.includes(
            alphabets[alphabets.indexOf(column) - l] + (row + l).toString()
          ) &&
          !occupiedByWhitesArray.includes(
            alphabets[alphabets.indexOf(column) - l] + (row + l).toString()
          )
        ) {
          console.log(
            alphabets[alphabets.indexOf(column) - l] + (row + l).toString(),
            " accesiblePositions for bishop thats neither occupied by white nor black piece -- NW    \n"
          );
          accesiblePositions.push(
            alphabets[alphabets.indexOf(column) - l] + (row + l).toString()
          );
          l++;
        } else if (
          occupiedByWhitesArray.includes(
            alphabets[alphabets.indexOf(column) - l] + (row + l).toString()
          )
        ) {
          console.log(
            alphabets[alphabets.indexOf(column) - l] + (row + l).toString(),
            " accesiblePositions for bishop thats currently occupied by a white piece which can be captured   -- NW  \n"
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

      while (alphabets.indexOf(column) + m <= 7 && row - m > 1) {
        if (
          !occupiedByBlacksArray.includes(
            alphabets[alphabets.indexOf(column) + m] + (row - m).toString()
          ) &&
          !occupiedByWhitesArray.includes(
            alphabets[alphabets.indexOf(column) + m] + (row - m).toString()
          )
        ) {
          console.log(
            alphabets[alphabets.indexOf(column) + m] + (row - m).toString(),
            " accesiblePositions for bishop thats neither occupied by white nor black piece -- SE     \n"
          );
          accesiblePositions.push(
            alphabets[alphabets.indexOf(column) + m] + (row - m).toString()
          );
          m++;
        } else if (
          occupiedByWhitesArray.includes(
            alphabets[alphabets.indexOf(column) + m] + (row - m).toString()
          )
        ) {
          console.log(
            alphabets[alphabets.indexOf(column) + m] + (row - m).toString(),
            " accesiblePositions for bishop thats currently occupied by a white piece which can be captured   -- SE   \n"
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
        " accesiblePositions for Black bishop \n"
      );

      return accesiblePositions;
    }
  };

  //knightMoves

  let knightMoves = (index, color) => {
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

    /*2*/ console.log(
      accesiblePositions,
      " positions where the knight can move --- "
    );
    //else if (color === "black") {}

    return accesiblePositions;
  };

  let pawnMoves = (index, color) => {
    let column = index.slice(0, 1);

    let row = parseInt(index.slice(1));

    console.log(`${row}  --- row \n `);

    console.log(`${column}  --- column \n `);

    let accesiblePositions = [];

    let Color = color === "white" ? "white" : "black";
    let otherColor = color === "white" ? "black" : "white";

    if (row === 2) {
      console.log(`This pawn is unmoved  and is in ${row}\n`);

      accesiblePositions.push(
        (row + 1).toString() + alphabets[alphabets.indexOf(column) + 1]
      );
      accesiblePositions.push(
        (row + 1).toString() + alphabets[alphabets.indexOf(column) - 1]
      );
      accesiblePositions.push((row + 1).toString() + column);
      accesiblePositions.push((row + 2).toString() + column);

      accesiblePositions = accesiblePositions.filter(
        (element) => element.includes("undefined") === false
      );

      console.log(
        accesiblePositions,
        " these are all possible positions if the pawn is moved \n"
      );
    } else if (row === 7) {
      console.log(`This pawn is unmoved  and is in ${row}\n`);

      accesiblePositions.push(
        (row - 1).toString() + alphabets[alphabets.indexOf(column) + 1]
      );
      accesiblePositions.push(
        (row - 1).toString() + alphabets[alphabets.indexOf(column) - 1]
      );
      accesiblePositions.push((row - 1).toString() + column);
      accesiblePositions.push((row - 2).toString() + column);

      accesiblePositions = accesiblePositions.filter(
        (element) => element.includes("undefined") === false
      );

      console.log(
        accesiblePositions,
        " these are all possible positions if the pawn is moved \n"
      );
    } else {
      if (color === "white ") {
        accesiblePositions.push(
          (row + 1).toString() + alphabets[alphabets.indexOf(column) + 1]
        );
        accesiblePositions.push(
          (row + 1).toString() + alphabets[alphabets.indexOf(column) - 1]
        );
        accesiblePositions.push((row + 1).toString() + column);

        accesiblePositions = accesiblePositions.filter(
          (element) => element.includes("undefined") === false
        );
      } else if (color === "black ") {
        accesiblePositions.push(
          (row - 1).toString() + alphabets[alphabets.indexOf(column) + 1]
        );
        accesiblePositions.push(
          (row - 1).toString() + alphabets[alphabets.indexOf(column) - 1]
        );
        accesiblePositions.push((row - 1).toString() + column);

        accesiblePositions = accesiblePositions.filter(
          (element) => element.includes("undefined") === false
        );
      }
    }
    console.log(
      accesiblePositions,
      " these are all possible positions if the pawn is moved \n"
    );
    return accesiblePositions;

    //inlcude en passant
  };

  let pieces = [
    // white Pieces
    {
      id: "WK1",
      name: "K",
      color: "white",
      number: 1,
      movesArray: [],
      position: "E1",
    },
    {
      id: "WQ1",
      name: "Q",
      color: "white",
      number: 1,
      movesArray: [],
      position: "D1",
    },
    {
      id: "WR1",
      name: "R",
      color: "white",
      number: 1,
      movesArray: [],
      position: "A1",
    },
    {
      id: "WR2",
      name: "R",
      color: "white",
      number: 2,
      movesArray: [],
      position: "H1",
    },
    {
      id: "WN1",
      name: "N",
      color: "white",
      number: 1,
      movesArray: [],
      position: "B1",
    },
    {
      id: "WN2",
      name: "N",
      color: "white",
      number: 2,
      movesArray: [],
      position: "G1",
    },
    {
      id: "WB1",
      name: "B",
      color: "white",
      number: 1,
      movesArray: [],
      position: "C1",
    },
    {
      id: "WB2",
      name: "B",
      color: "white",
      number: 2,
      movesArray: [],
      position: "F1",
    },
    {
      id: "WP1",
      name: "P",
      color: "white",
      number: 1,
      movesArray: [],
      position: "A2",
    },
    {
      id: "WP2",
      name: "P",
      color: "white",
      number: 2,
      movesArray: [],
      position: "B2",
    },
    {
      id: "WP3",
      name: "P",
      color: "white",
      number: 3,
      movesArray: [],
      position: "C2",
    },
    {
      id: "WP4",
      name: "P",
      color: "white",
      number: 4,
      movesArray: [],
      position: "D2",
    },
    {
      id: "WP5",
      name: "P",
      color: "white",
      number: 5,
      movesArray: [],
      position: "E2",
    },
    {
      id: "WP6",
      name: "P",
      color: "white",
      number: 6,
      movesArray: [],
      position: "F2",
    },
    {
      id: "WP7",
      name: "P",
      color: "white",
      number: 7,
      movesArray: [],
      position: "G2",
    },
    {
      id: "WP8",
      name: "P",
      color: "white",
      number: 8,
      movesArray: [],
      position: "H2",
    },

    // Black Pieces
    {
      id: "BK1",
      name: "K",
      color: "black",
      number: 1,
      movesArray: [],
      position: "E8",
    },
    {
      id: "BQ1",
      name: "Q",
      color: "black",
      number: 1,
      movesArray: [],
      position: "D8",
    },
    {
      id: "BR1",
      name: "R",
      color: "black",
      number: 1,
      movesArray: [],
      position: "A8",
    },
    {
      id: "BR2",
      name: "R",
      color: "black",
      number: 2,
      movesArray: [],
      position: "H8",
    },
    {
      id: "BN1",
      name: "N",
      color: "black",
      number: 1,
      movesArray: [],
      position: "B8",
    },
    {
      id: "BN2",
      name: "N",
      color: "black",
      number: 2,
      movesArray: [],
      position: "G8",
    },
    {
      id: "BB1",
      name: "B",
      color: "black",
      number: 1,
      movesArray: [],
      position: "C8",
    },
    {
      id: "BB2",
      name: "B",
      color: "black",
      number: 2,
      movesArray: [],
      position: "F8",
    },
    {
      id: "BP1",
      name: "P",
      color: "black",
      number: 1,
      movesArray: [],
      position: "A7",
    },
    {
      id: "BP2",
      name: "P",
      color: "black",
      number: 2,
      movesArray: [],
      position: "B7",
    },
    {
      id: "BP3",
      name: "P",
      color: "black",
      number: 3,
      movesArray: [],
      position: "C7",
    },
    {
      id: "BP4",
      name: "P",
      color: "black",
      number: 4,
      movesArray: [],
      position: "D7",
    },
    {
      id: "BP5",
      name: "P",
      color: "black",
      number: 5,
      movesArray: [],
      position: "E7",
    },
    {
      id: "BP6",
      name: "P",
      color: "black",
      number: 6,
      movesArray: [],
      position: "F7",
    },
    {
      id: "BP7",
      name: "P",
      color: "black",
      number: 7,
      movesArray: [],
      position: "G7",
    },
    {
      id: "BP8",
      name: "P",
      color: "black",
      number: 8,
      movesArray: [],
      position: "H7",
    },
    //Add more pieces as needed...
  ];

  let alphabets = ["A", "B", "C", "D", "E", "F", "G", "H"];
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  let unoccupiedTilesArray = [
    ["A3", "B3", "C3", "D3", "E3", "F3", "G3", "H3"],
    ["A4", "B4", "C4", "D4", "E4", "F4", "G4", "H4"],
    ["A5", "B5", "C5", "D5", "E5", "F5", "G5", "H5"],
    ["A6", "B6", "C6", "D6", "E6", "F6", "G6", "H6"],
  ];

  let occupiedTilesArray = [
    ["A1", "B1", "C1", "D1", "E1", "F1", "G1", "H1"],
    ["A2", "B2", "C2", "D2", "E2", "F2", "G2", "H2"],
    ["A7", "B7", "C7", "D7", "E7", "F7", "G7", "H7"],
    ["A8", "B8", "C8", "D8", "E8", "F8", "G8", "H8"],
  ];

  let occupiedByWhitesArray = [
    ["A1", "B1", "C1", "D1", "E1", "F1", "G1", "H1"],
    ["A2", "B2", "C2", "D2", "E2", "F2", "G2", "H2"],
  ];

  let occupiedByBlacksArray = [
    ["A7", "B7", "C7", "D7", "E7", "F7", "G7", "H7"],
    ["A8", "B8", "C8", "D8", "E8", "F8", "G8", "H8"],
  ];

  let availableTilesArray = [
    ["A1", "B1", "C1", "D1", "E1", "F1", "G1", "H1"],
    ["A2", "B2", "C2", "D2", "E2", "F2", "G2", "H2"],
    ["A3", "B3", "C3", "D3", "E3", "F3", "G3", "H3"],
    ["A4", "B4", "C4", "D4", "E4", "F4", "G4", "H4"],
    ["A5", "B5", "C5", "D5", "E5", "F5", "G5", "H5"],
    ["A6", "B6", "C6", "D6", "E6", "F6", "G6", "H6"],
    ["A7", "B7", "C7", "D7", "E7", "F7", "G7", "H7"],
    ["A8", "B8", "C8", "D8", "E8", "F8", "G8", "H8"],
  ];

  return (
    <div
      className="chess-board-main"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(8, 1fr)",
        gridTemplateRows: "repeat(8, 1fr)",
        width: "400px",
        height: "400px",
      }}
    >
      {availableTilesArray.map((element, index) => {
        return element.map((tile, index) => {
          return (
            <div
              className="tile"
              key={tile}
              onClick={() => {
                handleClick(tile);
              }}
            >
              {tile}
            </div>
          );
        });
      })}
    </div>
  );
}

export default App;
