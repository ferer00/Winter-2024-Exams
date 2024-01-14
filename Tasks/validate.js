// Validate person name

const isValidName = (name) => {
  if (!name  name === ''  typeof name !== 'string'  name.length === 0  !name.includes(' ')) {
    return false;
  }
    for (const char of name) {
      if (char  === ' ') continue;
      if (
        char .toLowerCase().charCodeAt(0) >= 97 &&
        char .toLowerCase().charCodeAt(0) <= 122
      ) {
      } else {
        return false;
      }
    }
    return true;
  }
};

module.exports = isValidName;
