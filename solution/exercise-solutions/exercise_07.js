function exercise_07() {
  /* 
   
    Exercise 7
    
    JSON Conversion: 
		
		1. Create a JavaScript object, convert it to a JSON string, and log the result to the console.

  */

  // CODE IN THE OPEN LINES BELOW

  const myObject = {name: "Alice",age: 36, occupation: "Engineer"}; 
  const jsonString = JSON.stringify(myObject);
  console.log(jsonString); // Output: '{"name":"Alice","age":36,"occupation":"Engineer"}'


  // CODE IN THE OPEN LINES ABOVE
}
