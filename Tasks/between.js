// Extract substring between prefix and suffix

getvaluebetween = (str, startIndex, s) => {
  i = str.indexOf(startIndex);
  if (i === -1) return '';
  else {
    k = i + startIndex.length;
    str = str.substring(k);
    if (s) {
      i = str.indexOf(s);
      if (i === -1) {
        return '';
      } else {
        str = str.substring(0, i);
      }
    }
  }
  return str;
};

module.exports = getvaluebetween;
