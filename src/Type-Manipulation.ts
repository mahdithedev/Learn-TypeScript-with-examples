// this file is MOSTLY copy pasted from the TypeScript handBook.
// https://www.typescriptlang.org/docs/handbook/2/types-from-types.html

// The keyof type operator
// The keyof operator takes an object type and produces a string or numeric literal union of its keys.
//  The following type P is the same type as “x” | “y”:

type Point = { x: number; y: number };
type P1 = keyof Point;
    
type P2 = keyof Point

// If the type has a string or number index signature, keyof will return those types instead:

type Arrayish = { [n: number]: unknown };
type A1 = keyof Arrayish;
    
// type A1 = number
 
type Mapish = { [k: string]: boolean };
type M1 = keyof Mapish;
    
// type M1 = string | number

// Note that in this example, M is string | number — this is because JavaScript
//  object keys are always coerced to a string, so obj[0] is always the same as obj["0"].

// keyof types become especially useful when combined with mapped types, which we’ll learn more about later.

// The typeof type operator
// JavaScript already has a typeof operator you can use in an expression context:

// Prints "string"
console.log(typeof "Hello world");

// TypeScript adds a typeof operator you can use in a type context to refer to the type of a variable or property:

let s1 = "hello";
let n1 : typeof s;
   
// let n1 : string

// This isn’t very useful for basic types, but combined with other type operators,
//  you can use typeof to conveniently express many patterns. For an example,
//  let’s start by looking at the predefined type ReturnType<T>.
//  It takes a function type and produces its return type:

type Predicate = (x: unknown) => boolean;
type K1 = ReturnType<Predicate>;
    
// type K1 = boolean

// If we try to use ReturnType on a function name, we see an instructive error:

function f1() {
  return { x: 10, y: 3 };
}

// type P3 = ReturnType<f1>;

// 'f1' refers to a value, but is being used as a type here. Did you mean 'typeof f'?

// Remember that values and types aren’t the same thing.
//  To refer to the type that the value f has, we use typeof:

function f() {
  return { x: 10, y: 3 };
}
type P3 = ReturnType<typeof f>;
    
type P4 = {
    x: number;
    y: number;
}


// Limitations
// TypeScript intentionally limits the sorts of expressions you can use typeof on.

// Specifically, it’s only legal to use typeof on identifiers (i.e. variable names)
//  or their properties. This helps avoid the confusing trap of writing code
//  you think is executing, but isn’t:

// Meant to use = ReturnType<typeof msgbox>
// let shouldContinue: typeof msgbox("Are you sure you want to continue?");
// ',' expected.

// We can use an indexed access type to look up a specific property on another type:

{
type Person1 = { age: number; name: string; alive: boolean };
type Age = Person["age"];
}

// type Age = number

// The indexing type is itself a type, so we can use unions, keyof, or other types entirely:

type I1 = Person["age" | "name"];
     
// type I1 = string | number
 
type I2 = Person[keyof Person];
     
// type I2 = string | number | boolean
 
type AliveOrName = "alive" | "name";
// type I3 = Person[AliveOrName];
     
// type I3 = string | boolean

// You’ll even see an error if you try to index a property that doesn’t exist:

// type I1 = Person["alve"];
// Property 'alve' does not exist on type 'Person'.

// Another example of indexing with an arbitrary type is using number to get the type of an array’s elements.
// We can combine this with typeof to conveniently capture the element type of an array literal:

const MyArray2 = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];
 
type Person2 = typeof MyArray2[number];
       
type Person3 = {
    name: string;
    age: number;
}

type Age = typeof MyArray2[number]["age"];
     
// type Age = number
// Or
// type Age2 = Person["age"];
      
// type Age2 = number

// You can only use types when indexing, meaning you can’t use a const to make a variable reference:

const key = "age";
// type Age = Person[key];
// Type 'key' cannot be used as an index type.
// 'key' refers to a value, but is being used as a type here. Did you mean 'typeof key'?

// However, you can use a type alias for a similar style of refactor:

{
type key = "age";
type Age = Person[key];
}

