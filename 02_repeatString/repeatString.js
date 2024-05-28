const repeatString = function(string, repeats) {
    if (repeats < 0) {
        return "ERROR";
    } else {
        let finalString = "";
        for (let i = 0; i < repeats; i++) {
            finalString += string;
        }
        return finalString;
    }
};

// Do not edit below this line
module.exports = repeatString;
