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

// bind()'s first argument defines the context as bender, and returns a new function
// additional arguments are supplied to the function add()
// new function must be invoked!  additional/partial arguments can be supplied when function is invoked

var calculate = add.bind(bender, "'drinking ", "beer'");  // bind returns a new function!
                                                          // first parameter is context this === bender
                                                          // second and third arguments are for add(op1, op2)
console.log(calculate());                                 // new function must be invoked
                                                          // ouput is "Bender Rodriguez can count to 'drinking beer'"

// Currying Partial Function
var calculate2 = add.bind(bender, "'drinking ");          // only first add() argument specified
console.log(calculate2("wine'"));                         // second add() argument, op2, specified later, when invoked

var calculate3 = add.bind(bender);                        // no add() arguments supplied
console.log(calculate3("'drinking ", "chai'" ));          // all add() arguments supplied when invoked