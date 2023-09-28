import "./App.css";
import React, { useState, useEffect } from "react";
import { kingMoves } from "./functions/kingMoves";

import { knightMoves } from "./functions/knightMoves";
import { bishopMoves } from "./functions/bishopMoves";

import { rookMoves } from "./functions/rookMoves";
import { pawnMoves } from "./functions/pawnMoves";
import { queenMoves } from "./functions/queenMoves";

function App() {
  let alphabets = ["A", "B", "C", "D", "E", "F", "G", "H"];
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

  let unoccupiedTilesArray = [
    "A3",
    "B3",
    "C3",
    "D3",
    "E3",
    "F3",
    "G3",
    "H3",
    "A4",
    "B4",
    "C4",
    "D4",
    "E4",
    "F4",
    "G4",
    "H4",
    "A5",
    "B5",
    "C5",
    "D5",
    "E5",
    "F5",
    "G5",
    "H5",
    "A6",
    "B6",
    "C6",
    "D6",
    "E6",
    "F6",
    "G6",
    "H6",
  ];

  let occupiedTilesArray = [
    "A1",
    "B1",
    "C1",
    "D1",
    "E1",
    "F1",
    "G1",
    "H1",
    "A2",
    "B2",
    "C2",
    "D2",
    "E2",
    "F2",
    "G2",
    "H2",
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
  ];

  let occupiedByWhitesArray = [
    "A1",
    "B1",
    "C1",
    "D1",
    "E1",
    "F1",
    "G1",
    "H1",
    "A2",
    "B2",
    "C2",
    "D2",
    "E2",
    "F2",
    "G2",
    "H2",
  ];

  let occupiedByBlacksArray = [
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
  ];

  let availableTilesArray = [
    "A1",
    "B1",
    "C1",
    "D1",
    "E1",
    "F1",
    "G1",
    "H1",
    "A2",
    "B2",
    "C2",
    "D2",
    "E2",
    "F2",
    "G2",
    "H2",
    "A3",
    "B3",
    "C3",
    "D3",
    "E3",
    "F3",
    "G3",
    "H3",
    "A4",
    "B4",
    "C4",
    "D4",
    "E4",
    "F4",
    "G4",
    "H4",
    "A5",
    "B5",
    "C5",
    "D5",
    "E5",
    "F5",
    "G5",
    "H5",
    "A6",
    "B6",
    "C6",
    "D6",
    "E6",
    "F6",
    "G6",
    "H6",
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
  ];

  let pieces = [
    // white Pieces
    {
      id: "WK1",
      name: "K",
      color: "white",
      number: 1,
      movesArray: [],
      position: "E1",
      symbol: "♔",
    },
    {
      id: "WQ1",
      name: "Q",
      color: "white",
      number: 1,
      movesArray: [],
      position: "D1",
      symbol: "♕",
    },
    {
      id: "WR1",
      name: "R",
      color: "white",
      number: 1,
      movesArray: [],
      position: "A1",
      symbol: "♖",
    },
    {
      id: "WR2",
      name: "R",
      color: "white",
      number: 2,
      movesArray: [],
      position: "H1",
      symbol: "♖",
    },
    {
      id: "WN1",
      name: "N",
      color: "white",
      number: 1,
      movesArray: [],
      position: "B1",
      symbol: "♘",
    },
    {
      id: "WN2",
      name: "N",
      color: "white",
      number: 2,
      movesArray: [],
      position: "G1",
      symbol: "♘",
    },
    {
      id: "WB1",
      name: "B",
      color: "white",
      number: 1,
      movesArray: [],
      position: "C1",
      symbol: "♗",
    },
    {
      id: "WB2",
      name: "B",
      color: "white",
      number: 2,
      movesArray: [],
      position: "F1",
      symbol: "♗",
    },
    {
      id: "WP1",
      name: "P",
      color: "white",
      number: 1,
      movesArray: [],
      position: "A2",
      symbol: "♙",
    },
    {
      id: "WP2",
      name: "P",
      color: "white",
      number: 2,
      movesArray: [],
      position: "B2",
      symbol: "♙",
    },
    {
      id: "WP3",
      name: "P",
      color: "white",
      number: 3,
      movesArray: [],
      position: "C2",
      symbol: "♙",
    },
    {
      id: "WP4",
      name: "P",
      color: "white",
      number: 4,
      movesArray: [],
      position: "D2",
      symbol: "♙",
    },
    {
      id: "WP5",
      name: "P",
      color: "white",
      number: 5,
      movesArray: [],
      position: "E2",
      symbol: "♙",
    },
    {
      id: "WP6",
      name: "P",
      color: "white",
      number: 6,
      movesArray: [],
      position: "F2",
      symbol: "♙",
    },
    {
      id: "WP7",
      name: "P",
      color: "white",
      number: 7,
      movesArray: [],
      position: "G2",
      symbol: "♙",
    },
    {
      id: "WP8",
      name: "P",
      color: "white",
      number: 8,
      movesArray: [],
      position: "H2",
      symbol: "♙",
    },

    // Black Pieces
    {
      id: "BK1",
      name: "K",
      color: "black",
      number: 1,
      movesArray: [],
      position: "E8",
      symbol: "♚",
    },
    {
      id: "BQ1",
      name: "Q",
      color: "black",
      number: 1,
      movesArray: [],
      position: "D8",
      symbol: "♛",
    },
    {
      id: "BR1",
      name: "R",
      color: "black",
      number: 1,
      movesArray: [],
      position: "A8",
      symbol: "♜",
    },
    {
      id: "BR2",
      name: "R",
      color: "black",
      number: 2,
      movesArray: [],
      position: "H8",
      symbol: "♜",
    },
    {
      id: "BN1",
      name: "N",
      color: "black",
      number: 1,
      movesArray: [],
      position: "B8",
      symbol: "♞",
    },
    {
      id: "BN2",
      name: "N",
      color: "black",
      number: 2,
      movesArray: [],
      position: "G8",
      symbol: "♞",
    },
    {
      id: "BB1",
      name: "B",
      color: "black",
      number: 1,
      movesArray: [],
      position: "C8",
      symbol: "♝",
    },
    {
      id: "BB2",
      name: "B",
      color: "black",
      number: 2,
      movesArray: [],
      position: "F8",
      symbol: "♝",
    },
    {
      id: "BP1",
      name: "P",
      color: "black",
      number: 1,
      movesArray: [],
      position: "A7",
      symbol: "♟",
    },
    {
      id: "BP2",
      name: "P",
      color: "black",
      number: 2,
      movesArray: [],
      position: "B7",
      symbol: "♟",
    },
    {
      id: "BP3",
      name: "P",
      color: "black",
      number: 3,
      movesArray: [],
      position: "C7",
      symbol: "♟",
    },
    {
      id: "BP4",
      name: "P",
      color: "black",
      number: 4,
      movesArray: [],
      position: "D7",
      symbol: "♟",
    },
    {
      id: "BP5",
      name: "P",
      color: "black",
      number: 5,
      movesArray: [],
      position: "E7",
      symbol: "♟",
    },
    {
      id: "BP6",
      name: "P",
      color: "black",
      number: 6,
      movesArray: [],
      position: "F7",
      symbol: "♟",
    },
    {
      id: "BP7",
      name: "P",
      color: "black",
      number: 7,
      movesArray: [],
      position: "G7",
      symbol: "♟",
    },
    {
      id: "BP8",
      name: "P",
      color: "black",
      number: 8,
      movesArray: [],
      position: "H7",
      symbol: "♟",
    },
  ];

  const [Pieces, setPieces] = useState(pieces);
  const [OccupiedByWhitesArray, setOccupiedByWhitesArray] = useState(
    occupiedByWhitesArray
  );
  const [OccupiedByBlacksArray, setOccupiedByBlacksArray] = useState(
    occupiedByBlacksArray
  );
  const [OccupiedArray, setOccupiedArray] = useState([occupiedTilesArray]);

  const handleClick = (index) => {
    console.log(`click event fired , tile ${index} was clicked -- \n`);
    if (
      OccupiedByBlacksArray.includes(index) ||
      OccupiedByWhitesArray.includes(index)
    ) {
      console.log(`This ${index} is currently unoccupied`);

      console.log(`${Pieces} --- \n`);
      let selectedPiece = Pieces.find((obj) => obj.position === index)
        ? Pieces.find((obj) => obj.position === index)
        : null; // this is expected to return an object at all fucking times because Pieces is initialized with an array value

      console.log(`selectedPiece --- ${JSON.stringify(selectedPiece)} \n`);

      if (selectedPiece) {
        let accesiblePositions = tilesAccesible(
          selectedPiece.position,
          selectedPiece.color,
          selectedPiece.name,
          OccupiedByBlacksArray,
          OccupiedByWhitesArray
        );

        console.log(
          accesiblePositions,
          " --- what the tilesAccesible func returns \n"
        );

        if (Array.isArray(accesiblePositions)) {
          for (const j of accesiblePositions) {
            let tile = document.getElementById(`${j}`);

            tile.addEventListener("click", () => {
              let condn = Pieces.find((obj) => obj.position === tile.id);

              for (const k of accesiblePositions) {
                let tile = document.getElementById(`${k}`);
              }

              let updatedArray = [...Pieces];
              let updatedArray2 = [...OccupiedByWhitesArray];
              let updatedArray3 = [...OccupiedByBlacksArray];
              let updatedArray4 = [...OccupiedArray];

              updatedArray = Pieces.map((element) => {
                if (element.position === selectedPiece.position) {
                  return {
                    ...element,
                    position: tile.id,
                    movesArray: [...element.movesArray, tile.id],
                  };
                } else {
                  return element; // Return the unchanged element for other pieces
                }
              });

              if (condn) {
                updatedArray = Pieces.filter(
                  (element) => element.position !== index
                );
              }

              // if its white ---
              if (selectedPiece.color === "white") {
                updatedArray2 = updatedArray2.filter(
                  (element) => element !== selectedPiece.position
                );
                updatedArray2.push(tile.id);

                console.log(updatedArray2, `updatedArray2 ----\n`);

                setOccupiedByWhitesArray([...updatedArray2]);
              }

              // if its black --
              if (selectedPiece.color === "black") {
                updatedArray3 = updatedArray3.filter(
                  (element) => element !== selectedPiece.position
                );
                updatedArray3.push(tile.id);

                console.log(updatedArray3, `updatedArray3 ----\n`);

                setOccupiedByBlacksArray([...updatedArray3]);
                console.log(
                  OccupiedByBlacksArray,
                  " immediately after the button click OBBA \n" // state is not updated here either
                );
              }

              //remove older tile from OccupiedTiles ,and add newer Tiles to OccupiedTiles

              updatedArray4 = updatedArray4.filter(
                (element) => element === selectedPiece.position
              );
              updatedArray4.push(tile.id);

              setOccupiedArray([...updatedArray4]);
              setPieces([...updatedArray]);
            });
          }
        }
      }
    }
  };

  const tilesAccesible = (
    index,
    color,
    name,
    OccupiedByBlacksArray,
    OccupiedByWhitesArray
  ) => {
    switch (name) {
      case "K":
        return kingMoves(
          index,
          color,
          OccupiedByBlacksArray,
          OccupiedByWhitesArray
        );

        break;
      case "Q":
        return queenMoves(
          index,
          color,
          OccupiedByBlacksArray,

          OccupiedByWhitesArray
        );

        break;
      case "R":
        return rookMoves(
          index,
          color,
          OccupiedByBlacksArray,

          OccupiedByWhitesArray
        );

        break;
      case "N":
        return knightMoves(
          index,
          color,
          OccupiedByBlacksArray,

          OccupiedByWhitesArray
        );

        break;
      case "B":
        return bishopMoves(
          index,
          color,
          OccupiedByBlacksArray,

          OccupiedByWhitesArray
        );

        break;
      case "P":
        return pawnMoves(
          index,
          color,
          OccupiedByBlacksArray,

          OccupiedByWhitesArray
        );

        break;
      default:
        break;
    }
  };

  let availableTilesArray1 = [
    "H8",
    "G8",
    "F8",
    "E8",
    "D8",
    "C8",
    "B8",
    "A8",
    "H7",
    "G7",
    "F7",
    "E7",
    "D7",
    "C7",
    "B7",
    "A7",
    "H6",
    "G6",
    "F6",
    "E6",
    "D6",
    "C6",
    "B6",
    "A6",
    "H5",
    "G5",
    "F5",
    "E5",
    "D5",
    "C5",
    "B5",
    "A5",
    "H4",
    "G4",
    "F4",
    "E4",
    "D4",
    "C4",
    "B4",
    "A4",
    "H3",
    "G3",
    "F3",
    "E3",
    "D3",
    "C3",
    "B3",
    "A3",
    "H2",
    "G2",
    "F2",
    "E2",
    "D2",
    "C2",
    "B2",
    "A2",
    "H1",
    "G1",
    "F1",
    "E1",
    "D1",
    "C1",
    "B1",
    "A1",
  ];

  let start = 1;
  let i = 1;

  let newArray1 = [];

  while (start < 9) {
    let newArray2 = [];
    while (i <= 8 * start) {
      newArray2.push(availableTilesArray1[i - 1]);

      if (i === 8 * start) {
        newArray2 = newArray2.reverse();
        newArray1 = newArray1.concat(newArray2);
      }
      i++;
    }

    start++;
  }

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
      {newArray1.map((tile, index) => {
        return (
          <div
            className="tile"
            key={tile}
            id={tile}
            onClick={() => handleClick(tile)}
            style={{
              border: "2px solid black",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {Pieces.find((obj) => obj.position === tile)
              ? Pieces.find((obj) => obj.position === tile)?.symbol
              : null}
          </div>
        );
      })}
    </div>
  );
}

export default App;
