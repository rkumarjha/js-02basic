
const prompt=require('prompt-sync')();
var age = parseInt(prompt("enter your age?"));
if (age >= 18) {
  console.log("you can vote");
} else {
  console.log("you cannot vote");
}