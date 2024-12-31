/*A Promise is an object that represents the eventual completion or failure of an asynchronous
 operation and its resulting value.

States of a Promise
Pending: The initial state, neither fulfilled nor rejected.
Fulfilled: The operation completed successfully.
Rejected: The operation failed.


Advantages of Promises
Avoids Callback Hell: Easier to manage asynchronous code with chaining (.then).
Error Handling: Allows centralized error handling using .catch.
Improved Readability: Makes asynchronous code look like synchronous code.
Composition: Promises can be composed together using methods like Promise.all() and Promise.race()

Methods of a Promise
Static Methods
Promise.resolve(value)
Returns a promise that resolves with the given value.
Promise.reject(reason)
Returns a promise that is rejected with the given reason.
Promise.all(iterable)
Waits for all promises to resolve or any one to reject.
Promise.allSettled(iterable)
Waits for all promises to either resolve or reject and provides their status.
Promise.race(iterable)
Returns the first promise that resolves or rejects.
Promise.any(iterable)
Returns the first promise that resolves, ignoring rejections.
Instance Methods
.then(onFulfilled, onRejected)
Used to handle the resolved value or rejection reason.
.catch(onRejected)
Handles errors or rejection of a promise.
.finally(onFinally)
Executes a callback regardless of whether the promise was fulfilled or rejected.



romise Lifecycle
A promise is created (pending state).
It either resolves (fulfilled) or rejects (rejected).
.then(), .catch(), and .finally() can be used to handle outcomes.*/




const promise = new Promise((resolve, reject) => {
    const success = true; // Simulate success or failure
    if (success) {
      resolve("Operation Successful!");
    } else {
      reject("Operation Failed!");
    }
  });
  
  promise
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => console.log("Promise Completed!"));

    

    //chaning promises
    const fetchData = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data Fetched"), 1000);
      });
      
      fetchData
        .then(data => {
          console.log(data);
          return "Processing Data";
        })
        .then(processedData => console.log(processedData))
        .catch(error => console.error("Error:", error));
      



//promise.all
        const promise3 = Promise.resolve(10);
const promise6 = Promise.resolve(20);
const promise9 = Promise.resolve(30);

Promise.all([promise3, promise6, promise9])
  .then(results => console.log("Results:", results))
  .catch(error => console.error("Error:", error));



  //Promise.race 
  const promise1 = new Promise(resolve => setTimeout(resolve, 100, "First"));
const promise2 = new Promise(resolve => setTimeout(resolve, 200, "Second"));

Promise.race([promise1, promise2])
  .then(result => console.log("Race Result:", result))
  .catch(error => console.error(error));




  //Error Handling with .catch
  const failingPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject("Error Occurred!"), 1000);
  });
  
  failingPromise
    .then(result => console.log(result))
    .catch(error => console.error("Caught Error:", error))
    .finally(() => console.log("Cleanup Done"));
  