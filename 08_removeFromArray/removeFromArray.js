const removeFromArray = function(array, ...elements) {
    var index = 0
    elements.forEach((e) => {
        while ((index = array.indexOf(e)) > -1) {
            array.splice(index, 1); // Changed 0 to 1
        }
    })
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;