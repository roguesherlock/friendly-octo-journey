/**
 *  Craking the Coding Interview:
 *
 *  [1.7] Rotate Matrix: Given an image represented by an NxN matrix,
 *  where each pixel in the image is 4 bytes, write a method to rotate
 *  the image by 90 degrees. Can you do this in place?
 *  Hints:#51, #100
 */

const Matrix = require('../../Data Structures/Matrix.js');

/**
 * rotateMatrix
 * @param {array} matrix an NxN matrix
 * @return {aray} matrix rotated 90 degrees
 * @description rotate a given matrix by
 * 90 degrees
 */
function rotateMatrix(matrix) {
    let mLen = matrix.length;

    /* some error checking */
    if (mLen == 0) {
        return null;
    }

    /* we're expecting NxN matrix */
    let newMatrix = Matrix.createMatrix(mLen, mLen);

    for (let i = 0; i < mLen; ++i) {
        if (mLen != matrix[i].length) {
            return null;
        }
        for (let j = 0; j < mLen; ++j) {
            newMatrix[i][j] = matrix[mLen - 1 - j][i];
        }
    }
    return newMatrix;
}

let m = Matrix.createMatrix(4, 4);
let n = Matrix.createMatrix(4, 4);
m[0] = [1, 2, 3, 4];
m[1] = [5, 6, 7, 8];
m[2] = [9, 10, 11, 12];
m[3] = [13, 14, 15, 16];

n[0] = [13, 9, 5, 1];
n[1] = [14, 10, 6, 2];
n[2] = [15, 11, 7, 3];
n[3] = [16, 12, 8, 4];
let o = rotateMatrix(m);
console.log(Matrix.checkMatrices(n, o));
