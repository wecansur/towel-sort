
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const result = [];
    
  if(Array.isArray(matrix) && matrix.length) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
             (i % 2 === 0) ? result.push(matrix[i][j]) : result.push(matrix[i][matrix[i].length - j - 1])  
        }
    }
  }
    return result;
}
