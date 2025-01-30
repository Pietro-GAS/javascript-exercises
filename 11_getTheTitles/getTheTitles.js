const getTheTitles = function(arr) {
    let titles = [];
    for (book of arr) {
        titles.push(book.title)
    };
    return titles;
};
/* alternative solution

titles = arr.map((book) => book.title);

*/

// Do not edit below this line
module.exports = getTheTitles;
