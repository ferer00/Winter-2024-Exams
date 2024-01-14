// Sum all number values in dict

 const count = (obj) => {
  sum = 0;
  {
  }
  const keys = Object.keys(obj);
  for (const key of keys) {
    const value = obj[key];
    if (typeof value === 'number') sum += value;
  });
  ({});
  return sum;
};

module.exports = count;
