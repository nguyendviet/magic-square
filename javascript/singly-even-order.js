/**
 * Helper method fills a singly-even order matrix.
 * Key:
 *  - Fill each quarter of a singly-even order matrix to make each an odd-order
 * magic square.
 *  - Calculate the number of columns we need to shift, then exchange values of
 * top quarters with bottom quarters. Note: the middle rows of the left quarters
 * need to be shifted 1 to the right.
 * Time = O(n^2) because we visit all cells.
 * Space = O(1) because we don't use extra space, just fill the matrix.
 * @param {number[][]} magicSquare 
 * @param {number} n 
 */
function fillSinglyEvenOrder(magicSquare, n) {
    // Build odd order magic square for each quarter:
    // Top left:
    fillQuarterOfSinglyEvenOrder(magicSquare, 0, n/2, 0, n/2, 1, (n/2)*(n/2));
    // Bottom right:
    fillQuarterOfSinglyEvenOrder(magicSquare, n/2, n, n/2, n, (n/2)*(n/2) + 1, n*n/2);
    // Top right:
    fillQuarterOfSinglyEvenOrder(magicSquare, 0, n/2, n/2, n, n*n/2 + 1, 3*(n/2)*(n/2));
    // Bottom left:
    fillQuarterOfSinglyEvenOrder(magicSquare, n/2, n, 0, n/2, 3*(n/2)*(n/2) + 1, n*n);

    const shiftCol = (n/2 - 1)/2;
    let i, j;
    // Exchange columns in left quarters:
    for (i = 0; i < Math.floor(n/2); i++) {
        for (j = 0; j < shiftCol; j++) {
            // If we're at middle row of top left quarter, shift 1 to the right:
            if (i === Math.floor(n/4)) {
                exchangeCell(i, j + shiftCol, magicSquare);
            }
            else exchangeCell(i, j, magicSquare);
        }
    }
    // Exchange columns right quarters if n > 6:
    for (i = 0; i < Math.floor(n/2); i++) {
        for (j = n - 1; j > n - shiftCol; j--) {
            exchangeCell(i, j, magicSquare);
        }
    }
}

/**
 * Helper method fills a quarter of a singly-even order magic square to make an 
 * odd order magic square.
 * @param {number[][]} magicSquare 
 * @param {number} firstRow 
 * @param {number} lastRow 
 * @param {number} firstCol 
 * @param {number} lastCol 
 * @param {number} num 
 * @param {number} lastNum 
 */
function fillQuarterOfSinglyEvenOrder(magicSquare, firstRow, lastRow, firstCol, lastCol, num, lastNum) {
    // Initialize position for 1st number:
    let i = firstRow; 
    let j = Math.floor((lastCol + firstCol)/2);

    // One by one put all values in magic square 
    while(num <= lastNum) { 
        // 4th condition:
        if (i < firstRow && j >= lastCol) { 
            i += 2; 
            j--; 
        } 
        // 2nd condition:
        // If next number goes to out of square's right side 
        if (j >= lastCol) j = firstCol; 
        // 1st condition:
        // If next number goes to out of square's upper side 
        if (i < firstRow) i = lastRow - 1; 
        // 3rd condition:
        if (magicSquare[i][j] !== 0) { 
            i += 2; 
            j--; 
            continue; 
        } 
        else {
            // Add num to cell:
            magicSquare[i][j] = num;
            // Increment num to next one:
            num++;
        }
        i--; 
        j++; 
    } 
}

/**
 * Helper method exchanges cell i,j with n/2+i,j
 * @param {number} i 
 * @param {number} j 
 * @param {number[][]} matrix 
 */
function exchangeCell(i, j, matrix) {
    const n = matrix.length;
    const r = Math.floor(n/2) + i;
    const temp = matrix[i][j];
    matrix[i][j] = matrix[r][j];
    matrix[r][j] = temp;
}

module.exports = {fillSinglyEvenOrder};
