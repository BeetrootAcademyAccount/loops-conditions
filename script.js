/*
 +{variable} -  convert to number
 ++{} - increment before executing the expression
 {}++ - increment after executing the expression
*/

var amount = "1";

amount = +amount; //convert to number

const convertedValue = 1 + ++amount + amount++;

console.log(convertedValue);
console.log(convertedValue);
console.log(typeof convertedValue);
console.log(amount);

/*
In the if statement the expression is checked if it is true or false
Values of variable null, undefined or error are considered truthy
In order to make sure that the value is true or false, you can double negate with !!
*/

var unknownAmount;

if (!!(unknownAmount > 2)) {
  console.log("The amount is ", amount);
}

/*
In an if else statement the code beneath the first expression that is true will execute;
once it is finished it will not check other options and will directly jump to the first line after the if else block  
*/

amount = 2;

if (amount > 10) {
  console.log("The amount is ", amount);
} else if (amount < 10) {
  console.log("Value is smaller than 10");
} else if (amount < 5) {
  console.log("Value is smaller than 5");
} else if (amount < 3) {
  console.log("Value is smaller than 3");
} else if (amount == 2) {
  console.log("Value is null");
} else {
  console.log("Value is undefined");
}

/*
Switch statements are used to check values
Do not forget to break after each case, otherwise it execute all cases after the correct case
*/

switch (amount) {
  case 10:
    console.log("Amount is 10");
    break;
  case 5:
    console.log("Amount is 5");
    break;
  case 3:
    console.log("Amount is 3");
    break;
  case 2:
    console.log("Amount is 2");
    break;
  default:
    console.log("Amount is... I have no idea");
}

console.log("End");

/*
Switch can also be used with string values
you can use several cases for one code execution
*/
var selectedName = "Ivo";

switch (selectedName) {
  case "Ivan":
  case "Georgi":
  case "Ivo":
  case "Rumen":
    console.log("This person is likely Bulgarian");
    break;
  case "Johnny":
    console.log("This person is likely Johnny");
    break;
  default:
    console.log("I have no idea");
    break;
}

/*
In for loops we usually use i as our loop variable, it is short for index
always check if the constraint and the direction of your value change are correct, you do not want an infinite loop
*/

for (let i = 2; i <= 50; i++) {
  console.log("Hello Mom");
}

/* 
In a while loop the changing of the loop variable is done within the code, do not forget to add it otherwise you will get an infinite loop
*/
amount = 50;

while (amount >= 20) {
  console.log("Hello Mom", --amount);
}

/* 
The do while loop works in the same way as the while loop but it also runs the code once before checking the conditions in the while expression
*/

amount = "50";

do {
  console.log(amount);
  amount--;
} while (5 < amount + 1 && amount + 1 < 100);

while (5 < amount + 1 && amount + 1 < 100) {
  console.log(amount);
  amount--;
}

console.log("End");
