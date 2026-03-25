const reverseString = function(string) {
    result = []
    chars = string.split("")
    chars.forEach((element) => result.unshift(element))
    return result.join("")
};

// Do not edit below this line
module.exports = reverseString;