# Promises
In this Repo there is implementation and use case of Promises
# Basic Structure of Promise
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

