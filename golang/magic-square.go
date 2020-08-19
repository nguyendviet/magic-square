package main

/*
Function fills a magic matrix.
Note:
- Magic squares are divided into three major categories depending upon order of square:
1) Odd order Magic Square. Example: 3,5,7,… (2*n + 1)
2) Doubly-even order Magic Square. Example : 4,8,12,16,.. (4*n).
"Doubly even" means a multiple of four.
3) Singly-even order Magic Square. Example : 6,10,14,18,..(4*n + 2). Most difficult.
"Singly even" means divisible by 2 but not by 4.
Time = O(n^2). Look at each category for explanation.
Space = O(n^2) for the matrix.
*/
func fillMatrix(n int) [][]int {
	// Edge cases:
	if n == 1 {
		return [][]int{{1}}
	}
	if n == 2 {
		return nil
	}
	magicSquare := make([][]int, n)
	for i := range magicSquare {
		magicSquare[i] = make([]int, n)
	}
	// Fill the magicSquare depends on its type:
	// Odd order:
	if n%2 == 1 {
		fillOddOrder(magicSquare, n)
	} else if n%4 == 2 {
		fillSinglyEvenOrder(magicSquare, n)
	} else {
		fillDoublyEvenOrder(magicSquare, n)
	}
	return magicSquare
}
