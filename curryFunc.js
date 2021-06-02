function add(x) {
  
    return y => z => x + y +z
  
  }
  console.log(add(10)(20)(30));

//   function which takes three different individual inputs to return the sum of the three numbers

// official words are: The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1.
// In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.

function unCurried(x, y) {
    return x + y;
  }
  
  function curried(x) {
    return function(y) {
      return x + y;
    }
  }
  
  const curried = x => y => x + y
  
  curried(1)(2)