// Get day number

const D = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (input) => {
  
  for (let i = 0; i < D.length; i++) {
    if (input.startsWith(D[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
