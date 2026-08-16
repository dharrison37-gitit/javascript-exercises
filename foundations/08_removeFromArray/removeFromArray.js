const removeFromArray = function(arr, ...rest) {
    const keep = [];
    for(item of arr) {
        if(rest.includes(item)) {
            continue;
        }
        keep.push(item);
    }
    return keep;
};

// Do not edit below this line
module.exports = removeFromArray;
