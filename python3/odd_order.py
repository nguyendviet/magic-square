def fillOddOrder(magicSquare, n):
    # Initialize position for 1 
    i = 0
    j = n//2

    # One by one put all values in magic square 
    num = 1
    while num <= n*n:
        # 4th condition:
        if i < 0 and j >= n: 
            i += 2
            j -= 1 
        # 2nd condition:
        # If next number goes to out of square's right side 
        if j >= n: 
            j = 0 
        # 1st condition:
        # If next number goes to out of square's upper side 
        if i < 0: 
            i = n - 1
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
