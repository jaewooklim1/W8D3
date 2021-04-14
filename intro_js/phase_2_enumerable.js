Array.prototype.myEach = function(callback) {
    // console.log("top of my each"); 
    for (let i = 0; i < this.length; i++) {
        // console.log("top of loop");
        callback(this[i]);
    }

    return this;
}

Array.prototype.myMap = function (cb) {
    let newArray = [];
    // console.log("top of my map"); 
    this.myEach( function(ele) {
        // console.log("top of my each callback");
        newArray.push(cb(ele)) 
        // console.log("bottom of my each callback");
    } )
    // console.log("bottom of my map");
    return newArray;
}

// function example(e) {
//     // console.log("example")
//     return e * 2;
// }

Array.prototype.myReduce = function (cb, initialVal) {

    let arr = this;
    
    if (initialVal === undefined) {
        initialVal = this[0];
        arr = this.slice(1);
    } 
    
    let sum = initialVal;

    arr.myEach( function(ele) {
        sum = cb(sum, ele);
    } )

    return sum;
} 