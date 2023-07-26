let number = 5;

function test() {
  number = 3;
}

test();
console.log(number);
// => 3


let number = 5;

function test(number) {
  number = 3;
}

test(number);
console.log(number);
// => 5

//the second snippet doesnt change the value number defined on line is that the number parameter on line 3 
//shadows the number variable by creating the a separate and the independent variable with the same name, 
//but with the scope limited to the function