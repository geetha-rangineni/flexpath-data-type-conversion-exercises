import { fileURLToPath } from "url";

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  /*

    To run the code you write for each exercise, change the `exercise_01()` code below to match the EXACT name
     of the exercise, as it is written in the line `function exercise_xx`.
    
     For Example:

     If I want to run exercise_05 below, I would change the code below from "exercise_01()" to
     "exercise_05()", save this file. 
		 
		 Then, when I run this file by running `node exercise.js`
     in the VS Code terminal while inside this folder, your code for exercise_05 will run.

  */

  // Modify the line of code BELOW to run a different exercise
  exercise_01();
  // Modify the line of code ABOVE to run a different exercise
}

function exercise_01() {
  /* 
   
    Exercise 1
    
    Data Types: 
		
		1. Create 4 variables to hold a value for each of these four data types:
				- String
				- Number
				- Boolean
				- Object
		2. Then, create a variable and DON'T assign it any value, just declare it. 
		3. Then, using the `typeof` keyword, log the type of each variable (including the unassigned one) to the console
  
  */

  // CODE IN THE OPEN LINES BELOW

  const myString = "Hello, World!"; // String
  const myNumber = 27;               // Number
  const myBoolean = true;            // Boolean
  const myObject = { key: "value" }; // Object
  let unassignedVariable;
  console.log(typeof myString);          // Output: string
  console.log(typeof myNumber);          // Output: number
  console.log(typeof myBoolean);         
  console.log(typeof myObject);          
  console.log(typeof unassignedVariable); 
}
exercise_01();
  // CODE IN THE OPEN LINES ABOVE


function exercise_02() {
  /* 
   
    Exercise 2
    
    Type Conversion: 
		
		1. Create a variable and assign it a Number value
    2. Using the previous variable, convert it to a String and assign it to a new variable
		3. Then, log this new variable to the console along with its type, using typeof

  */

  // CODE IN THE OPEN LINES BELOW

  let num = 567;
  let numAsString = String(num);
  console.log(numAsString); // "567"
  console.log(typeof numAsString); // "string"


  // CODE IN THE OPEN LINES ABOVE
}
exercise_02();

function exercise_03() {
  /* 
   
    Exercise 3
    
    Boolean Conversion: 
		
		1. Create 2 variables: 
      * one that stores a Boolean conversion of the number 0 
      * one that stores a Boolean conversion of the number 1
    2. Then, log both of these variables to the console to see what 
        Booleans these numbers are converted to

  */

  // CODE IN THE OPEN LINES BELOW

  
const booleanZero = Boolean(0); // Converts number 0 to Boolean
const booleanOne = Boolean(1);   // Converts number 1 to Boolean
console.log(booleanZero); // Output: false
console.log(booleanOne);  // Output: true

  // CODE IN THE OPEN LINES ABOVE
}
exercise_03();

function exercise_04() {
  /* 
   
    Exercise 4
    
    Handling NaN: 
		
		1. Create a variable that attempts to convert a non-numeric string to a number
    2. Then, using the method isNan(), check if this variable is Not a Number (NaN)

  */

  // CODE IN THE OPEN LINES BELOW

  
const nonNumericString = "Hello, World!";
const convertedNumber = Number(nonNumericString); // Attempt to convert to Number
const isNotANumber = isNaN(convertedNumber);
console.log(convertedNumber); // Output: NaN
console.log(isNotANumber);     // Output: true

  // CODE IN THE OPEN LINES ABOVE
}
exercise_04();

function exercise_05() {
  /* 
   
    Exercise 5
    
    Template Literals: 
		
		1. Create a variable that stores your age as a Number.
    2. Create a template literal string that embeds this variable in the message:
        "I am [age] years old."
		2. Then, log this string to the console

  */

  // CODE IN THE OPEN LINES BELOW

  
const myAge = 27; // Replace 27 with your actual age
const message = `I am ${myAge} years old.`;
console.log(message); // Output: "I am 27 years old."

  // CODE IN THE OPEN LINES ABOVE
}
exercise_05();

function exercise_06() {
  // DONT edit the code below
  const name = "Alice";
  const number = 5;
  // DONT edit the code above

  /* 
   
    Exercise 6
    
    Concatenate Strings: 
		
		1. Using the `name` and `number` variables above and the `+` operator, 
       create a new string that says "Alice has 5 apples". Then log this string to the console.
       
    2. Then, using the `name` and `number` variables above and a template literal, create a new 
       string that says "Alice has 5 apples". Then log this string to the console.
  */

  // CODE IN THE OPEN LINES BELOW
  //+ operator
  const concatenatedString = name + " has " + number + " apples.";
  console.log(concatenatedString); // Output: "Alice has 5 apples."

  //using a template literal
  const templateString = `${name} has ${number} apples.`;
  console.log(templateString); // Output: "Alice has 5 apples."
  // CODE IN THE OPEN LINES ABOVE
}
exercise_06();
function exercise_07() {
  /* 
   
    Exercise 7
    
    JSON Conversion: 
		
		1. Create a JavaScript object, convert it to a JSON string, and log the result to the console.

  */

  // CODE IN THE OPEN LINES BELOW

  const myObject = {
    name: "Alice",
    age: 36,
    occupation: "Engineer"
}; 
const jsonString = JSON.stringify(myObject);
console.log(jsonString); // Output: '{"name":"Alice","age":36,"occupation":"Engineer"}'

  // CODE IN THE OPEN LINES ABOVE
}
  exercise_07();


