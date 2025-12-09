// The OR operator returns the first truthy value.

console.log(5 || "Hello"); // 5  (5 is truthy, so stops)
console.log(false || "Hi"); // "Hi"
console.log("" || "Default"); // "Default"

// The AND operator returns the first falsy value.

console.log(0 && "Hello"); // 0
console.log(true && "Hi"); // "Hi"
console.log("JS" && 10); // 10
console.log(null && "Anything"); // null

// The Nullish Coalescing Operator (??)
const count = 0;
const result = count ?? 10;
console.log(result);

let username = null;
let displayName = username ?? "Guest";

console.log(displayName);

// Combining with Logical Operators
let input = "";
let defaultInput = input || "Default Input";
console.log(defaultInput); // 'Default Input'

let nullInput = null;
let safeInput = nullInput ?? "Safe Input";
console.log(safeInput); // 'Safe Input'

// Short-Circuiting with Functions and nullish Coalescing
function fetchData() {
  console.log("Fetching data...");
  return "Data";
}

let data = null;
let finalData = data || fetchData(); // fetchData() is called
console.log(finalData);

data = "Cached Data";
finalData = data || fetchData();
console.log(finalData); // fetchData() is not called

data = null;
finalData = data ?? fetchData(); // fetchData() is called
console.log(finalData);

data = "Cached Data";
finalData = data ?? fetchData();
console.log(finalData); // fetchData() is not called
