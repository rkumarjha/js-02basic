const prompt = require("prompt-sync")();
var num=parseInt(prompt (" enter your number"));
if(num>0){
    console.log(`${num} is positive number`);

}else if (num==0) {
    console.log(`${num} it a zero number`)
} else {
    console.log(`${num}  is negative number`)
}


