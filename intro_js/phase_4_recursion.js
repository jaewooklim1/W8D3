function range(start, end) {

    newArray = [start];
    // debugger
    if (start === end) {
        return [start];
    }

    return newArray.concat(range(start+1, end));
}

function sumRec(arr) {
    if (arr.length === 1) {
        return arr[0];
    }

    return arr[0] + sumRec(arr.slice(1));
}

function exponent1(base, exp) {
    if (exp === 0) {
        return 1; 
    }

    return base * exponent1(base, exp-1);
}


function exponent2(base, exp) {
    if (exp === 0) {
        return 1; 
    } 

    if (exp === 1) {
        return base; 
    }

    if (exp % 2 === 0) {
        return Math.pow(exponent2(base, exp/2), 2);
    } else {
        return base * Math.pow(exponent2(base, (exp - 1) / 2), 2)
    }
}


function fibonacci(n) {
    if (n === 1) {
        return [1]; 
    } else if (n === 2) {
        return [1,1];
    }
    // debugger
    let fibvar = fibonacci(n-1);

    return fibvar.concat(fibvar[fibvar.length-1] + fibvar[fibvar.length-2]);
}


function deepDup(arr) {
    const newArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Array) {
            newArray.push(deepDup(arr[i]));
        } else {
            newArray.push(arr[i]);
        }    
    }     
    
    return newArray;
}

function bsearch(arr, target) {
    if (arr.length < 1) {
        return -1;
    }

    const index = Math.floor((arr.length / 2));
    const mid = arr[index];
    
    if (mid === target) {
        return index;
    } else if (target < mid) {
        return bsearch(arr.slice(0, index), target);
    } else {
        const found = bsearch(arr.slice(index+1), target);
        return (found === -1 ? -1 : found + index + 1);
    }

}