from solution import fillMatrix

# Odd order Magic Square. Example: 3,5,7,... (2*n +1)
def testOddOrder():
    tests = [3,5,7]
    print("Odd order Magic Square:")
    for testNo in range(len(tests)):
        n = tests[testNo]
        res = fillMatrix(n)
        print("Test", testNo + 1, "PASS" if isCorrect(res) else "FAIL")
        # printMatrix(res)

# Doubly-even order Magic Square. Example : 4,8,12,16,.. (4*n)
def testDoublyEvenOrder():
    tests = [4,8,12]
    print("Doubly-even order Magic Square:")
    for testNo in range(len(tests)):
        n = tests[testNo]
        res = fillMatrix(n)
        print("Test", testNo + 1, "PASS" if isCorrect(res) else "FAIL")
        # printMatrix(res)

# Singly-even order Magic Square. Example : 6,10,14,18,..(4*n +2)
def testSinglyEvenOrder():
    tests = [6,10,14]
    print("Singly-even order Magic Square:")
    for testNo in range(len(tests)):
        n = tests[testNo]
        res = fillMatrix(n)
        print("Test", testNo + 1, "PASS" if isCorrect(res) else "FAIL")
        # printMatrix(res)

# Helper method checks if the matrix is correct: sum of each row, column,
# diagonal = total sum / n
def isCorrect(matrix):
    n = len(matrix)
    # Partial sums formula: n*(n+1)/2, here is n*n*(n*n + 1)/2:
    totalSum = n*n*(n*n + 1) / 2
    targetSum = totalSum / n
    for i in range(n):
        rowArr = matrix[i]
        if sum(rowArr) != targetSum:
            return False
    for i in range(n):
        colArr = []
        for j in range(n):
            colArr.append(matrix[i][j])
        if sum(colArr) != targetSum:
            return False
    
    topLeftBottomRight = []
    for i in range(n):
        for j in range(n):
            if i == j:
                topLeftBottomRight.append(matrix[i][j])
        
    if sum(topLeftBottomRight) != targetSum:
        return False

    topRightBottomLeft = []
    for i in range(n):
        for j in range(n - 1, -1, -1):
            if i + j == n - 1:
                topRightBottomLeft.append(matrix[i][j])
        
    if sum(topRightBottomLeft) != targetSum:
        return False

    return True

# Heler method prints out the matrix.
def printMatrix(matrix):
    n = len(matrix)
    # Partial sums formula: n*(n+1)/2, here is n*n:
    totalSum = n*n*(n*n + 1) / 2
    targetSum = totalSum / n
    print("n =", n)
    print("Sum of each row, column or diagonal:", targetSum)
    for i in range(n):
        print(matrix[i])
    
    for i in range(n):
        rowArr = matrix[i]
        print("Row:", i+1, "Sum:", sum(rowArr))
    
    for i in range(n):
        colArr = []
        for j in range(n):
            colArr.append(matrix[i][j])
        
        print("Column:", i+1, "Sum:", sum(colArr))
    
    topLeftBottomRight = []
    for i in range(n):
        for j in range(n):
            if i == j:
                topLeftBottomRight.append(matrix[i][j])
    
    print("Top left to bottom right:", topLeftBottomRight)
    print("Sum:", sum(topLeftBottomRight))
    topRightBottomLeft = []
    for i in range(n):
        for j in range(n - 1, -1, -1):
            if i + j == n - 1: 
                topRightBottomLeft.append(matrix[i][j])
    
    print("Top right to bottom left:", topRightBottomLeft)
    print("Sum:", sum(topRightBottomLeft))

testOddOrder()
testDoublyEvenOrder()
testSinglyEvenOrder()
