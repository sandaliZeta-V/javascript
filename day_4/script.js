// 1.Print - Student Rahul has scored 85 marks  2.Use template literals only 3.Try with multiple variables

     let student = "Rahul";
            let marks = 85;

            console.log(`Student ${student} has scored ${marks} marks.`);

// Spread Operator (...) – Arrays - 1.Merge two arrays 2.Add new element without modifying original array 3.Copy array using spread operator

     let array1 = [1,2,3];
            let array2 = [4,5,6];
            let array3 = [...array1,...array2];  // merge array1 and array2 to array3

            let Newarray1 = [...array1,7];       // Added new element without modifying original array

            let array4 = [...array1];           // copy array1
            

            console.log("merged array: " + array3);  
            console.log("New element added in original array: " + Newarray1);  
            console.log("copied original array: " + array4);

// Spread Operator (...) – Objects 1.Add new property to object 2.Update marks without changing original object 3.Clone object

     const student = {
                Name: "Dhruv" ,
                marks: 77
            };

            const updatedStudent = {...student,grade: "A"};     // added new element grade in student object

            newStudent = {...student,marks: 88};                // updated student marks without changing original object

            cloneStudent = {...student};                        // cloned original student object

            console.log("original student: " , student);
            console.log("Updated student: " , updatedStudent);
            console.log("New student marks: " , newStudent);
            console.log("cloned student:" , cloneStudent);

// Rest Operator (...) 1.Create function that accepts multiple numbers 

     function acceptNum(...numbers) {
                console.log(numbers);
            }
            acceptNum(20,34,56,67);

// 2.Return max number 

      function max(...numbers) {
            return Math.max(...numbers);
            }
           console.log(max(34,32,67,89,12));  


// 3.Return total sum
      function getSum(...numbers) {
                let sum = 0;

                for (let num of numbers) {
                    sum += num;
                };

                return sum;
            }

            console.log(getSum(10,2,45,6));       

// Default Parameters
//1.Function with default country

      function greetUser(name, country = "India") {
            console.log("Name:", name);
            console.log("Country:", country);
        }

        greetUser("Sandali");          // uses default country
        greetUser("Rahul", "USA");     // overrides default

//2.Function with default discount value

         function calculatePrice (price, discount = 15) {
                 let finalPrice = price - (price * discount / 100);
                  console.log("Original Price:", price);
                  console.log("Discount:", discount + "%");
                  console.log("Final Price:", finalPrice);
        }

        calculatePrice(1000);        // default discount
        calculatePrice(1000, 20);    // custom discount



