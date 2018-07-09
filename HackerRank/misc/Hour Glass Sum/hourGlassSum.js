'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin;
});


process.stdin.on('end', (_) => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map((str) => str.replace(/\s*$/, ''));

    main();
});

/**
 *
 * @param {Array} arr
 * @return {Number} max Hour Glass Sum
 * @description solution to hour glass sum problem
 * on hackerrank
 */
function hourglassSum(arr) {
    let maxHourGlassSum;
    for (let i = 0; i < arr.length - 2; ++i) {
        for (let j = 0; j < arr[i].length - 2; ++j) {
            let subArray = [];
            subArray[0] = arr[i].slice(j, j + 3);
            subArray[1] = arr[i + 1].slice(j, j + 3);
            subArray[2] = arr[i + 2].slice(j, j + 3);
            let currHourGlassSum = doHourGlassSum(subArray);
            if (maxHourGlassSum == undefined) {
                maxHourGlassSum = currHourGlassSum;
            }
            maxHourGlassSum = currHourGlassSum > maxHourGlassSum ?
                                currHourGlassSum : maxHourGlassSum;
        }
    }
    return maxHourGlassSum;
}

/**
 *
 *
 * @param {Array} array
 * @return {Number} hour glass sum
 */
function doHourGlassSum(array) {
    let isValid = array.every((currentValue) => {
        return currentValue.length == 3;
    });

    // if array lenght not equal to 3
    if (!isValid) {
        return NaN; // fail silently
    }

    let reducer = (accumulator, CurrentValue) => {
        return accumulator + CurrentValue;
    };

    let sum = array[0].reduce(reducer);
    sum += array[1][1];
    sum += array[2].reduce(reducer);

    return sum;
}

/**
 *
 * @description processess input and calls the meat function
 */
function main() {
    let outputPath = process.argv[1].split('.')[0] + 'Output.txt';
    const ws = fs.createWriteStream(outputPath);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map((arrTemp) => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + '\n');

    ws.end();
}
