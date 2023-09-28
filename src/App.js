import "./App.css";
import React, { useState, useEffect } from "react";
import { kingMoves } from "./functions/kingMoves";
import { knightMoves } from "./functions/knightMoves";
import { bishopMoves } from "./functions/bishopMoves";
import { rookMoves } from "./functions/rookMoves";
import { pawnMoves } from "./functions/pawnMoves";
import { queenMoves } from "./functions/queenMoves";
import { ModalDialogue } from "./components/ModalDialogue";

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
  const [typeOnePiece, setTypeOnePiece] = useState(null);
  const [activeArray, setActiveArray] = useState(occupiedByWhitesArray);
  const [isTileOccupied, setIsTileOccupied] = useState(false);
  const [showModalDialogue , setShowModalDialogue] = useState(false);

  const handleClick = (index) => {
    console.log(`handleClick called at index ${index} --- ➡️ \n`);

    if (!typeOnePiece) {
      let selectedPiece = Pieces.find((obj) => obj.position === index);
      console.log(
        selectedPiece,
        `selectedPiece for moving / capture --- 😎 \n`
      );
      if (!isTileOccupied) {
        setTypeOnePiece(selectedPiece);
      } else {
        setIsTileOccupied(false);
      }
    }

    if (typeOnePiece) {
      let availablePositions = tilesAccesible(
        typeOnePiece.position,
        typeOnePiece.color,
        typeOnePiece.name,
        OccupiedByBlacksArray,
        OccupiedByWhitesArray
      );

      console.log(availablePositions, ` ---availablePositions --- \n`);

      if (Array.isArray(availablePositions)) {
        for (const i of availablePositions) {
          let tile = document.getElementById(`${i}`);

          tile.style.backgroundColor = "rgb(180, 232, 255)";

          let clickHandler = () =>
            someFunction(typeOnePiece, tile, clickHandler, availablePositions);

          tile.addEventListener("click", clickHandler);
        }
      }
    }
  };

  const someFunction = (
    selectedPiece,
    tile,
    clickHandler,
    availablePositions
  ) => {
    console.log(`tile to move to or capture was clicked --- ❌\n`);

    for (const i of availablePositions) {
      let tile = document.getElementById(`${i}`);
      tile.style.backgroundColor = "white";
    }

    let pieceToBeCapturedInfo = Pieces.find((obj) => obj.position === tile.id);
    if (selectedPiece) {
      if (pieceToBeCapturedInfo) {
        console.log(
          pieceToBeCapturedInfo,
          ` --- this piece about to be captured --- 💀☠️👲\n`
        );

        if (selectedPiece.color === "white") {
          setIsTileOccupied(true);
          console.log(`selectedPiece color is white --- \n`);

          let updatedArray = [...Pieces];
          let updatedArray2 = [...OccupiedByWhitesArray];
          let updatedArray3 = [...OccupiedArray];
          let updatedArray4 = [...OccupiedByBlacksArray];

          updatedArray2 = updatedArray2.filter(
            (element) => element !== selectedPiece.position
          );
          updatedArray2.push(tile.id);

          updatedArray3 = updatedArray3.filter(
            (element) => element !== selectedPiece.position
          );
          updatedArray3.push(tile.id);

          updatedArray4 = updatedArray4.filter(
            (element) => element !== tile.id
          );

          //THIS PIECE OF CODE PERMENANTLY DELTES THE CAPTURED PIECE
          updatedArray = updatedArray.filter(
            (element) => element !== pieceToBeCapturedInfo
          ); // returns an array that contains all obj expect the one that about to be captured
          updatedArray = updatedArray.map((element) => {
            if (element === selectedPiece) {
              return {
                ...element,
                position: tile.id,
                movesArray: [...element.movesArray, tile.id],
              };
            } else {
              return element;
            }
          });

          let unclickableTile = false;

          updatedArray4.forEach((element) => {
            let somePiece = updatedArray.find(
              (obj) => obj.position === element
            );

            let kingPosition = updatedArray.find(
              (obj) => obj.id === "WK1"
            ).position;

            let accesiblePositions2 = tilesAccesible(
              somePiece.position,
              somePiece.color,
              somePiece.name,
              updatedArray4,
              updatedArray2
            );

            if (accesiblePositions2.includes(kingPosition)) {
              console.log(`${somePiece.name} at ${somePiece.position} can check your king`);
              unclickableTile = true;
            }
          });

          if (!unclickableTile) {
            setOccupiedByWhitesArray([...updatedArray2]);
            setOccupiedArray([...updatedArray3]);
            setOccupiedByBlacksArray([...updatedArray4]);
            setPieces([...updatedArray]);

            setActiveArray([...OccupiedByBlacksArray]);
            setTypeOnePiece(null);
          }if (unclickableTile) {
            setShowModalDialogue(true);
          }
        } else if (selectedPiece.color === "black") {
          setIsTileOccupied(true);
          console.log(`selectedPiece color is black --- \n`);

          let updatedArray = [...Pieces];
          let updatedArray2 = [...OccupiedByBlacksArray];
          let updatedArray3 = [...OccupiedArray];
          let updatedArray4 = [...OccupiedByWhitesArray];

          updatedArray2 = updatedArray2.filter(
            (element) => element !== selectedPiece.position
          );
          updatedArray2.push(tile.id);

          updatedArray3 = updatedArray3.filter(
            (element) => element !== selectedPiece.position
          );
          updatedArray3.push(tile.id);

          updatedArray4 = updatedArray4.filter(
            (element) => element !== tile.id
          );

          //THIS PIECE OF CODE PERMENANTLY DELTES THE CAPTURED PIECE
          updatedArray = updatedArray.filter(
            (element) => element !== pieceToBeCapturedInfo
          ); // returns an array that contains all obj expect the one that about to be captured
          updatedArray = updatedArray.map((element) => {
            if (element === selectedPiece) {
              return {
                ...element,
                position: tile.id,
                movesArray: [...element.movesArray, tile.id],
              };
            } else {
              return element;
            }
          });

          console.log(
            updatedArray,
            `Pieces after removal of ${JSON.stringify(pieceToBeCapturedInfo)}\n`
          );

          let unclickableTile = false;

          updatedArray4.forEach((element) => {
            let somePiece = updatedArray.find(
              (obj) => obj.position === element
            );

            let kingPosition = updatedArray.find(
              (obj) => obj.id === "BK1"
            ).position;

            let accesiblePositions2 = tilesAccesible(
              somePiece.position,
              somePiece.color,
              somePiece.name,
              updatedArray2,
              updatedArray4
            );

            if (accesiblePositions2.includes(kingPosition)) {
              console.log(
                `${somePiece.name} at ${somePiece.position} can check your king`
              );
              unclickableTile = true;
            }
          });

          if (!unclickableTile) {
            setOccupiedByBlacksArray([...updatedArray2]);
            setOccupiedArray([...updatedArray3]);
            setOccupiedByWhitesArray([...updatedArray4]);
            setPieces([...updatedArray]);

            setActiveArray([...OccupiedByWhitesArray]);
            setTypeOnePiece(null);
          }if (unclickableTile) {
            setShowModalDialogue(true);
          }
        }
      } else {
        let updatedArray = [...Pieces];
        let updatedArray2 = [...OccupiedByWhitesArray];
        let updatedArray3 = [...OccupiedByBlacksArray];
        let updatedArray4 = [...OccupiedArray];

        if (selectedPiece.color === "white") {
          //update Pieces Array ---
          updatedArray = updatedArray.map((element) => {
            if (selectedPiece.position === element.position) {
              return {
                ...element,
                position: tile.id,
                movesArray: [...element.movesArray, tile.id],
              };
            } else {
              return element;
            }
          });

          // updating the OccupiedByWhitesArray Array
          updatedArray2 = updatedArray2.filter(
            (element) => element !== selectedPiece.position
          );
          updatedArray2.push(tile.id);

          // updating the Occupied  Array
          updatedArray4 = updatedArray4.filter(
            (element) => element !== selectedPiece.position
          );
          updatedArray4.push(tile.id);

          let unclickableTile = false;

          updatedArray3.forEach((element) => {
            let somePiece = updatedArray.find(
              (obj) => obj.position === element
            );

            let kingPosition = updatedArray.find(
              (obj) => obj.id === "WK1"
            ).position;

            let accesiblePositions2 = tilesAccesible(
              somePiece.position,
              somePiece.color,
              somePiece.name,
              updatedArray3,
              updatedArray2
            );

            if (accesiblePositions2.includes(kingPosition)) {
              console.log(
                `${somePiece.name} at ${somePiece.position} can check your king`
              );
              unclickableTile = true;
            }
          });

          if (!unclickableTile) {
            setPieces([...updatedArray]);
            setOccupiedByWhitesArray([...updatedArray2]);
            setOccupiedArray([...updatedArray4]);
            setActiveArray([...OccupiedByBlacksArray]);
          }if (unclickableTile) {
            setShowModalDialogue(true);
          }

          
        } else if (selectedPiece.color === "black") {
          //update Pieces Array ---
          updatedArray = updatedArray.map((element) => {
            if (selectedPiece.position === element.position) {
              return {
                ...element,
                position: tile.id,
                movesArray: [...element.movesArray, tile.id],
              };
            } else {
              return element;
            }
          });

          // updating the OccupiedByBlacksArray Array
          updatedArray3 = updatedArray3.filter(
            (element) => element !== selectedPiece.position
          );
          updatedArray3.push(tile.id);

          // updating the Occupied  Array
          updatedArray4 = updatedArray4.filter(
            (element) => element !== selectedPiece.position
          );
          updatedArray4.push(tile.id);

          let unclickableTile = false;

          updatedArray2.forEach((element) => {
            let somePiece = updatedArray.find(
              (obj) => obj.position === element
            );

            let kingPosition = updatedArray.find(
              (obj) => obj.id === "BK1"
            ).position;

            let accesiblePositions2 = tilesAccesible(
              somePiece.position,
              somePiece.color,
              somePiece.name,
              updatedArray3,
              updatedArray2
            );

            if (accesiblePositions2.includes(kingPosition)) {
              console.log(
                `${somePiece.name} at ${somePiece.position} can check your king`
              );
              unclickableTile = true;
            }
          });

          if (!unclickableTile) {
            setPieces([...updatedArray]);
            setOccupiedByBlacksArray([...updatedArray3]);
            setOccupiedArray([...updatedArray4]);
            setActiveArray([...OccupiedByWhitesArray]);
          }

          if (unclickableTile) {
            setShowModalDialogue(true)
          }
        }

        console.log(
          OccupiedByWhitesArray,
          " -OBW- ",
          OccupiedByBlacksArray,
          " -OBB- --- ➡️ \n"
        );
      }
    }

    for (const i of availablePositions) {
      let tile = document.getElementById(`${i}`);

      tile.removeEventListener("click", clickHandler);
    }

    setTypeOnePiece(null);
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
    <div className="app-main">
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
          let isOccupied = activeArray.includes(tile);
          return (
            <div
              className="tile"
              key={tile}
              id={tile}
              onClick={isOccupied ? () => handleClick(tile) : null}
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
      <ModalDialogue
        showModalDialogue={showModalDialogue}
        setShowModalDialogue={setShowModalDialogue}
      ></ModalDialogue>
    </div>
  );
}

export default App;
