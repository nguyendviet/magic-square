package main

/*
Helper method fills a doubly-even order matrix.
Key:
 - Fill matrix from 1 to n*n.
 - Change values of matrix at 4 corners: size n/4 and centre: n/2 with this
formula: (n*n+1)-arr[i][j]. That formula swaps numbers at 4 corners of a
submatrix diagonally.
Time = O(n^2) because we visit all cells.
Space = O(1) because we don't use extra space, just fill the matrix.
*/
func fillDoublyEvenOrder(magicSquare [][]int, n int) {
	// Fill matrix with its count value starting from 1
	for i := 0; i < n; i++ {
		for j := 0; j < n; j++ {
			magicSquare[i][j] = (n * i) + j + 1
		}
	}

	// Change values of sub-matrix with this formula: (n*n+1)-arr[i][j]
	// Top left submatrix of size n/4:
	for i := 0; i < n/4; i++ {
		for j := 0; j < n/4; j++ {
			magicSquare[i][j] = (n*n + 1) - magicSquare[i][j]
		}
	}

	// Top right submatrix of size n/4:
	for i := 0; i < n/4; i++ {
		for j := 3 * n / 4; j < n; j++ {
			magicSquare[i][j] = (n*n + 1) - magicSquare[i][j]
		}
	}

	// Bottom left submatrix of size n/4:
	for i := 3 * n / 4; i < n; i++ {
		for j := 0; j < n/4; j++ {
			magicSquare[i][j] = (n*n + 1) - magicSquare[i][j]
		}
	}

	// Bottom right submatrix of size n/4:
	for i := 3 * n / 4; i < n; i++ {
		for j := 3 * n / 4; j < n; j++ {
			magicSquare[i][j] = (n*n + 1) - magicSquare[i][j]
		}
	}

	// Centre submatrix of size n/2:
	for i := n / 4; i < 3*n/4; i++ {
		for j := n / 4; j < 3*n/4; j++ {
			magicSquare[i][j] = (n*n + 1) - magicSquare[i][j]
		}
	}
}
