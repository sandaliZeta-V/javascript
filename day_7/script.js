1.//Immutability Test -Add new user without mutation,Update name of user id = 2 immutably,Delete user id = 1 immutably

 const users = [
            { id: 1, name: "Riya" },
            { id: 2, name: "Sahil" }
        ];

        console.log("Original Users:", users);

        const newUser = { id: 3, name: "Tim" };
        const updatedUsers = [...users, newUser];       // Add new user (immutably)
        console.log("After Adding User:", updatedUsers);

        const updatedNameUsers = users.map(user =>      // Update name of user id = 2 (immutably)
            user.id === 2
                ? { ...user, name: "Rahul" }
                : user
        );
        console.log("After Name Update:", updatedNameUsers);

        const deleteUser = users.filter(user => user.id !== 1);     // delete user
        console.log(deleteUser);


2.//Props Simulation (Before React) -Pass object as argument,Destructure inside function,Explain how this is similar to React props

  //Passing object as argument:

  function showStudent(student) {
    console.log(student.name);
    console.log(student.age);
    console.log(student.course);
}

const studentData = {
    name: "Sandali",
    age: 21,
    course: "MCA"
};

showStudent(studentData); // passing object

//Destructuring Inside Function:

function showStudent({ name, age, course }) {
    console.log(name);
    console.log(age);
    console.log(course);
}

const studentData = {
    name: "Sandali",
    age: 21,
    course: "MCA"
};

showStudent(studentData);

/*  Explain how this is similar to React props:
Similarities:
JavaScript (Before React)	        React
Object passed to function	        Props passed to component
Function receives object	        Component receives props
Destructuring used	                Destructuring used
Read-only values	                Props are read-only
Function output depends on data	    UI depends on props*/


3./*API + State Flow (React Simulation) - Create function fetchUsers()
Use async/await , Use:loading = true,data = [],error = null
Print:“Loading…” while fetching , Data on success ,Error message on failure
Explain how React handles this with useState + useEffect*/

    async function fetchUsers() {

            let loading = true;
            let data = [];
            let error = null;

            document.getElementById("demo").innerHTML = "Loading...";

            try {

                let response = await fetch("https://jsonplaceholder.typicode.com/users");

                if(!response.ok) {
                    throw new Error("failed to fetch data!");
                }

                data = await response.json();
                loading = false;

                document.getElementById("demo").innerHTML = 
                "data loaded successfully\n" + data.map(user => user.name).join(",");
                
            } catch (err) {
                loading = false;
                error = err.message;

                document.getElementById("demo").innerHTML = 
                "Error:" + error;
            }
            
        }

/*React uses useState to manage loading, data, and error states, 
and useEffect to fetch data after the component renders. 
While the API call is in progress, it shows “Loading…”.
On success, data is displayed; on failure, an error message is shown. 
This approach ensures clean, predictable, and user-friendly data fetching in React.*/





