// this section is incomplete

//note: the text after error writen in examples is for describing the error and 
// is not necessarily the message of the error throwed by TypeScript 

// this function returns void

function voidReturningFunction() : void {
    console.log("this funcion returns void")
}

const es2015voidReturningFunction = () : void => {
    console.log("this function returns void")
}

//-----------------------------------------------

// functions can take parameters with specefied types in this example our parameters are
// name with the string type , date with the date type
// if no return type is specefied the return type will be void 

function greet(name : string , date : Date) {
    console.log(`hello ${name} , ${date}`)
}

function returnGreetMessage(name : string , date : Date) : string {
    return `hello ${name} , ${date}`
}

const es2015ArrowFunctionsreturnGreetMessage = (name : string , date : Date) : string => {
    return `hello ${name} , ${date}`
}

// const name : string = returnGreetMessage("Amir Mahdi" , new Date()) | ok
// const num : number = returnGreetMessage("Amir Mahdi" , new Date()) | error , wrong parameter type

//-----------------------------------------------

// functions parameters can be optional 
// telephoneNumber will be undefined if it's not given as a paremeter when calling the function 

function optionalParameter(name : string , familyName : string , telephoneNumber? : string) {
    console.log(name , familyName , telephoneNumber)
}

// functtions parameters can be optional with a fallback value if they're not given
// telephoneNumber will be 0000 if it's not given as a paremeter when calling the function

function defaultParameters(name : string , familyName : string , telephoneNumber : string = "0000" ) {
    console.log(name , familyName , telephoneNumber)
}

//-----------------------------------------------

// functions can receive objects as parameters
// the object properties can have specefied types too

function printPoint(point : {x : number , y : number} ) {
    console.log(`Point(${point.x},${point.y})`)
}

// printPoint( {x:16,y:16} ) | ok
// printPoint( {x:16} ) | error , y is not provided
// printPoint( {x:"16",y:"16"} ) | error , wrong property types

// functions can return objects
// the object properties can have specefied types too

function getPointObject(x : number , y : number) : {x : number , y : number } {
    return {x , y}
}

// const point : {x : number , y : number} = getPointObject(16 , 16) | ok
// const point : {x : string , y : string} = getPointObject(16 , 16) | error , the return type is not right
// const point : {x : number , y : number} = getPointObject("16" , "16") | error , wrong parameter type

//-----------------------------------------------

//functions can receive objects with optional properties

function optionalProperty(point : {x : number , y : number , z? : number}) {
    console.log(`Point(${point.x},${point.y}${point.z ? ","+ point.z : ""})`)
}

// optionalProperty( {x:16 , y:16 , z:16} ) | ok
// optionalProperty( {x:16 , y:16} ) | ok

// functions can return objects with optional properties 
// in this example if the z parameter is not given then it will be undefined in the returning object

function optionalReturnProperty(x : number , y : number , z? : number) : {x:number , y : number , z? : number} {
    return {x , y, z}
}

//-----------------------------------------------

// union syntax: T1 | T2 | T3 | ... | Tn (where T is a member if the union) 
// functions parameters type can be a union type
// to match the union type you're given parameters type must math any of the unions members

function printId(id : number | string) {
    console.log(id) // ok
}

function printIdWithError(id : number | string) {
    // console.log(id.toLowerCase()) error , Property 'toLowerCase' does not exist on type 'string | number'.
//   Property 'toLowerCase' does not exist on type 'number'.
}

function printId2(id : number | string) {
    if(typeof id === "number") {
        console.log(id) // ok
    }
    else {
        console.log(id.toLocaleLowerCase()) // ok
    }
}

function welcomPepole(x : string[] | string) {
    if(Array.isArray(x)) {
        console.log(`Hello , ${x.join("and")}`)
    } else {
        console.log(`Hello ${x}`)
    }
}

//-----------------------------------------------

// Function Type Expressions

//the syntax is like this

// function Function1( fn : (parameter1 : T1 , parameter2 : T2 , ... , parameterN : T3) => T ) {do something}
// note: parameters of "fn" can also be functions

function handle(handler : (data : string) => void) {
    handler("data")
}

