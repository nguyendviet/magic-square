package main

import (
	"fmt"
	"testing"
)

/*
TestFillMatrix tests my own cases
To test, run:
$ go test -run TestFillMatrix
*/
func TestFillMatrix(*testing.T) {
	testOddOrder()
	testDoublyEvenOrder()
	testSinglyEvenOrder()
}

/*
Odd order Magic Square. Example: 3,5,7,... (2*n +1)
*/
func testOddOrder() {
	fmt.Println("Odd order Magic Square:")
	tests := []int{3, 5, 7}
	for testNo, test := range tests {
		res := fillMatrix(test)
		fmt.Printf("Test %v ", testNo+1)
		if isCorrect(res) {
			fmt.Printf("PASS\n")
		} else {
			fmt.Printf("FAIL\n")
		}
		// printMatrix(res)
	}
}

/*
Doubly-even order Magic Square. Example : 4,8,12,16,.. (4*n)
*/
func testDoublyEvenOrder() {
	fmt.Println("Doubly even order Magic Square:")
	tests := []int{4, 8, 12}
	for testNo, test := range tests {
		res := fillMatrix(test)
		fmt.Printf("Test %v ", testNo+1)
		if isCorrect(res) {
			fmt.Printf("PASS\n")
		} else {
			fmt.Printf("FAIL\n")
		}
		// printMatrix(res)
	}
}

/*
Singly-even order Magic Square. Example : 6,10,14,18,..(4*n +2)
*/
func testSinglyEvenOrder() {
	fmt.Println("Singly even order Magic Square:")
	tests := []int{6, 10, 14}
	for testNo, test := range tests {
		res := fillMatrix(test)
		fmt.Printf("Test %v ", testNo+1)
		if isCorrect(res) {
			fmt.Printf("PASS\n")
		} else {
			fmt.Printf("FAIL\n")
		}
		// printMatrix(res)
	}
}

/**
Helper method checks if the matrix is correct: sum of each row, column,
diagonal = total sum / n
*/
func isCorrect(matrix [][]int) bool {
	n := len(matrix)
	// Partial sums formula: n*(n+1)/2, here is n*(n*n + 1) / 2:
	totalSum := n * n * (n*n + 1) / 2
	targetSum := totalSum / n
	for i := 0; i < n; i++ {
		rowArr := matrix[i]
		if sumOf(rowArr) != targetSum {
			return false
		}
	}
	for i := 0; i < n; i++ {
		colArr := []int{}
		for j := 0; j < n; j++ {
			colArr = append(colArr, matrix[i][j])
		}
		if sumOf(colArr) != targetSum {
			return false
		}
	}

	topLeftBottomRight := []int{}
	for i := 0; i < n; i++ {
		for j := 0; j < n; j++ {
			if i == j {
				topLeftBottomRight = append(topLeftBottomRight, matrix[i][j])
			}
		}
	}
	if sumOf(topLeftBottomRight) != targetSum {
		return false
	}

	topRightBottomLeft := []int{}
	for i := 0; i < n; i++ {
		for j := n - 1; j >= 0; j-- {
			if i+j == n-1 {
				topRightBottomLeft = append(topRightBottomLeft, matrix[i][j])
			}
		}
	}
	if sumOf(topRightBottomLeft) != targetSum {
		return false
	}

	return true
}

func sumOf(arr []int) int {
	sum := 0
	for _, num := range arr {
		sum += num
	}
	return sum
}

/*
Heler method prints out the matrix.
*/
func printMatrix(matrix [][]int) {
	n := len(matrix)
	// Partial sums formula: n*(n+1)/2, here is n*n:
	totalSum := n * n * (n*n + 1) / 2
	targetSum := totalSum / n
	fmt.Printf("n = %v\n", n)
	fmt.Printf("Sum of each row, column or diagonal: %v\n", targetSum)
	for i := 0; i < n; i++ {
		fmt.Printf("%v\n", matrix[i])
	}
	for i := 0; i < n; i++ {
		rowArr := matrix[i]
		fmt.Printf("Row: %v Sum: %v\n", i+1, sumOf(rowArr))
	}
	for i := 0; i < n; i++ {
		colArr := []int{}
		for j := 0; j < n; j++ {
			colArr = append(colArr, matrix[i][j])
		}
		fmt.Printf("Column: %v Sum: %v\n", i+1, sumOf(colArr))
	}
	topLeftBottomRight := []int{}
	for i := 0; i < n; i++ {
		for j := 0; j < n; j++ {
			if i == j {
				topLeftBottomRight = append(topLeftBottomRight, matrix[i][j])
			}
		}
	}
	fmt.Printf("op left to bottom right: %v\n", topLeftBottomRight)
	fmt.Printf("Sum: %v\n", sumOf(topLeftBottomRight))
	topRightBottomLeft := []int{}
	for i := 0; i < n; i++ {
		for j := n - 1; j >= 0; j-- {
			if i+j == n-1 {
				topRightBottomLeft = append(topRightBottomLeft, matrix[i][j])
			}
		}
	}
	fmt.Printf("Top right to bottom left: %v\n", topRightBottomLeft)
	fmt.Printf("Sum: %v\n", sumOf(topRightBottomLeft))
}
