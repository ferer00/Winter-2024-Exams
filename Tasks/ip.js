// Split string by the first occurrence of separator

const parseip = (input) => {
  const resultArray = [];
  if (input === ''){
    return;
  }
  else {
    const segments = input.split('.');
    if (segments.length != 4) return;
    j = 0;
    for (const b of segments) {
      resultArray[j] = parseInt(b);
      if (isNaN(a[j])) return;
      j++;
    }
  }
  return resultArray;
};

module.exports = parseip;
