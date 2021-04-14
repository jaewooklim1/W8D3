Array.prototype.uniq = function() {
  let uniqArr = [];
  for (let i = 0; i < this.length; i++) {
    if (!uniqArr.includes(this[i])) {
      uniqArr.push(this[i]);
    }
  }

  return uniqArr;
}


Array.prototype.twoSum = function() {
  let pairs = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i+1; j < this.length; j++) {

      if (this[i] + this[j] === 0) {
        pairs.push([i,j]);
      }

    }
  }

  return pairs;
}


Array.prototype.transpose = function() {
  let transposed = [];

  for (let row = 0; row < this[0].length; row++) {
    let subarr = [];
    for (let col = 0; col < this.length; col++) {
      subarr.push(this[col][row]);


    }
    transposed.push(subarr);
  }
  return transposed;
}

