'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'equal' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
function normalize(arr) {
    const min = arr[0]
    return arr.map(x => x - min)
}
function equal(arr) {
    // Write your code here
    arr.sort()
    let min_moves = Number.POSITIVE_INFINITY
    for(let i=0; i<5; i++) {
        let chocolates = arr.slice(); // Copy array by value
        chocolates[0] -= i;
        chocolates = normalize(chocolates)
        let moves = 0
        if (i === 1 || i === 2) {
            moves += 1
        }
        if (i === 3 || i === 4) {
            moves += 2
        }
        chocolates.forEach(c => {
            while (c >= 5) {
                c -= 5
                moves++
            }
            if (c === 1 || c === 2) {
                moves++
            }
            if (c === 3 || c === 4) {
                moves += 2
            }
        })
        if (moves < min_moves) min_moves = moves
    }
    return min_moves
}

function main() {
    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

        const result = equal(arr);

        console.log(result + '\n');
    }
}
