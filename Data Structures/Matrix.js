/**
 * Matrix
 * @author akash
 * @description this very premature module
 * exposes some of the functionality to create as well as
 * perform some operations on matrix
 *
 */

/**
 * createMatrix
 * @param {number} n row
 * @param {number} m cloumns
 * @return {array} an NxM matrix
 * @description creates an NxM matrix
 */
exports.createMatrix = function createMatrix(n, m) {
    let matrix = [];
    for (let i = 0; i < n; ++i) {
        matrix.push(new Array(m));
    }
    return matrix;
};

/**
 * fillMatrix
 * @param {array} matrix an NxM matrix
 * @param {number} max integer
 * @return {array} matrix filled with random
 * values
 * @description fills matrix with random
 * values between 0 and max
 */
exports.fillMatrix = function fillMatrix(matrix, max) {
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
};

/**
 * checkMatrices
 * @param {array} matrix1
 * @param {array} matrix2
 * @return {boolean} are matrices equal
 * @description checks if two matrices are equal
 * or not
 */
exports.checkMatrices = function checkMatrices(matrix1, matrix2) {
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
};
