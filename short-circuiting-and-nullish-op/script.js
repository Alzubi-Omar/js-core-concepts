// // The OR operator returns the first truthy value.

// console.log(5 || "Hello"); // 5  (5 is truthy, so stops)
// console.log(false || "Hi"); // "Hi"
// console.log("" || "Default"); // "Default"

// // The AND operator returns the first falsy value.

// console.log(0 && "Hello"); // 0
// console.log(true && "Hi"); // "Hi"
// console.log("JS" && 10); // 10
// console.log(null && "Anything"); // null

// // The Nullish Coalescing Operator (??)
// const count = 0;
// const result = count ?? 10;
// console.log(result);

// let username = null;
// let displayName = username ?? "Guest";

// console.log(displayName);

// // Combining with Logical Operators
// let input = "";
// let defaultInput = input || "Default Input";
// console.log(defaultInput); // 'Default Input'

// let nullInput = null;
// let safeInput = nullInput ?? "Safe Input";
// console.log(safeInput); // 'Safe Input'

// // Short-Circuiting with Functions and nullish Coalescing
// function fetchData() {
//   console.log("Fetching data...");
//   return "Data";
// }

// let data = null;
// let finalData = data || fetchData(); // fetchData() is called
// console.log(finalData);

// data = "Cached Data";
// finalData = data || fetchData();
// console.log(finalData); // fetchData() is not called

// data = null;
// finalData = data ?? fetchData(); // fetchData() is called
// console.log(finalData);

// data = "Cached Data";
// finalData = data ?? fetchData();
// console.log(finalData); // fetchData() is not called

// with assignment operators
function logMessage() {
  console.log("Log message function called");
  return "Logged Message";
}

//  Using ||= operator
let log = "";
log ||= logMessage();
// console.log(log);

// Using &&= operator
let status = "Active";
status &&= logMessage();
// console.log(status);

// Using ??= operator
let info = null;
info ??= logMessage();
// console.log(info);

// preventing unnecessary function calls
let config = { timeout: 0 };

// config.timeout ||= 3000; // This will overwrite 0 with 3000
config.timeout ??= 3000; // This will keep 0 as it is not nullish
console.log(config.timeout);

config.timeout &&= 5000; // This will call the function since timeout is truthy
console.log(config.timeout);

config.timeout ||= 7000; // This will not call the function since timeout is truthy
console.log(config.timeout);
