const grid = [
  [0, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 1],
  [0, 1, 0, 0],
];

const visited: Set<string> = new Set();

const ROWS = grid.length;
const COLS = grid[0].length;

function matrixDFS(
  grid: number[][],
  row: number,
  column: number,
  visited: Set<string>,
) {
  if (
    Math.min(row, column) < 0 ||
    row === ROWS ||
    column === COLS ||
    visited.has([row, column].join(",")) ||
    grid[row][column] === 1
  )
    return 0;

  if (row === ROWS - 1 && column === COLS - 1) return 1;

  visited.add([row, column].join(","));

  let count = 0;

  count += matrixDFS(grid, row + 1, column, visited);
  count += matrixDFS(grid, row - 1, column, visited);
  count += matrixDFS(grid, row, column + 1, visited);
  count += matrixDFS(grid, row, column - 1, visited);

  visited.delete([row, column].join(","));

  return count;
}

console.log(matrixDFS(grid, 0, 0, visited));
