// Lopping array ( the for of loop)
const numbers = [10, 20, 30];

for (const num of numbers) {
  console.log(num);
}

// looping over set
const numSet = new Set([1, 3, 4, 5]);

for (const n of numSet) {
  console.log(n);
}

// Getting Index with for-of
const number = [10, 20, 30];

for (const [index, num] of number.entries()) {
  console.log(index, num);
}

// looping over string
const greeting = "Hello";

for (const char of greeting) {
  console.log(char);
}

// for-in
const person = {
  name: "Omar",
  age: 30,
  city: "Orlando",
};

for (const key in person) {
  console.log(key, person[key]);
}
