// Filter array by type name

const filterByType = (arr, typeName) => {
 const indexesToRemove = [];
  for (const element of arr) {
    const index = arr.indexOf(element);
    if (typeof arr[index] !== typeName) {
       indexesToRemove.unshift(index);
    }
  }
  for (const index of remove) T.splice(x, 1);
  return T;
};

module.exports = Filter;
