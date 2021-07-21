/** @format */

console.log(greeting(21));

var greeting = (time) => {
  if (time < 12) {
    return "Good Morning!";
  } else if (time < 18) {
    return "Good Afternoon!";
  } else if (time < 20) {
    return "Good Evening!";
  } else {
    return "Good Night!";
  }
};


