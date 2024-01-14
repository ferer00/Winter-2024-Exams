// Extract substring between prefix and suffix

 const getvaluebetween = (str, startIndex, endIndex) => {
  
  if (str.indexOf(startIndex) === -1) return '';
  else {
    str = str.substring(str.indexOf(startIndex)+startIndex.length);
    if (endIndex) {
      i = str.indexOf(endIndex);
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
