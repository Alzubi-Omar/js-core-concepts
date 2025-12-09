//  Spread Operator Example

const nums = [1, 2, 3];
const newNums = [...nums, 4, 5, 6];

console.log(newNums); // Output: [1, 2, 3, 4, 5, 6]

//  Rest Operator Example

// Array cloning
const originalArray = [10, 20, 30];

const clonedArray = [...originalArray, 5, 6, 8];

console.log(clonedArray); // Output: [10, 20, 30]
console.log(originalArray);

// Array merging
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const mergedArray = [...array1, ...array2];

console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// Spread in Objects
const obj1 = {
  name: "Omar",
  age: 35,
};

const updatedObj = {
  ...obj1,
  city: "NYC",
};

console.log(updatedObj);

// Object cloning
const clone = { ...obj1 };
console.log(clone);

// Merging objects
const obj2 = {
  profession: "Developer",
  country: "USA",
};

const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);

// Spread in Function Calls
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [3, 4, 5];

const result = sum(...numbers);
console.log(result);

// Spread with Strings
const Str = "Hello";
const charArray = [...Str];
console.log(charArray);

// Rest Parameters in Functions
function multiply(factor, ...args) {
  return args.map((num) => num * factor);
}

const multipliedValues = multiply(2, 1, 2, 3, 4);
console.log(multipliedValues); // Output: [2, 4, 6, 8]
