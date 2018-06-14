/**
 *  Print all **unique** positive integer solutions to the equation a3 + b3 c3 + d3
 *  where a, b, c, and d are integers between 1 and 1000.
 */
let solveEquation = function SolveEquation() {
    let result;
    let preValues;
    let results = new Map();
    let finalResults = [];

    for (let i = 0; i < 1000; ++i) {
        for (let j = 0; j < 1000; ++j) {
            result = Math.pow(i, 3) + Math.pow(j, 3);
            /* do we have a pair with the same result? */
            if (results.has(result) && results.get(result).length < 4) {
                preValues = results.get(result);
                /* we need only unique integers */
                if (preValues.indexOf(i) < 0 &&
                    preValues.indexOf(j) < 0) {
                    preValues.push(i, j);
                }
            } else {
                results.set(result, [i, j]);
            }
        }
    }

    results.forEach((pairs, result) => {
        if (pairs.length == 4) {
            finalResults.push(pairs);
        }
    });

    return finalResults;
};

let result = solveEquation();

console.log(result);
