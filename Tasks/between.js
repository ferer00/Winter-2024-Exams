// Extract substring between prefix and suffix

 const getvaluebetween = (str, startIndex, endIndex) => {
  
  if (str.indexOf(startIndex) === -1) return '';
  else {
    str = str.substring(str.indexOf(startIndex)+startIndex.length);
    if (endIndex) {

      if (i === -1) {
        return '';
      } else {
        str = str.substring(0, str.indexOf(startIndex)+startIndex.length);
      }
    }
  }
  return str;
};

module.exports = getvaluebetween;
