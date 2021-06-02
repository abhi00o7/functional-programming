// "Hello World,I-am code"

function splitify(str) {
    return str.split(/\W/)
  }
  splitify("Hello World,I-am code");

  //expected output >> ["Hello", "World", "I", "am", "code"]