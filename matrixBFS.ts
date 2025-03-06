const grid2 = [
  [0, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 1],
  [0, 1, 0, 0],
];

const createIndex = (cell: number[]) => cell.join(",");

function BFS(grid: number[][]) {
  const ROWS = grid.length;
  const COLS = grid[0].length;

  const visited: string[] = [createIndex([0, 0])];
  const queue: string[] = [createIndex([0, 0])];

  let pathLength = 0;

  while (queue.length) {
    for (let i = 0; i < queue.length; i++) {
      const cell = queue.pop();
      if (!cell) break;

      const [row, column] = cell.split(",").map(Number);
      if (row === ROWS - 1 && column === COLS - 1) {
        break;
      }

      const directions: [number, number][] = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
      ];

      for (const [dr, dc] of directions) {
        if (
          Math.min(row + dr, column + dc) < 0 ||
          row + dr === ROWS ||
          column + dc === COLS ||
          visited.some((cell) => {
            const [visitedRow, visitedColumn] = cell.split(",").map(Number);

            return visitedRow === row + dr && visitedColumn === column + dc;
          }) ||
          grid[row + dr][column + dc] === 1
        ) {
          continue;
        }
        visited.push(createIndex([row + dr, column + dc]));
        queue.push(createIndex([row + dr, column + dc]));
      }
    }
    pathLength++;
  }

  return pathLength;
}

console.log(BFS(grid2));
