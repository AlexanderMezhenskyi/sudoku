module.exports = function solveSudoku(matrix) {
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix.length; column++) {
      if (matrix[row][column] === 0) {
        const rowIdx = Math.floor(row / 3) * 3;
        const columnIdx = Math.floor(column / 3) * 3;
        const solved = [
          matrix[row][0], matrix[row][1], matrix[row][2], matrix[row][3],
          matrix[row][4], matrix[row][5], matrix[row][6], matrix[row][7], matrix[row][8],
          matrix[0][column], matrix[1][column], matrix[2][column], matrix[3][column],
          matrix[4][column], matrix[5][column], matrix[6][column], matrix[7][column], matrix[8][column],
          matrix[rowIdx][columnIdx], matrix[rowIdx][columnIdx + 1], matrix[rowIdx][columnIdx + 2],
          matrix[rowIdx + 1][columnIdx], matrix[rowIdx + 1][columnIdx + 1], matrix[rowIdx + 1][columnIdx + 2],
          matrix[rowIdx + 2][columnIdx], matrix[rowIdx + 2][columnIdx + 1], matrix[rowIdx + 2][columnIdx + 2]
        ].filter(item => item > 0);

        const options = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(option => solved.indexOf(option) < 0);

        if (options.length > 0) {
          for (let i = 0; i < options.length; i++) {
            matrix[row][column] = options[i];
            const result = solveSudoku(matrix);

            if (result !== false) return result;
          }

          matrix[row][column] = 0;

          return false;
        } else {
          return false;
        }
      }
    }
  }

  return matrix;
}