// # Review - Conditionals

// NOTE! Pay close attention to creating code with good and consistent code style.

// 1. Save a random whole number between -10 and 10 to a variable.
let varOne = Math.round(Math.random() * 20 - 10);
console.log(varOne);

// 2. If that variable is greater than 0, print "Ye" and otherwise print "No"
if (varOne > 0) {
  console.log("Ye");
} else {
  console.log("No");
}

// 3. If that variable is greater than 5, print "Winner", otherwise if that variable is greather than 0, print "OK", otherwise print "Try again!"
if (varOne > 5) {
  console.log("Winner");
} else if (varOne > 0) {
  console.log("OK");
} else {
  console.log("Try again!");
}

// 4. Save another random number between -10 and 10 to a variable.
let varTwo = Math.round(Math.random() * 20 - 10);

// 5. If both variables are more than 5, print "Good scores!"
if (varOne + varTwo > 5) {
  console.log("Good scores!");
}

// 6. If either variable is below -9, print "Minus nine!"
else if (varOne < -9 || varTwo < -9) {
  console.log("Minus nine!");
}

// 7. Create a variable to store a message. If your random numbers added together is smaller than zero,
// save the message "We have gone sub zero!". Otherwise, set the message to null.
let message;
if (varOne + varTwo < 0) {
  message = "We have gone sub zero!";
} else {
  message = 0;
}
console.log(message);
