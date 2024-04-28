// Global, Local Scope, Block Scope

const numberOne = 10;

function greetOne(){
    let localVariable = 25;
    console.log(numberOne);
    console.log(localVariable);
}

{
    let blockVariable = 35;
    console.log(blockVariable);
}

greetOne();
const numberTwo = numberOne + 10;