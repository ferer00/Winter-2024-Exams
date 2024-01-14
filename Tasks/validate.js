// Validate person name

const isValidName = (name) => {
  if (!name  name === ''  typeof name !== 'string'  name.length === 0  !name.includes(' ')) {
    return false;
  }
    for (const char of name) {
      if (char  === ' ') continue;
        const charCode = char.toLowerCase().charCodeAt(0);
      if (charCode < 97 || charCode > 122) {
        return false;
      } 
    }
    return true;
};

module.exports = isValidName;
