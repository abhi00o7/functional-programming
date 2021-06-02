const squareList = arr => {
    return arr
      .filter(num => (Number.isInteger(num) && num > 0))
      .map(num => Math.pow(num,2))
      ;
  };
  // const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
  
  console.log(squaredIntegers);