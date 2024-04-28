function greeeting(){
    console.log("Hello Students");
}

function greeetingStudent(name:string){
    console.log(`Hello ${name}`);
}

function addition(num1:number,num2:number):number{
    return num1+num2;
}

let additionArrow=(num1:number,num2:number):number => num1 + num2;

function concat(str1:string,str2:string):string{
    return str1+str2;
}

greeeting();
greeetingStudent("Vignesh");
let sumOutput = addition(2,3);
let sumOutput2 = additionArrow(3,6);

console.log(sumOutput);
console.log(sumOutput2);
console.log(concat("Vignesh","S"));