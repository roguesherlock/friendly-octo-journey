/**
 *  Craking the Coding Interview:
 *
 *  [1.7] Rotate Matrix: Given an image represented by an NxN matrix,
 *  where each pixel in the image is 4 bytes, write a method to rotate
 *  the image by 90 degrees. Can you do this in place?
 *  Hints:#51, #100
 */

/**
 * createMatrix
 * @param {number} n row
 * @param {number} m cloumns
 * @return {array} an NxM matrix
 * @description creates an NxM matrix
 */
function createMatrix(n, m) {
    let matrix = [];
    for (let i = 0; i < n; ++i) {
        matrix.push(new Array(m));
    }
    return matrix;
}

/**
 * fillMatrix
 * @param {array} matrix an NxM matrix
 * @param {number} max integer
 * @return {array} matrix filled with random
 * values
 * @description fills matrix with random
 * values between 0 and max
 */
function fillMatrix(matrix, max) {
    if (matrix.length < 1) {
        return matrix;
    }
    matrix.forEach((row) => {
        /* make sure it's a mtrix after all */
        if (!row instanceof Array) {
            return matrix;
        }
        for (let i = 0; i < row.length; ++i) {
            row[i] = Math.floor(Math.random() * Math.floor(max));
        }
    });
    return matrix;
}

/**
 * checkMatrices
 * @param {array} matrix1
 * @param {array} matrix2
 * @return {boolean} are matrices equal
 * @description checks if two matrices are equal
 * or not
 */
function checkMatrices(matrix1, matrix2) {
    if (matrix1.length != matrix2.length) {
        return false;
    }
    for (let i = 0; i < matrix1.length; ++i) {
        if (matrix1[i].length != matrix2[i].length) {
            return false;
        }
        for (let j = 0; j < matrix1[i].length; ++j) {
            if (matrix1[i][j] != matrix2[i][j]) {
                return false;
            }
        }
    }
    return true;
}

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
    let newMatrix = createMatrix(mLen, mLen);

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

let m = createMatrix(4, 4);
let n = createMatrix(4, 4);
m[0] = [1, 2, 3, 4];
m[1] = [5, 6, 7, 8];
m[2] = [9, 10, 11, 12];
m[3] = [13, 14, 15, 16];

n[0] = [13, 9, 5, 1];
n[1] = [14, 10, 6, 2];
n[2] = [15, 11, 7, 3];
n[3] = [16, 12, 8, 4];
let o = rotateMatrix(m);
console.log(checkMatrices(n, o));
