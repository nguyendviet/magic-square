# Magic Square

Solutions for magic squares include all three types: odd, singly even and doubly even orders.

Solutions in [Python](./python3), [JavaScript](./javascript) and [Go](./golang).

Here, to keep things simple, for each language, I have a single test file for all three types. You can play with the test files, uncomment `printMatrix()` to see the squares printed out. Once you're in the folder with the test file, you can execute it with:

**Python**
```bash
$ python3 test_solution.py
```

**JavaScript**
```bash
$ node solution.test.js
```

**Go**

Put all the files in the folder `./golang` in your `go` folder. E.g.: `~/go/src/your-project/`. 

Once you're in the folder with the test file, you can execute it with:

```bash
$ go test -run TestFillMatrix
```

## Intuition

### Odd order magic square

There are two ways to start filling an odd order magic square:

- Start with the middle cell of the first row [by 1728.org](http://www.1728.org/magicsq1.htm) 
- Start with the middle cell of the last column [by GeeksForGeeks.org](https://www.geeksforgeeks.org/magic-square/)

In my experience, starting with the middle cell of the first row seems to be the most intuitive way and it helps a lot with constructing a singly-even-order magic square later.

From 1, we go up and to the right and wrap around the boundaries of the matrix.

There are four conditions:

1. Whenever the next number placement is above the top row, stay in that column and place the number in the bottom row.
2. Whenever the next number placement is outside of the rightmost column, stay in that row and place the number in the leftmost column.
3. When encountering a filled-in square, place the next number directly below the previous number.
4. When the next number position is outside both a row and a column, place the number directly beneath the previous number.

> Note: whilst implementing the code, make sure you know which condition to be checked first.

### Singly even order magic square

In order to construct a singly even magic square, we have to split it into four quarters. We’ll fill each quarter in a way that each quarter is an odd order magic square by itself. 

We fill the quarters in this order: top left, bottom right, top right, bottom left.

Once we've finished filling the four quarters, we need to exchange (or swap if that works for you) the leftmost columns of the top left quarter with the bottom left quarter, and the rightmost columns of the top right quarter with the bottom right quarter.

```
Number of left columns to shift = (n/2 - 1)/2
Number of right columns to shift = (n/2 - 1)/2 - 1
```

> Note: the middle row of each left quarter is shifted 1 cell to the right but we don't apply this rule to the right quarters (if we need to shift with n = 10, 14, etc.).

> In my code, I implement a helper which is a customised odd order magic square building method that allows ranges of rows, columns, start number and end number to make the code cleaner.

### Doubly even order magic square

There are three ways to construct a doubly even order magic square:

1. Using the formula: `magicSquare[i][j] = (n*n + 1) - magicSquare[i][j]` [by GeeksForGeeks.org](https://www.geeksforgeeks.org/magic-square-even-order/)
1. Dividing up the square into smaller squares, each of which has a side equal to n/4 [by 1728.org](http://www.1728.org/magicsq2.htm)
1. Dividing into rectangles, each of which has a dimension of n/2 by n/4 [by 1728.org](http://www.1728.org/magicsq2.htm)

In my opinion, the 1st solution is the most elegant but it requires you to understand and memorise the formula.

We fill matrix from 1 to `n*n`. 

Then we change values of matrix at 4 corners (size n/4) and centre (size n/2) with this formula: `(n*n+1)-arr[i][j]`. That formula swaps numbers at 4 corners of a submatrix diagonally.

## Big O

- Time: O(n^2) because we visit all n*n cells at most 2 times.
- Space: O(n^2) because we need n*n space for the matrix. Each helper method that constructs the matrix doesn't use extra space so each takes O(1). They just fill numbers into the matrix.
