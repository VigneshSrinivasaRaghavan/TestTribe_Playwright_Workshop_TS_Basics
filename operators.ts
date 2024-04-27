// Artihmetic Operators
let a = 20;
let b = 10;
let sum = a+b;
let diff = a-b;
let multiply = a*b;
let quotient = a/b;
let reminder = a%b;

// Comparison Operators
let x = 5;
let y = 10;

let isEqual = x==y //false
console.log(isEqual);
let isStrictEqual = x===y //false
let isNotEqual = x!=y //true
let isGreater = x>y //false
let isGreaterThanEqual = x>=y //false
let isLower = x<y;
let isLowerThanEqual = x<=y;

// Logical Operators
let isTrueVariable = true;
let isFalseVariable = false;
let andResult = isTrueVariable && isFalseVariable; // false
let orResult = isTrueVariable || isFalseVariable; // true
let notResult = !isTrueVariable //false

// Assignment Operators -> Arithmetic Opertaor + "=" Symbol
let number1 = 5;
console.log(number1); //5
number1 += 3;
console.log(number1); //8
number1 -= 3;
number1 *= 3;
number1 /= 3;
number1 %= 3;

// Ternary Operator
let myAgeNew = 10;
let message = myAgeNew>=18 ? "Adult" : "Minor";
console.log(message); // Minor