function exercise_08() {
  // DONT edit the code below
  const jsonStringToParse = '{"name": "Charlie", "age": 35}';
  // DONT edit the code above

  /* 
   
    Exercise 8
    
    JSON Parsing: 
		
		1. Using the JSON string stored in `jsonStringToParse`, parse this string into an object
       and then print one of its properties.

  */

  // CODE IN THE OPEN LINES BELOW

  // Parse the JSON string into an object
  const parsedObject = JSON.parse(jsonStringToParse);

  // Print one of its properties 
  console.log(parsedObject.name); // Output: "Charlie"
}

  // CODE IN THE OPEN LINES ABOVE
  exercise_08();

function exercise_09() {
  /* 
   
    Exercise 9
    
    Math Object: 
		
		1. Create a decimal number variable that has at least 5 numbers after the "."
    2. Then, use Math.round(), Math.ceil(), and Math.floor() on that number, logging 
       the result to the console each time

  */

  // CODE IN THE OPEN LINES BELOW

  // Step 1: Create a decimal number variable
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
exercise_09();

function exercise_10() {
  /* 
   
    Exercise 10
    
    Decimal Precision: 
		
		1. Create a decimal number variable that has at least 5 numbers after the "."
    2. Then, use toFixed() on the variable and round it to 2 decimal places.
       Log the result to the console.

  */

  // CODE IN THE OPEN LINES BELOW

  const decimalNumber = 3.14159; // A number with 5 decimal places
  const roundedNumber = decimalNumber.toFixed(2);
  console.log(roundedNumber); // Output: "3.14"
  // CODE IN THE OPEN LINES ABOVE
}
exercise_10();

function exercise_11() {
  /* 
   
    Exercise 11
    
    Locale Number Formatting: 
		
		1. Create a variable to hold a large number with 2 decimal points at the end of it
    2. Create a new Intl.NumberFormat object for the US locale
    3. Then, use this new objects `format` function to format the variable from step 1.
       Store the result in a new variable
    4. Log the new variable from step 3 to the console.

  */

  // CODE IN THE OPEN LINES BELOW

   // Step 1: Create a variable to hold a large number with 2 decimal points
   let largeNumber = 1234567.89;

   // Step 2: Create a new Intl.NumberFormat object for the US locale
   let formatter = new Intl.NumberFormat('en-US', {minimumFractionDigits: 2,maximumFractionDigits: 2});
   let formattedNumber = formatter.format(largeNumber);
  console.log(formattedNumber);
 }
 // CODE IN THE OPEN LINES ABOVE
 exercise_11();

function exercise_12() {
  /* 
   
    Exercise 12
    
    Locale-Based Currency: 
		
		1. Create a variable named `salary` that holds a 5 digit integer
    2. Create a new Intl.NumberFormat object for the US locale, and provide
       an object as the second argument with these property/value pairs:

       {style: "currency", currency: "USD"}

    3. Use this formatter to format the variable from step 1.
       Then log the result to the console

  */

  // CODE IN THE OPEN LINES BELOW

  let salary = 50000; // Step 1: Create a variable named `salary` that holds a 5 digit integer
  let usdFormatter = new Intl.NumberFormat("en-US", { // Step 2: Create a new Intl.NumberFormat object for the US locale
  style: "currency",
  currency: "USD",
   });
  console.log(usdFormatter.format(salary)); // Step 3: Log the formatted salary to the console
 

  // CODE IN THE OPEN LINES ABOVE
}
exercise_12();
function exercise_13() {
  /* 
   
    Exercise 13
    
    Other Locale Currency: 
		
		1. Create a variable named `salary` that holds a 6 digit integer
    2. Create a new Intl.NumberFormat object using "ja-JP" for the first argument, 
       and provide an object as the second argument with these property/value pairs:

      {style: "currency", currency: "JPY"}

    3. Use this formatter to format the variable from step 1.
       Then log the result to the console

  */

  // CODE IN THE OPEN LINES BELOW
  let salary = 110000;
  let jpnFormatter = new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
  });
  console.log(jpnFormatter.format(salary)); // "¥50,000"

  // CODE IN THE OPEN LINES ABOVE
}
exercise_13();
function exercise_14() {
  /* 
   
    Exercise 14
    
    Date String Conversion: 

    1. Create a new Date object and assign it to a variable
    2. Then, call toDateString on the variable and print the result to the console
    3. Then, call toTimeString on the variable and print the result to the console
		
  */

  // CODE IN THE OPEN LINES BELOW

  let currentDate = new Date(); // Create a new Date object for the current date and time
  console.log(currentDate.toDateString()); // Log the date in a readable format
  console.log(currentDate.toTimeString()); // Log the time in a readable format space";

  // CODE IN THE OPEN LINES ABOVE
}
exercise_14();
function exercise_15() {
  /* 
   
    Exercise 15
    
    Locale Date Formatting

    1. Create a new Date object and assign it to a variable
    2. Call the toLocaleDateString method on it and convert it to an en-US format date.
       Log it to the console.
    3. Call the toLocaleDateString method on it again and convert it to an en-GB format date.
       Log it to the console
		
  */

  // CODE IN THE OPEN LINES BELOW

   
    
    let currentDate = new Date();
    let usFormattedDate = currentDate.toLocaleDateString('en-US');
    console.log(usFormattedDate); // Example output: "4/2/2025"
    let gbFormattedDate = currentDate.toLocaleDateString('en-GB');
    console.log(gbFormattedDate); // Example output: "02/04/2025"
  
  

  // CODE IN THE OPEN LINES ABOVE
}
exercise_15();

