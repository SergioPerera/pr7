/**

@brief This function checks if there are two queens on a chess board that can attack each other
@param chess_board A two-dimensional array that represents the chess board
@return Undefined if the chess board is not 8x8 or if there is not a queen of each color. Otherwise, it returns true if the queens can attack each other, false otherwise.
*/
export function checkAttack(chess_board: string[][]): undefined | boolean {
///Check if the table is 8x8
  if (chess_board.length !== 8) {
    return undefined;
  }
  let b_queen: [number, number];
  let w_queen: [number, number];
  
  /// Search for the queens positions
  for (let i = 0; i < chess_board.length; i++) {
    for (let j = 0; j < chess_board[i].length; j++) {
      if (chess_board[i][j] === "B") {
        b_queen = [i, j];
      } 
      else if (chess_board[i][j] === "N") {
        w_queen = [i, j];
      }
      // Stop searching if we have found both queens
      if (b_queen && w_queen) {
        break;
      }
    }
  }
  /// Check if there are a queen of each color
  if (!b_queen || !w_queen) {
    return undefined;
  }
  
  /// First we check the horizontal and vertical positions of the queens
  /// Now we first check the horizontal position
  if (b_queen[0] === w_queen[0]) {
    return true;
  }
  /// Now we check the vertical position
  if (b_queen[1] === w_queen[1]) {
    return true;
  }
  
  /// Now we check the diagonal positions
  return (Math.abs(b_queen[0] - w_queen[0]) === Math.abs(b_queen[1] - w_queen[1]));
}
  
  let chess_board: any = [
  ["-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "N", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "B", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-"]
  ];
