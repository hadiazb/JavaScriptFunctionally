const Find = (arr, number) => {
  let newItem = arr.find((arr) =>  arr.hours >= number);
  return newItem;
}

module.exports = Find;