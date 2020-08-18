from odd_order import fillOddOrder
from singly_even_order import fillSinglyEvenOrder
from doubly_even_order import fillDoublyEvenOrder

def fillMatrix(n):
    # Edge cases:
    if n == 1: 
        return [[1]]
    if n == 2: 
        return null

    magicSquare = [[0 for i in range(n)] for i in range(n)]
    # Fill the magicSquare depends on its type:
    # Odd order:
    if n % 2 == 1:
        fillOddOrder(magicSquare, n)
    # Singly-even order:
    elif n % 4 == 2:
        fillSinglyEvenOrder(magicSquare, n)
    # Doubly-even order:
    else:
        fillDoublyEvenOrder(magicSquare, n)
    
    return magicSquare
