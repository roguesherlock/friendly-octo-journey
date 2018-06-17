/**
 *  Craking the Coding Interview:
 *
 *  [1.8] Zero Matrix: Write an algorithm such that if an element
 *  in an MxN matrix is 0, its entire row and column are set to 0.
 *  Hints:#17, #74, #702
 *  Note: Once again, ctci has a better approach. dammit gayle!
 */

const Matrix = require('../../Data Structures/Matrix.js');

/**
 * findRowsAndColumnsToZero
 * @param {array} matrix
 * @return {array} results array containing
 * list of rows and columns to be zeroed
 * @description find rows and columns to be
 * zeroed in NxM matrix
 */
function findRowsAndColumnsToZero(matrix) {
    let results = [];
    results[0] = new Set(); // list of rows to be zeroed
    results[1] = new Set(); // list of columns to be zeroed

    for (let i = 0; i < matrix.length; ++i) {
        for (let j = 0; j < matrix[i].length; ++j) {
            if (matrix[i][j] == 0) {
                results[0].add(i);
                results[1].add(j);
            }
        }
    }
    return results;
}

/**
 * zeroMatrix
 * @param {array} matrix
 * @return {array}
 * @description if an element
 * in MxN matrix is zero, it's
 * entire row and column will
 * be zeroed
 */
function zeroMatrix(matrix) {
    let newMatrix = Matrix.createMatrix(matrix.length, matrix.length);
    let toBeZeroed = findRowsAndColumnsToZero(matrix);
    for (let i = 0; i < matrix.length; ++i) {
        for (let j = 0; j < matrix[i].length; ++j) {
            if (toBeZeroed[0].has(i) ||
                toBeZeroed[1].has(j)) {
                newMatrix[i][j] = 0;
            } else {
                newMatrix[i][j] = matrix[i][j];
            }
        }
    }
    return newMatrix;
}

let m = Matrix.createMatrix(4, 4);
m[0] = [1, 2, 3, 4];
m[1] = [5, 6, 0, 8];
m[2] = [9, 10, 11, 12];
m[3] = [13, 0, 15, 16];

let n = Matrix.createMatrix(4, 4);
n[0] = [1, 0, 0, 4];
n[1] = [0, 0, 0, 0];
n[2] = [9, 0, 0, 12];
n[3] = [0, 0, 0, 0];

let o = zeroMatrix(m);
console.log(Matrix.checkMatrices(n, o));
