const removeFromArray = function(array, ...theArgs) {
    let newArray = [];
    for (const element of array) {
        for (const arg of theArgs) {
            if (element === arg) {
                continue;
            } else {
                newArray.push(element);
            }
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
