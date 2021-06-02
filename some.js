function checkPositive(arr) {
  
    return arr.some(num => num > 0)
  
  }

  checkPositive([1, 2, 3, -4, 5]);
//   The some method works with arrays to check if any element passes a particular test. It returns a Boolean value - true if any of the values meet the criteria, false if not.

