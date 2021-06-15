// Q: Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6]

const array1 = [1, 2, 3, 4, 5]; // Expected array = [120,60,40,30,24]

function productOfArray(array) {
  const multiple = array.reduce((acc, cv) => acc * cv, 1);
  const newArray = array.map((item) => {
    return multiple / item;
  });
  return newArray;
}

// Returns new array
productOfArray(array1);