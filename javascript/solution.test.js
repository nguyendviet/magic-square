const {fillMatrix} = require('./solution');

/**
 * Odd order Magic Square. Example: 3,5,7,... (2*n +1)
 */
function testOddOrder() {
    const oddOrderTests = [3,5,7];
    console.log("Odd order Magic Square:");
    oddOrderTests.forEach((test, testNo) => {
        const n = test;
        const res = fillMatrix(n);
        console.log("Test", ++testNo, isCorrect(res) ? "PASS" : "FAIL");
        // printMatrix(res);
    });
}

/**
 * Doubly-even order Magic Square. Example : 4,8,12,16,.. (4*n)
 */
function testDoublyEvenOrder() {
    const doublyEvenOrderTests = [4,8,12];
    console.log("Doubly-even order Magic Square:");
    doublyEvenOrderTests.forEach((test, testNo) => {
        const n = test;
        const res = fillMatrix(n);
        console.log("Test", ++testNo, isCorrect(res) ? "PASS" : "FAIL");
        // printMatrix(res);
    });
}

/**
 * Singly-even order Magic Square. Example : 6,10,14,18,..(4*n +2)
 */
function testSinglyEvenOrder() {
    const singlyEvenOrderTests = [6,10,14];
    console.log("Singly-even order Magic Square:");
    singlyEvenOrderTests.forEach((test, testNo) => {
        const n = test;
        const res = fillMatrix(n);
        console.log("Test", ++testNo, isCorrect(res) ? "PASS" : "FAIL");
        // printMatrix(res);
    });
}

/**
 * Helper method checks if the matrix is correct: sum of each row, column,
 * diagonal = total sum / n
 * @param {number[][]} matrix 
 * @returns {boolean}
 */
function isCorrect(matrix) {
    const n = matrix.length;
    // Partial sums formula: n*(n+1)/2, here is n*n*(n*n + 1)/2:
    const totalSum = n*n*(n*n + 1) / 2;
    const targetSum = totalSum / n;
    for (let i = 0; i < n; i++) {
        const rowArr = matrix[i];
        if (sumOf(rowArr) !== targetSum) return false;
    }
    for (let i = 0; i < n; i++) {
        const colArr = [];
        for (let j = 0; j < n; j++) {
            colArr.push(matrix[i][j]);
        }
        if (sumOf(colArr) !== targetSum) return false;
    }

    const topLeftBottomRight = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) topLeftBottomRight.push(matrix[i][j]);
        }
    }
    if (sumOf(topLeftBottomRight) !== targetSum) return false;

    const topRightBottomLeft = [];
    for (let i = 0; i < n; i++) {
        for (let j = n - 1; j >= 0; j--) {
            if (i + j === n - 1) topRightBottomLeft.push(matrix[i][j]);
        }
    }
    if (sumOf(topRightBottomLeft) !== targetSum) return false;
    
    return true;
}

/**
 * Heler method prints out the matrix.
 * @param {number[][]} matrix 
 */
function printMatrix(matrix) {
    const n = matrix.length;
    // Partial sums formula: n*(n+1)/2, here is n*n:
    const totalSum = n*n*(n*n + 1) / 2;
    const targetSum = totalSum / n;
    console.log("n =", n);
    console.log("Sum of each row, column or diagonal:", targetSum);
    for (let i = 0; i < n; i++) {
        console.log(matrix[i]);
    }
    for (let i = 0; i < n; i++) {
        const rowArr = matrix[i];
        console.log("Row:", i+1, "Sum:", sumOf(rowArr));
    }
    for (let i = 0; i < n; i++) {
        const colArr = [];
        for (let j = 0; j < n; j++) {
            colArr.push(matrix[i][j]);
        }
        console.log("Column:", i+1, "Sum:", sumOf(colArr));
    }
    const topLeftBottomRight = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) topLeftBottomRight.push(matrix[i][j]);
        }
    }
    console.log("Top left to bottom right:", topLeftBottomRight);
    console.log("Sum:", sumOf(topLeftBottomRight));
    const topRightBottomLeft = [];
    for (let i = 0; i < n; i++) {
        for (let j = n - 1; j >= 0; j--) {
            if (i + j === n - 1) topRightBottomLeft.push(matrix[i][j]);
        }
    }
    console.log("Top right to bottom left:", topRightBottomLeft);
    console.log("Sum:", sumOf(topRightBottomLeft));
}

/**
 * Helper method returns the sum of an array.
 * @param {number[]} arr 
 * @returns {number}
 */
function sumOf(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

(function() {
    testOddOrder();
    testDoublyEvenOrder();
    testSinglyEvenOrder();
}());
