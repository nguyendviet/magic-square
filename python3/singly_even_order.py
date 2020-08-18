# Helper method fills a singly-even order matrix.
# Key:
#  - Fill each quarter of a singly-even order matrix to make each an odd-order
# magic square.
#  - Calculate the number of columns we need to shift, then exchange values of
# top quarters with bottom quarters. Note: the middle rows of the left quarters
# need to be shifted 1 to the right.
# Time = O(n^2) because we visit all cells.
# Space = O(1) because we don't use extra space, just fill the matrix.
def fillSinglyEvenOrder(magicSquare, n):
    # Build odd order magic square for each quarter:
    # Top left:
    fillQuarterOfSinglyEvenOrder(magicSquare, 0, n/2, 0, n/2, 1, (n/2)*(n/2))
    # Bottom right:
    fillQuarterOfSinglyEvenOrder(magicSquare, n/2, n, n/2, n, (n/2)*(n/2) + 1, n*n/2)
    # Top right:
    fillQuarterOfSinglyEvenOrder(magicSquare, 0, n/2, n/2, n, n*n/2 + 1, 3*(n/2)*(n/2))
    # Bottom left:
    fillQuarterOfSinglyEvenOrder(magicSquare, n/2, n, 0, n/2, 3*(n/2)*(n/2) + 1, n*n)

    shiftCol = (n/2 - 1)/2
    # Exchange columns in left quarters:
    for i in range(n//2):
        for j in range(shiftCol):
            # If we're at middle row of top left quarter, shift 1 to the right:
            if i == n//4:
                exchangeCell(i, j + shiftCol, magicSquare)
            else: 
                exchangeCell(i, j, magicSquare)
    # Exchange columns in right quarters if n > 6
    for i in range(n//2):
        for j in range(n - 1, n - shiftCol, -1):
            exchangeCell(i, j, magicSquare)

# Helper method fills a quarter of a singly-even order magic square to make an 
# odd order magic square.
def fillQuarterOfSinglyEvenOrder(magicSquare, firstRow, lastRow, firstCol, lastCol, num, lastNum):
    # Initialize position for 1st number:
    i = firstRow 
    j = (lastCol + firstCol)//2

    # One by one put all values in magic square 
    while num <= lastNum: 
        # 4th condition:
        if i < firstRow and j >= lastCol: 
            i += 2 
            j -= 1
        # 2nd condition:
        # If next number goes to out of square's right side 
        if j >= lastCol: 
            j = firstCol 
        # 1st condition:
        # If next number goes to out of square's upper side 
        if i < firstRow: 
            i = lastRow - 1 
        # 3rd condition:
        if magicSquare[i][j] != 0: 
            i += 2 
            j -= 1 
            continue 
        else:
            # Add num to cell:
            magicSquare[i][j] = num
            # Increment num to next one:
            num += 1
        i -= 1 
        j += 1 

# Helper method exchanges cell i,j with n/2+i,j
def exchangeCell(i, j, matrix):
    r = len(matrix)//2 + i
    matrix[i][j], matrix[r][j] = matrix[r][j], matrix[i][j]
