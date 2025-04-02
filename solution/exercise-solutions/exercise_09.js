function exercise_09() {
  /* 
   
    Exercise 9
    
    Math Object: 
		
		1. Create a decimal number variable that has at least 5 numbers after the "."
    2. Then, use Math.round(), Math.ceil(), and Math.floor() on that number, logging 
       the result to the console each time

  */

  // CODE IN THE OPEN LINES BELOW

  const decimalNumber = 3.14159; 
  const rounded = Math.round(decimalNumber);
  const ceiled = Math.ceil(decimalNumber);
  const floored = Math.floor(decimalNumber);
  
  console.log("Original number:", decimalNumber); 
  console.log("Rounded:", rounded);                
  console.log("Ceiled:", ceiled);                  
  console.log("Floored:", floored);    

  // CODE IN THE OPEN LINES ABOVE
}
