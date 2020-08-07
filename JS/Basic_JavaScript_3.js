function addition_function () {
   var addition = 2 + 5; 
   document.getElementById("math").innerHTML = "2 + 5 = "+addition; 
}

function subtraction_function () {
    var subtraction = 5 - 2;
    document.getElementById("math").innerHTML = "5 - 2 = "+subtraction;
}

function multiplication_function () {
    var multiplication = 5 * 2;
    document.getElementById("math").innerHTML = "5 * 2 = "+multiplication;
}

function division_function () {
    var division = 25 / 5;
    document.getElementById("math").innerHTML = "25 / 5 = "+division;
}

function several_function () {
    var several = 25 / 5 * 8;
    document.getElementById("math").innerHTML = "25 / 5 * 8 ="+several;
}

function remainder_function () {
    var remainder = 25 % 6;
    document.getElementById("math").innerHTML = "The remainder of 25 divided by 6 is "+remainder;
}

function negation_function () {
    var negation = 25
    document.getElementById("math").innerHTML = -negation;
}

var x = 5;

var y = 5;

x++;

y--;
document.write("x is equal to "+x);
 
document.write(" And y is equal to "+y); 

window.alert(Math.random() * 99);

