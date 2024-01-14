// Validate person name

const isValidName = (name) => {
  if (!name  name === ''  typeof name !== 'string'  name.length === 0  !name.includes(' ')) {
    return false;
  }
    for (C of name) {
      if (C === ' ') continue;
      if (
        C.toLowerCase().charCodeAt(0) >= 97 &&
        C.toLowerCase().charCodeAt(0) <= 122
      ) {
      } else {
        return false;
      }
    }
    return true;
  }
};

module.exports = isValidName;
