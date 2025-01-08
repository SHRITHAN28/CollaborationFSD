/*Create a function calculateTotal that takes an arbitrary number of numeric values
(using the rest operator) and returns their sum.
Example Input:
calculateTotal (10, 20, 30, 40)
Example Output:
100*/
function calculateTotal(a, b, ...c) {
    sum = () => {
        for (i in c)
            sum = sum + i;
    }
    return a + b + sum;
}
calculateTotal(10, 20, 30, 40, 50);