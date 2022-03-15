// In addition to the general types string and number,
//  we can refer to specific strings and numbers in type positions.

// One way to think about this is to consider how JavaScript comes with different ways to declare a variable.
//  Both var and let allow for changing what is held inside the variable,
//  and const does not. This is reflected in howTypeScriptcreates types for literals.

let changingString = "Hello World"
changingString = "سلام دنیا"
// Because `changingString` can represent any possible string, that
// is howTypeScriptdescribes it in the type system
console.log(changingString)
 
const constantString = "Hello World"
// Because `constantString` can only represent 1 possible string, it
// has a literal type representation
console.log(constantString)

let x: "hello" = "hello"
// OK
x = "hello"

// x = "howdy"
// Type '"howdy"' is not assignable to type '"hello"'.

// the way i like to use literal types is to combine them with unions lets see some example

interface Options {
    maximumRequestSize : number
}

function initlize(options : Options | "auto") {
    //...
}

initlize("auto")
initlize({maximumRequestSize:1000})
// initlize(1000) not ok
// Argument of type '1000' is not assignable to parameter of type 'Options | "auto"'.

// the function returns -1 or 0 or 1 
function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
}

function isBigger(a : number , b : number) : true | false {
    return a > b
}

// When you initialize a variable with an object,
// TypeScriptassumes that the properties of that object might change values later.
//  For example, if you wrote code like this:

let someCondition : boolean = true

//TypeScriptassumes that the counter property in obj will change sometime,
// so its type will automatically be number and not 0
const obj = { counter: 0 };
if (someCondition) {
  obj.counter = 1;
}

//Typescript handbook explanation:

//TypeScriptdoesn’t assume the assignment of 1 to a field which previously had 0 is an error.
// Another way of saying this is that obj.counter must have the type number,
// not 0, because types are used to determine both reading and writing behavior.

// The same applies to strings:

function move( direction : "Left" | "Right" | "Top" | "Bottom") {
    console.log(`i moved in the ${direction} direction`)
}

move("Left") // this is ok beacuse the "Left" string is converted to the Left type

const movable = {direction : "Left"} // the type of direction is string as described above

// move(movable.direction) 
// Argument of type 'string' is not assignable to parameter of type '"Left" | "Right" | "Top" | "Bottom"'
//because as we said the type of direction is string

// There are two ways to work around this.

//1.

const movable2 = {direction : "Left" as "Left"}
move(movable2.direction)

//2.

const movable3 = {direction : "Left"} as const
move(movable2.direction)

//The as const suffix acts like const but for the type system,
//  ensuring that all properties are assigned the literal type
//  instead of a more general version like string or number.

// Null and Undefined

// copy paster from the hand book  
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#null-and-undefined

// strictNullChecks is on
// With strictNullChecks on, when a value is null or undefined,
//  you will need to test for those values before using methods or properties on that value.
//  Just like checking for undefined before using an optional property,
//  we can use narrowing to check for values that might be null:

function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}

// Non-null Assertion Operator (Postfix!)
//TypeScriptalso has a special syntax for removing null
//  and undefined from a type without doing any explicit checking.
//  Writing ! after any expression is effectively a type assertion that the value isn’t null or undefined:

function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}

// Just like other type assertions,
// this doesn’t change the runtime behavior of your code,
// so it’s important to only use ! when you know that the value can’t be null or undefined.