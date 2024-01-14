// Split string by the first occurrence of separator

const parseip = (input) => {
  const resultArray = [];
  if (input === ''){
    return;
  }
  else {
    B = input.split('.');
    if (B.length != 4) return;
    j = 0;
    for (const b of B) {
      resultArray[j] = parseInt(b);
      if (isNaN(a[j])) return;
      j++;
    }
  }
  return resultArray;
};

module.exports = parseip;
