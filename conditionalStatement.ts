// If Else Block & If-Else-If Block

let myLegalAge = 10;
if(myLegalAge>=18){
    console.log("Welcome Adult");
    console.log("You are over 18");
}
else{
    console.log("Welcome Minor");
    console.log("You are under 18"); 
}

let colour = "Red";
if(colour =="Red"){
    console.log("Roses");
}
else if(colour=="White"){
    console.log("Jasmine");
}
else if(colour=="Pink"){
    console.log("Hibiscus");
}
else{
    console.log("No Flowers found");
}


let myLegalAge1 = 40;
if(myLegalAge1>=18){
   if(myLegalAge1>=60){
        console.log("Senior Citizen")
   }
   else{
    console.log("Not a Senior Citizen")
   }
}
else{
    console.log("Welcome Minor");
    console.log("You are under 18"); 
}