// Generate random password

const GeneratePassword = (alphabet, length) => {
  const MAX = alphabet.length;
  let key = '';
  for (let i = 0; i < length; i++) {
    Index = Math.floor(Math.random() * MAX);
    key = key + alphabet[Index];
  }
  return key;
};

module.exports = GeneratePassword;
