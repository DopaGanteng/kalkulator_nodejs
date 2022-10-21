//Author Dova Aditya SW.C
var fs = require("fs");

const { read } = require("fs");
const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Calculator");
console.log("-----------------------------------------");
console.log("1. Plus(+)");
console.log("2. Minus(-)");
console.log("3. Divided(/)");
console.log("4. Multiply(*)");
console.log("-----------------------------------------");

reader.question("Please Choose number of operation : " ,function(choice){
      console.log("Your Choose  " + choice );

reader.question("Input first number : " ,function(firstnumber){
reader.question("Input Second number : " ,function(secondnumber){

      console.log("-----------------------------------------");

      console.log("Your first number  " + firstnumber );
      console.log("Your second number  " + secondnumber );

      console.log("-----------------------------------------");

      if(choice == "1"){
        var result = parseInt(firstnumber)+ parseInt(secondnumber);
      }else if(choice == "2"){
        var result = firstnumber-secondnumber;
      }else if(choice == "3"){
        var result = firstnumber/secondnumber;
      }else if(choice == "4"){
        var result = firstnumber*secondnumber;
      }else{
      console.log("Sorry we can't understand your number");
      }
      console.log('Result : '+result); 
      fs.appendFile("result.txt", "Result :" + result, function (err) {
        if (err) throw err;
        console.log("Saved");
        reader.close();
      });
    });
  });
});