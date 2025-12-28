1.//Synchronous vs Asynchronous JS -Predict output order , Change timeout to 0 and observe result, Explain why async runs later

//Predict Output Order
console.log("Start");

setTimeout(() => {
    console.log("Async Task");
}, 1000);

console.log("End");

//Change Timeout to 0 ms
console.log("Start");

setTimeout(() => {
    console.log("Async Task");
}, 0);

console.log("End");

/* Even when the timeout is set to 0 ms, the asynchronous code runs after the synchronous code. 
This is because JavaScript first completes all synchronous tasks in the call stack. 
The async function is placed in the task queue and is executed only when the call stack becomes empty, so it always runs later.*/

2.//setTimeout & setInterval  -
//Print numbers 1–10 every second.

let num = 1;

let intervalId = setInterval(function () {
    console.log(num);
    num++;

    if (num > 10) {
        clearInterval(intervalId); // stop after 10
    }
}, 1000);

//Stop execution after 10 seconds.

let count = 1;

let intervalId = setInterval(function () {
    console.log("Count:", count);
    count++;
}, 1000);

// Stop after 10 seconds
setTimeout(function () {
    clearInterval(intervalId);
    console.log("Execution stopped after 10 seconds");
}, 10000);

// Create digital clock using setInterval

function showTime() {
    let now = new Date();
    let time = now.toLocaleTimeString();
    document.getElementById("clock").innerHTML = time;
}

// Update time every second
setInterval(showTime, 1000);

3.//Callbacks (Why problem exists) -Create function with callback,Simulate data fetch after 3 seconds,Print result using callback.

function fetchData(callback) {
            setTimeout(() => {
                let data = "Data fetched successfully!";
                callback(data);   // calling callback function
            }, 3000);
        }

        // callback function
        function showResult(result) {
            console.log(result);
        }

        // function call
        fetchData(showResult);

4.//Promises (Solution to Callbacks)-Create promise:Resolve if marks ≥ 35,Reject if marks < 35,Handle using .then() & .catch()
        
        let marks = prompt("Enter your marks:");

        // Create Promise
        let resultPromise = new Promise((resolve, reject) => {
            if (marks >= 35) {
                resolve("Student Passed ✅");
            } else {
                reject("Student Failed ❌");
            }
        });

        // Handle Promise
        resultPromise
            .then((message) => {
                console.log(message);
                alert(message);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });

5.//Promise Chaining - Create chained promise:Add 10,Multiply by 2,Subtract 5,Print final result

    let number = 5;

    Promise.resolve(number)
        .then(result => {
            result = result + 10;   // Add 10
            return result;
        })
        .then(result => {
            result = result * 2;    // Multiply by 2
            return result;
        })
        .then(result => {
            result = result - 5;    // Subtract 5
            return result;
        })
        .then(finalResult => {
            console.log("Final Result:", finalResult);
        });

6.//async / await - Convert Promise code to async/await.Handle error using try/catch.Explain why async/await is better

//1. PROMISE-BASED FUNCTION
// This function returns a Promise
     function fetchData() {
        return new Promise((resolve, reject) => {
        let success = true; // change to false to see error

        setTimeout(() => {
            if (success) {
                resolve("Data fetched successfully (Promise)");
            } else {
                reject("Error while fetching data (Promise)");
            }
        }, 2000);
    });
}

// 2. USING PROMISE (.then / .catch)
    fetchData()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });

// 3. CONVERT PROMISE TO ASYNC/AWAIT
// async function
async function getData() {
    try {
        // await waits until the Promise is resolved
        let result = await fetchData();
        console.log(result + " using async/await");
    } 
    catch (error) {
        // handles error
        console.log("Caught error:", error);
    }
}

// calling async function
getData();

/*4. WHY ASYNC / AWAIT IS BETTER - 
1. Code looks like normal synchronous code
2. Easier to read and understand
3. No chaining of .then() and .catch()
4. Error handling is simple using try/catch
5. Better for large and complex programs
*/

7.//Fetch API (Real API Calls) -Fetch users from APIPrint:Name,Email,Handle error using try/catch

    async function getUsers() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        let users = await response.json();

        let list = document.getElementById("userList");
        list.innerHTML = ""; // clear old data

        users.forEach(user => {
            let li = document.createElement("li");
            li.textContent = `Name: ${user.name}, Email: ${user.email}`;
            list.appendChild(li);
        });

    } catch (error) {
        alert("Error: " + error.message);
        console.log(error);
    }
}


8.//Error Handling -Handle API error Handle promise rejection Show custom error message

function getData() {
    fetch("https://wrong-api-url.com/data") // wrong URL to show error
        .then(response => {
            if (!response.ok) {
                throw new Error("API not responding");
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("result").innerText = data;
        })
        .catch(error => {
            document.getElementById("result").innerText =
                "Custom Error: Unable to fetch data ❌";
            console.log(error.message);
        });
}

9.//Loading State Concept (React Thinking) -Show "Loading..." After API success, show data After error, show error message

      let output = document.getElementById("output");

        // 1. Show loading
        output.innerText = "Loading...";

        // 2. Fake API call using setTimeout
        setTimeout(() => {
            let success = true;   // change to false to see error

            if (success) {
                // API success
                output.innerText = "Data loaded successfully!";
            } else {
                // API error
                output.innerText = "Error: Failed to load data";
            }
        }, 2000); // 2 seconds delay






    
    





