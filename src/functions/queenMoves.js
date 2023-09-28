import { rookMoves } from "./rookMoves";
import { bishopMoves } from "./bishopMoves";

let alphabets = ["A", "B", "C", "D", "E", "F", "G", "H"];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

export const queenMoves = (
  index,
  color,
  OccupiedByBlacksArray,
  OccupiedByWhitesArray,
) => {

     console.log(
       OccupiedByBlacksArray,
       " ---OccupiedByBlacksArray (qM) --- \n"
     );
     console.log(
       OccupiedByWhitesArray,
       " ---OccupiedByWhitesArray (qM) --- \n"
     );

  let accesiblePositions = rookMoves(index, color, OccupiedByBlacksArray, OccupiedByWhitesArray);

  accesiblePositions = accesiblePositions.concat(
    bishopMoves(index, color, OccupiedByBlacksArray, OccupiedByWhitesArray)
  );

  console.log(` --- accesiblePositions where the Queen can move ---- \n`);
  return accesiblePositions;
};

//rookMoves

