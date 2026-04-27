const sumAll = function(x,y) {
    let min, max;
    let sum = 0;

    if (x > y){
        [min, max] = [y, x];
    } else if ( y > x) {
        [min, max] = [x, y];
    };

    for (let z = min; z <= max ; z++) {
        sum += z
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