function handle2(handler : Function) {
    handler("data")
}

function printToConsole(data : string) {
    console.log(data)
}

handle(printToConsole)
handle2(printToConsole)

//or the es2015 arrow functions way 

handle(
    (data : string) : void => {
        console.log(data)
    } 
)

// or another way of doing it is using type aliases (see Type-Aliases.ts for more detail)

type handlerFunction = (data : string) => void

function handle3(handler : handlerFunction) {
    handler("data")
}

handle3(printToConsole)

// call signutures

// the following text is from the handbook

// In JavaScript, functions can have properties in addition to being callable.
// However, the function type expression syntax doesn’t allow for declaring properties.
// If we want to describe something callable with properties,
// we can write a call signature in an object type:

type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

// Note that the syntax is slightly different compared to a function type expression - use :
//  between the parameter list and the return type rather than =>.

interface constructor {
    new (s : string) : Object
}

// or

type constructor2 = {
    new (s : string) : Object
}

function handleConstructor(con : constructor) : Object {
    return new con("data")
}

interface CallOrConstruct {
    new (s: string): Date;
    (n?: number): number;
}

// Generic Functions 
// you can see Generics.ts for more detail

// Function OverLoads

// Some JavaScript functions can be called in a variety of argument counts and types.
//  For example, you might write a function to print a single parameter , or an array of parameters , or a pair etc

// In TypeScript, we can specify a function that can be called in different ways by writing overload signatures.
//  To do this, write some number of function signatures (usually two or more),
//  followed by the body of the function:

interface Pair<T,U> {
    first:T
    second:U
} // see Generics.ts for more detail

function myPrint<T,U>(p : string) : void // function signuture
function myPrint<T,U>(p : T[] ) : void // overload signiture
function myPrint<T,U>(p : Pair<T,U>) : void // overload signiture 
function myPrint<T,U>(parameter : string | T[] | Pair<T,U> ) : void { // function body
    if(Array.isArray(parameter)) {
        console.log(parameter.join(" "))
    }
    if(typeof parameter === "string") {
        console.log(parameter)
    }
    if(typeof parameter === "object" && "first" in parameter) {
        console.log(`${parameter.first} , ${parameter.second}`)
    }
}

myPrint("Amir mahdi")
myPrint(["Amir","Mahdi"])
myPrint({first:16,second:12})
// myPrint({name:"amirmahdi"}) this will give an error

// example from the typescript handbook

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
// const d3 = makeDate(1, 3); No overload expects 2 arguments,
// but overloads do exist that expect either 1 or 3 arguments.

// writing good overloads
//https://www.typescriptlang.org/docs/handbook/2/functions.html#writing-good-overloads

//-----------------------------------------------
// Rest Parameters and Arguments

function concat<T>(...strs : T[]) : string {
    return strs.join(" ")
}

concat("Amir" , "Mahdi" , "Askar" , "Tajik" , "is Cool") // Amir Mahdi Askar Tajik is Cool

function printFirstThreeItems<T>(a : T , b : T , c : T) : void {
    console.log(a,b,c)
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);

// Note that in general, TypeScript does not assume that arrays are immutable.
//  This can lead to some surprising behavior:

// printFirstThreeItems(...arr1) this will give an error
// A spread argument must either have a tuple type or be passed to a rest parameter.

// we can solve the issue in two ways

// 1.using a tuple (see Arrays.ts for more detail)

const arr3 : [number , number , number] = [1,2,3]
printFirstThreeItems(...arr3)

// 2.using "as const"

const arr4 = [1,3,4] as const
printFirstThreeItems(...arr4)

//-----------------------------------------------

// Parameter Destructuring

// you can use this syntax to unpack an object

function printItems1({first , second}) {
    console.log(first,second)
}

printItems1({first:"12",second:"16"})

function printItems2({first , second} : {first : number , second : number}) {
    console.log(first,second)
}

printItems2({first:16 , second:17})

function calcLine(
    {point1 , point2} : {point1 : Pair<number,number> , point2 :  Pair<number,number>}
    ) : number
{
    return Math.sqrt(Math.abs(point1.first - point2.first)**2 + Math.abs(point1.second - point2.second)**2)
}