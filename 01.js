// The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark ( ? ), then an expression to execute if the condition is truthy followed by a colon ( : ),
// and finally the expression to execute if the condition is falsy.
// q2)
// ans)You can use the comma operator when you want to include multiple expressions in a location that requires a single expression


const prompt=require("prompt-sync")();
var number=parseInt(prompt("enter your number"));

    if(number%2==0){
        console.log(`${number} is an even number`)
    }else{
        console.log(`${number} is an odd number`)
    }
    
