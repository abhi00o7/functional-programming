// converts any kind of sentences with different separators to a single sentence combined with spaces
function sentensify(str) {

    return str
              .split(/\W/)
              .join(" ")
  
  }

  console.log(sentensify("May-the-force-be-with-you"));

// expected Output >> May the force be with you
