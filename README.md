# Promises
In this Repo there is implementation and use case of Promises

Let's break down what happens when you return a Promise:

Promise Initialization: You create a new Promise by constructing it with the new Promise() constructor. Inside this constructor, you provide a callback function that takes two arguments: resolve and reject.

Asynchronous Operation: Inside the Promise callback, you perform the asynchronous operation that the function is responsible for. This could be anything that takes time, like fetching data from a remote server, reading a file, or performing a complex computation.

Resolving or Rejecting the Promise: Once the asynchronous operation is complete, you use the resolve function to fulfill the Promise with the desired result, or you use the reject function to indicate that an error has occurred.

Consuming the Promise: The caller of the function can then use the returned Promise to handle the result of the asynchronous operation using methods like .then() to handle successful cases and .catch() to handle errors.

# Basic Structure of Promise
```
function asyncFunction() {
  return new Promise(function(resolve, reject) {
    // Asynchronous operation
    // If successful, call resolve(result)
    // If an error occurs, call reject(error)
  });
}
```
# Example
```
function fetchDataFromServer() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      const data = { message: "Data fetched successfully" };
      resolve(data); // Fulfill the Promise with the data
      // If an error occurred: reject(new Error("Error fetching data"))
    }, 2000);
  });
}

// Using the returned Promise
fetchDataFromServer()
  .then(function(result) {
    console.log(result.message); // Output: "Data fetched successfully"
  })
  .catch(function(error) {
    console.error(error.message);
  });
```

