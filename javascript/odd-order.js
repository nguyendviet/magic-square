/**
 * Helper method fills an odd order magic square.
 * Key:
 *  - The number '1' goes in the middle of the top row.
 *  - All numbers are then placed one column to the right and one row up from 
 * the previous number.
 *  1. Whenever the next number placement is above the top row, stay in that 
 * column and place the number in the bottom row.
 *  2. Whenever the next number placement is outside of the rightmost column, 
 * stay in that row and place the number in the leftmost column.
 *  3. When encountering a filled-in square, place the next number directly 
 * below the previous number.
 *  4. When the next number position is outside both a row and a column, place 
 * the number directly beneath the previous number.
 * Time = O(n^2) because we visit all cells.
 * Space = O(1) because we don't use extra space, just fill the matrix.
 * @param {number[][]} magicSquare 
 * @param {number} num First number
 * @param {number} n 
 */
function fillOddOrder(magicSquare, n) {
    // Initialize position for 1 
    let i = 0; 
    let j = Math.floor(n/2); 

    // One by one put all values in magic square 
    let num = 1;
    while(num <= n*n) { 
        // 4th condition:
        if (i < 0 && j >= n) { 
            i += 2; 
            j--; 
        } 
        // 2nd condition:
        // If next number goes to out of square's right side 
        if (j >= n) j = 0; 
        // 1st condition:
        // If next number goes to out of square's upper side 
        if (i < 0) i = n - 1; 
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

module.exports = {fillOddOrder};
