# Magic Square

Solutions for magic squares includes all three types: odd, singly even and doubly even orders.

## Big O

- Time: O(n^2) because we visit all n*n cells at most 2 times.
- Space: O(n^2) because we need n*n space for the matrix. Each helper method that constructs the matrix doesn't use extra space so each takes O(1). They just fill numbers into the matrix.

## Python

Here, to make things simple, I just have a single test file and you can execute it with:
```bash
$ python3 test_solution.py
```

## JavaScript

You can use `mocha` and `chai` to do your unit tests. Here, to make things simple, I just import functions into a test file and you can execute it with:
```bash
$ node solution.test.js
```

## Go

