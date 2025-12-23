// 1. Arrays- 1.Create array of 5 numbers 2.Print:First elementLast element 3.Add new element at end 4.Remove last element
 
        const array = [2, 3, 4, 5, 6];      // Create an array of 5 numbers

        console.log("First element:", array[0]);    // Print first element

        console.log("Last element:", array[array.length - 1]);      // Print last element

        array.push(7);      // Add a new element at the end
        console.log("After adding element:", array);

        array.pop();        // Remove last element
        console.log("After removing last element:", array);


//2. Array Methods (push, pop, shift, unshift)-1.Add 3 elements to array 2.Remove first element 3.Remove last element 4.Print final array

        const array = [];     // created an empty array

            array.push(10);  // adding elements to array
            array.push(20);
            array.push(25);

            console.log("The 3 elements pushed are:", array);

            array.shift();  // removing first element
            console.log("After removing first element:", array);

            array.pop();    // removing last element
            console.log("After removing last element:", array);

            console.log("Final array:", array);  // printing final array
        
// 3.Objects -1.Create object student name,rollNo,marks 2.Print all values 3.Update marks 4.Add new property grade

     const student = {                          //created object named student
                name: "Riya Patel",
                rollNo: 21,
                Marks: 77,
            };

            console.log("Name: " + student.name);      // printing all student details
            console.log("RollNo: " + student.rollNo);
            console.log("Marks: " + student.Marks);

            student.Marks = 88;             // updated student marks
            console.log("updated student marks: " + student.Marks);    
            
            student.grade = "A";
            console.log("Grade: " + student.grade);    // new property grade added

// 4. Array of Objects-1.Create array of 5 students 2.Each object should have:id,name,age,marks 3.Print all student names

             const students = [

                    {id:1, Name:"Riya", Age:15, Marks:67},
                    {id:2, Name:"Minal", Age:16, Marks:75},
                    {id:3, Name:"Raghav", Age:12, Marks:89},
                    {id:4, Name:"Amol", Age:13, Marks:56},
                    {id:5, Name:"Amit", Age:15, Marks:60},
                ];

                console.log("student details: ");

                for (let i = 0; i < students.length; i++) {
                    console.log(
                     "ID:", students[i].id,
                     "Name:", students[i].Name,
                     "Age:", students[i].Age,
                     "Marks:", students[i].Marks
                    );
                }


// 5.Use map() to: Print student names , Add result: "Pass" to each student\

   const students = ["Amit" , "Siya" , "Rohan"];       // created array named students
            students.map(function(name){        // print student names using map() method in normal function
                console.log(name);
            })

            let resultList = students.map(name => name + " - Pass");    //adding result "pass" using arrow function
            console.log(resultList);

// 6. filter() (Used for search & conditions) -
// 1.Filter students who scored more than 60

   let marks = [67,68,,87,23,45,55];    
            let passedStud = marks.filter(function(mark){
                return mark > 60;
            });

            console.log(passedStud);

// 2.Filter users age > 21
     
    let users = [
        { name: "Ravi", age: 18 },
        { name: "Sneha", age: 25 },
        { name: "Ankit", age: 22 },
        { name: "Pooja", age: 20 }
        ];

        let adults = users.filter(function(user) {
         return user.age > 21;
    });

    console.log(adults);
    
// 3.Filter even numbers from array
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

        let evenNumbers = numbers.filter(function(num) {
         return num % 2 === 0;
     });

    console.log(evenNumbers);

//find()(Single object) -1.Find student by roll number
  
    let students = [
        { roll: 1, name: "Amit" },
        { roll: 2, name: "Neha" },
        { roll: 3, name: "Rahul" }
    ];

    let student = students.find(s => s.roll === 2);

    console.log(student);

//2.Find product by id

     let products = [
        { id: 101, name: "Mobile", price: 15000 },
        { id: 102, name: "Laptop", price: 50000 },
        { id: 103, name: "Headphones", price: 2000 }
    ];

    let product = products.find(p => p.id === 102);

    console.log(product);

// reduce() - 1.Calculate total marks of students
   
   let marks = [70, 80, 65, 90];

    let totalMarks = marks.reduce(function(sum, mark) {
        return sum + mark;
    }, 0);

    console.log("Total Marks:", totalMarks);

//2.Calculate total price of cart items

   let cart = [
        { name: "Pen", price: 10 },
        { name: "Book", price: 50 },
        { name: "Bag", price: 400 }
    ];

    let totalPrice = cart.reduce(function(total, item) {
        return total + item.price;
    }, 0);

    console.log("Total Cart Price:", totalPrice);

// Destructuring (React Props Style) - 1.Destructure student object

    // student object
    let student = {
        name: "Sandali",
        age: 22,
        course: "MCA"
    };

    // destructuring object
    let { name, age, course } = student;

    // output
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Course:", course);

// 2.Destructure array elements

     // array
    let numbers = [10, 20, 30];

    // destructuring array
    let [a, b, c] = numbers;

    // output
    console.log("a =", a);
    console.log("b =", b);
    console.log("c =", c);













            
