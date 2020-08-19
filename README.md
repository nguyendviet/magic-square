# Magic Square

Solutions for magic squares include all three types: odd, singly even and doubly even orders.

Solutions in [Python](./python3/README.md), [JavaScript](./javascript/README.md) and [Go](./golang/README.md).

## Big O

- Time: O(n^2) because we visit all n*n cells at most 2 times.
- Space: O(n^2) because we need n*n space for the matrix. Each helper method that constructs the matrix doesn't use extra space so each takes O(1). They just fill numbers into the matrix.

Here, to keep things simple, I just have a single test file. Once you're in the folder with the test file, you can execute it with:

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
