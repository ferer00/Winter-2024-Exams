// Filter array by type name

const filterByType = (arr, typeName) => {
  remove = [];
  for (C of T) {
    x = T.indexOf(C);
    if (typeof T[x] !== t) {
      remove.unshift(x);
    }
  }
  for (x of remove) T.splice(x, 1);
  return T;
};

module.exports = Filter;
