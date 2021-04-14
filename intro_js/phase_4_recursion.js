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

