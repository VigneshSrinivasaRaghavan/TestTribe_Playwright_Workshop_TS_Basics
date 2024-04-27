// Array Litreal Syntax
let fruitArray:string[] = ["apple","banana","grapes","mango"];

// Array Constructor
let fruitArray2 = new Array("Kiwi","Pineapple");

console.log(fruitArray[2]);
fruitArray[2] = "Black Grapes";
console.log(fruitArray[2]);

fruitArray.push("Kiwi");
console.log(fruitArray);
fruitArray.pop();
console.log(fruitArray);
fruitArray.shift();
console.log(fruitArray);
fruitArray.unshift("Green Apple");
console.log(fruitArray);
let slicedArray = fruitArray.slice(0,3);
console.log(slicedArray);

let numberArray:number[] = [1,2,3,4,5];
let mapNumberArray = numberArray.map((num)=>num*2);
console.log(mapNumberArray);
let filterNumberArray = numberArray.filter((num)=> num>3);
console.log(filterNumberArray);