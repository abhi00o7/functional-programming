// js arrays sort() using the unicode characters rather than the visual normal alphabet rules 

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  
  return [].concat(arr).sort(( a , b ) => a - b) //returns a sorted array without changing the global array

}
nonMutatingSort(globalArray);