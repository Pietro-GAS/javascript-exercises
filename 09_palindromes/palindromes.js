const palindromes = function (str) {
    // remove every non-letter & non-number and convert to lowercase
    str = str.replace(/[^\p{L}\p{N}]/gu, '').toLowerCase();
    let arr = [];
    for(i = 0; i < str.length; i++) {
      if (str[i] == str[str.length-i-1]) {
        arr[i] = 1;
      } else {
        arr[i] = 0;
      };
    };
    return Boolean(arr.reduce((curr, tot) => curr * tot, 1));
};

// Do not edit below this line
module.exports = palindromes;
