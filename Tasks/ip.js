// Split string by the first occurrence of separator

const parseip = (input) => {
  const resultArray = [];
  if (input === ''){
    return;
  }
  else {
    const segments = input.split('.');
    if (segments.length != 4){
      return;
    }
    let index = 0;
    for (const segment of segments) {
      resultArray[index] = parseInt(segment);
      if (isNaN(resultArray[index])){
        return;
      }
      index++;
    }
  }
  return resultArray;
};

module.exports = parseip;
