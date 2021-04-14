

//bubble sort

// is sorted = false 
// while !is_sorted? 
// is sorted = true
// array.each do |ele1|
// array.each do |ele2|
// if ele1 > ele2, swap
// flip the flag - is_sorted = false
// return array


Array.prototype.bubbleSort = function() {
  let sorted = false; 

  while(!sorted) {
    sorted = true;

    for(let i = 0; i < this.length; i++) {
      if (this[i] > this[i+1]) {
        [this[i], this[i+1]] = [this[i+1], this[i]];
        sorted = false;
      }
    }

  }

  return this;
}


// substrings

// create empty array
// nested loops
  // 0 to array.length non inlusive => i
    // 1 to array.length - 1 => j
      // push into new arr

Array.prototype.substrings = function() {
  let substrings = [];

  for(let i = 0; i < this.length; i++) {
    for(let j = 0; j < this.length; j++) {
      substrings.push(this.slice(i,j+1))
    }
  }
  return substrings;
}
