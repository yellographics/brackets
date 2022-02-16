module.exports = function check(str, bracketsConfig) {
  const stack = [];
  let iterator = 0;
  let openBrackets = [];
  let closeBrackets = [];
  function getElements(array, which, newArray) {
    array.forEach((elem) => {
      elem.forEach((symbol, index) => {
        if (index === which) {
          newArray.push(symbol);
        }
      });
    });
  }
  getElements(bracketsConfig, 0, openBrackets);
  getElements(bracketsConfig, 1, closeBrackets);

  for (const symbol of str) {
    if (
      openBrackets.find((elem) => elem === symbol) &&
      closeBrackets.find((elem) => elem === symbol)
    ) {
      if (!iterator % 2) {
        stack.push(symbol);
        iterator++;
      } else {
        const indexCloseBracket = closeBrackets.findIndex(
          (elem) => elem === symbol
        );
          const poped = stack.pop();
          iterator = 0;
        if (poped !== openBrackets[indexCloseBracket]) {
          console.log(false);
          return false;
        }
      }
    } else if (
      openBrackets.find((elem) => elem === symbol) &&
      !closeBrackets.find((elem) => elem === symbol)
    ) {
      stack.push(symbol);
    } else if (
      !openBrackets.find((elem) => elem === symbol) &&
      closeBrackets.find((elem) => elem === symbol)
    ) {
      const indexCloseBracket = closeBrackets.findIndex(
        (elem) => elem === symbol
      );
      const poped = stack.pop();
      if (poped !== openBrackets[indexCloseBracket]) {
        console.log(false);
        return false;
      }
    }
  }

  if (stack.length > 0) {
    console.log(false);
    return false;
  } else {
    console.log(true);
    return true;
  }
};;