function exercise_16() {
  /* 
   
    Exercise 16
    
    Error Handling: 
		
		1. Write code that tries to parse invalid JSON and uses a try-catch block to handle the error.

  */

  // CODE IN THE OPEN LINES BELOW

  let invalidJSON = "{ name: 'John', age: 30 }"; // Missing double quotes around keys
  try {
    // Attempt to parse the invalid JSON
    let parsedData = JSON.parse(invalidJSON);
    console.log(parsedData); // This line will not execute
  } catch (error) {
    
    console.error("Error parsing JSON:", error.message);
  }


  // CODE IN THE OPEN LINES ABOVE
}
exercise_16();

function exercise_17() {
  /* 
   
    Exercise 17

    1. Convert the Boolean value 'true' to a string.
       Log it to he console
    
  */

  // CODE IN THE OPEN LINES BELOW

    
    let boolValue = true;
    let stringValue = String(boolValue);
     console.log(stringValue); // Output: "true"
  
  // CODE IN THE OPEN LINES ABOVE
}
exercise_17();

function exercise_18() {
  /* 
   
    Exercise 18

    1. Create a variable that holds a 9-digit number with 2 decimal places.
    2. Then, use Intl.NumberFormat to create a number formatter for the US, Russia, and Japan.
       For each formatter, provide an object as the second argument with these property/value pairs:

      {style: "currency", currency: "[proper currency string]"}

       Hint: You probably don't know the string arguments to use to do this for Russia.
             Go to Google.com and search "Intl.NumberFormat argument for Greek format"
             Then also look up "Intl.NumberFormat option for greek currency"
             
             You will forget things all the time in this job, even as an expert.
             There's a lot of information to keep in your head. 

             That's why learning to put together good search prompts in Google and other
             search engines is CRUCIAL in this job.

             Don't worry, you'll get better at this over time as you pick up the terminology
             and understand how programs are written/executed.

    3. Then use each formatter to format the variable from step 1, and log it to the console
       each time.

  */

  // CODE IN THE OPEN LINES BELOW

  let largeNumber = 123456789.12;
  let usFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });  // US currency format

  let ruFormatter = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
  }); // Russian currency format

  let jpFormatter = new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
  }); // Japanese currency format

  
console.log(usFormatter.format(largeNumber)); 
  console.log(ruFormatter.format(largeNumber)); 
  console.log(jpFormatter.format(largeNumber)); 

  // CODE IN THE OPEN LINES ABOVE
}
exercise_18();
function exercise_19() {
  /* 
   
    Exercise 19
    
    Date Arithmetic: 

    1. Create a variable to hold a new Date object for today's date.
    2. Create a variable to hold a new Date object for a future date in 2025
    3. Find the time difference between the future date and the current date
    4. Convert this time difference to days
    5. Log the day difference to the console
		
  */

  // CODE IN THE OPEN LINES BELOW

   
    let today = new Date();
    let futureDate = new Date("2025-12-31");
    let timeDifference = futureDate - today; // Difference in milliseconds
    let daysDifference = timeDifference / (1000 * 60 * 60 * 24); // Convert ms to days
    console.log(`The difference between today and the future date is approximately ${Math.floor(daysDifference)} days.`);
  

  // CODE IN THE OPEN LINES ABOVE

}
exercise_19();