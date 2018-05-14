var age = prompt("What is your age?");

if(age < 0) {
	alert("You need to enter the correct age");
}

 else if(age == 21) {
	alert("Happy 21st Birthday!");
}
//if age is odd
else if(age % 2 !== 0) {
	alert("Your age is odd");
}
else if(Math.sqrt(age) % 1 == 0) {
	alert("Your age is a perfect square");
}
else {
	("You are ok...");
}