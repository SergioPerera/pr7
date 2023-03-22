/**

Generates a square matrix of the given dimensions in a spiral pattern.
@param dimensions - The number of rows/columns for the square matrix.
@returns The spiral matrix as a two-dimensional array of numbers.
*/
export function getSpiralMatrix(dimensions: number): number[][] {
  const result: number[][] = [];
  // create a new array with the given dimensions
  for (let i = 0; i < dimensions; i++) {
    result.push(new Array(dimensions));
  }
  
  // initialize counters and starting/ending positions
  let counter = 1;
  let startRow = 0;
  let endRow = dimensions - 1;
  let startCol = 0;
  let endCol = dimensions - 1;
  
  // loop through the matrix in a spiral pattern
  while (startRow <= endRow && startCol <= endCol) {
    // fill the top row
    for (let col = startCol; col <= endCol; col++) {
      result[startRow][col] = counter++;
    }
    // fill the right column
    for (let row = startRow + 1; row <= endRow; row++) {
      result[row][endCol] = counter++;
    }
    
    // fill the bottom row
    for (let col = endCol - 1; col >= startCol; col--) {
      result[endRow][col] = counter++;
    }
    
    // fill the left column
    for (let row = endRow - 1; row > startRow; row--) {
      result[row][startCol] = counter++;
    }
    
    // update starting and ending positions for next iteration
    startRow++, endRow--, startCol++, endCol--;
  }
  
  return result;
}
