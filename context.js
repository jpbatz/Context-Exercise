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
// function asumes current global context
console.log(add(0,1));

// #2  
// method.call(this, arg1, arg2, ...) seen in wubclasses that inherit properties from a superclass
console.log(add.call(voltron, 2, 3)  );

// #3
// function.apply() does the same as call(), except it accepts an array or array-like object 
// as the second argument, instead of a list of individual arguments, as in call().
console.log(add.apply(optimus, [20, 30])  );

var nums = [40, 50];
console.log(add.apply(optimus, nums));

// #4
// bind() defines the context of the argument to the add function
// not sure what the purpose of calculate is in this example...
// when calculate is invoked, it... ???
// why not just use add(), why calculate?

var calculate = add.bind(bender);
console.log(calculate("drinking", "beer"));   // ouput is "Bender Rodriguez can count to drinkingbeer"


// function calculate(arg1, arg2) {
//   this.arg1 = arg1;
//   this.arg2 = arg2;
//   return this.arg1 + " " + this.arg2;
// }
// console.log(calculate("drinking", "beer"));
// console.log(add.bind(bender,calculate("drinking", "beer"))); // output is "[function]"