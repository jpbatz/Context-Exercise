// CONTEXT === this
// changing context is accomplished with call(), apply(), and bind()

var Robot = function (name) {
  this.name = name;
}

function add ( op1, op2 ) {
  this.name = this.name || "Humans";
  return this.name + " can count to " + (op1 + op2);
}

var voltron = new Robot("Voltron");
var bender = new Robot("Bender Rodriguez");
var optimus = new Robot("Optimus Prime");
var megaman = new Robot("Mega Man");
var bmo = new Robot("B-Mo");
var wall_e = new Robot("Wall-E");


// #1
// add() function asumes current global context
console.log(add(0,1));

// #2  
// assigning the voltron context to the add() function and providing arguments for the add() function
// method.call(this, arg1, arg2, ...) used in subclass constructor that inherits properties from a superclass
console.log(add.call(voltron, 2, 3)  );

// #3
// function.apply() does the same as call(), except it accepts an array or array-like object 
// as the second argument, instead of a list of individual arguments, as in call().
console.log(add.apply(optimus, [20, 30])  );

var nums = [40, 50];
console.log(add.apply(optimus, nums));

// #4
// Instructions: 'bind the function add to a new function named calculate with the context of the object bender (using bind())
// invoke the calculate passing in 2 arguments, "drinking " and "beer"'

// bind() defines the context of the argument bender to the add() function 
//  which is then assigned to the new calculate 
// not sure what the purpose of calculate is in this example...
// when calculate is invoked, it... ???
// why not just use add(), why calculate?

var calculate = add.bind(bender);             // but, calculate is not a function
console.log(calculate("drinking", "beer"));   // ouput is "Bender Rodriguez can count to drinkingbeer"

// calculate is a function here, but output is not desirable
// function calculate(arg1, arg2) {
//   this.arg1 = arg1;
//   this.arg2 = arg2;
//   return this.arg1 + " " + this.arg2;
// }
// console.log(calculate("drinking", "beer"));                  // test 
// console.log(add.bind(bender,calculate("drinking", "beer"))); // output is "[function]"