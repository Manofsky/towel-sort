
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix === undefined) return [];
  let stack = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < matrix[i].length; j++) {
        stack.push(matrix[i][j]);
      }
    }
    if (i % 2 !== 0) {
      for (let length = matrix[i].length - 1; length >= 0; length--) {
        stack.push(matrix[i][length]);
      }
    }
  }
  return stack;
}
