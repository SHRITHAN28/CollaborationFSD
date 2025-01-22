//Create three functions that take a number, multiply it by 2, subtract 3, and then add 10. Use callbacks to chain these operations together.
function mul(num, callback) {
    const result = num * 2;
    return callback(result, callback);
}
function sub(num, callback) {
    const result = num - 3;
    return callback(result, add);
}
function add(num) {
    const result = num + 10;
    return result;
}