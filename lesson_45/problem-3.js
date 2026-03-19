//Author: Yankho Ngolleka <codaMW>

//getting user input using the prompt function
var num = prompt("Enter a number: ");

//checking the condtion for when the number is negative
if(num < 0) {
    alert("The number is negative");
}
//checking the condtion for when the number is zero 
else if(num == 0) {
    alert("The number is zero");
} 
//a catch all if all the above cases are false
else {
    alert("The number is positive");
}

/*
    ----------------------------------------
    Desktop test
    ----------------------------------------
    num = -20   =>  The number is negative
    num = 0     =>  The number is zero
    num = 10    =>  The number is positive
    ----------------------------------------
*/