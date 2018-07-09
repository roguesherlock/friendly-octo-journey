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
 *
 * @return {String} a single line input
 */
function readLine() {
    return inputString[currentLine++];
}

/**
 *
 *
 * @param {Array} a array
 * @param {Number} m modulus to check against
 * @return {Number} maximum modulus
 */
function maximumSum(a, m) {
    let maxModulus = 0;

    for (let subArrayLen = 1; subArrayLen <= a.length; ++subArrayLen) {
        let nOfSubArrays = Math.floor(a.length / subArrayLen);
        let subArrayStart = 0;
        let subArrayEnd = subArrayLen;

        for (let j = 0; j < nOfSubArrays; ++j) {
            let subArray = a.slice(subArrayStart, subArrayEnd);
            let subArraySum = subArray.reduce((accumulator, currentValue) => {
                return accumulator + currentValue;
            });
            let mod = subArraySum % m;
            if (mod > maxModulus) {
                maxModulus = mod;
            }

            subArrayStart++;
            subArrayEnd = subArrayStart + subArrayLen;
        }
    }

    return maxModulus;
}

/**
 *
 * @description processess input and calls the meat function
 */
function main() {
    let outputPath = process.argv[1].split('.')[0] + 'Output.txt';
    const ws = fs.createWriteStream(outputPath);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const nm = readLine().split(' ');

        // const n = parseInt(nm[0], 10);
        parseInt(nm[0], 10); // ignore for now

        const m = parseInt(nm[1], 10);

        const a = readLine().split(' ').map((aTemp) => parseInt(aTemp, 10));

        let result = maximumSum(a, m);

        ws.write(result + '\n');
    }

    ws.end();
}
