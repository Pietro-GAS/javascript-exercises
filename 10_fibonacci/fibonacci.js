const fibonacci = function(int) {
    let arr = [0, 1];
    int = Number(int);
    if (int < 0) {
        return "OOPS";
    } else if (int <= 1) {
        return arr[int];
    } else {
        for (let i = 2; i <= int; i++) {
            arr.push(arr[i - 1] + arr[i - 2])
        };
    };    
    return arr[int];
};

// Do not edit below this line
module.exports = fibonacci;
