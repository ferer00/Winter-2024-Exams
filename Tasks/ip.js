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
    for (const b of segments) {
      resultArray[index] = parseInt(b);
      if (isNaN(resultArray[index])) return;
      j++;
    }
  }
  return resultArray;
};

module.exports = parseip;
