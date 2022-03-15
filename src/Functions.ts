// this section is incomplete

//note: the text after error writen in examples is for describing the error and 
// is not necessarily the message of the error throwed by TypeScript 

// this function returns void

function voidReturningFunction() : void {
    console.log("this funcion returns void")
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

// union format: T1 | T2 | T3 | ... | Tn (where T is a member if the union) 
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

// ES2015/ES6/ECMAscript2015/etc version

// note: es2015 code will be compiled to older versions of ecmascript
// you can change this behavior with the "--target es6" flag

const es2015voidReturningFunction = () : void => {
    console.log("this funcion returns void")
}

const es2015greet = (name : string , date : Date) => {
    console.log(`hello ${name} , ${date}`)
} 

const es2015returnGreetMessage = (name : string , date : Date) : string => {
    return `hello ${name} , ${date}`
}

const es2015optionalParameter = (name : string , familyName : string , telephoneNumber? : string) => {
    console.log(name , familyName , telephoneNumber)
}

const es2015defaultParameters = (name : string , familyName : string , telephoneNumber : string = "0000" ) => {
    console.log(name , familyName , telephoneNumber)
}

const es2015printPoint = (point : {x : number , y : number} ) => {
    console.log(`Point(${point.x},${point.y})`)
}

const es2015getPointObject = (x : number , y : number) : {x : number , y : number } => {
    return {x , y}
}

const es2015optionalProperty = (point : {x : number , y : number , z? : number}) => {
    console.log(`Point(${point.x},${point.y}${point.z ? ","+ point.z : ""})`)
}

const es2015optionalReturnProperty = (x : number , y : number , z? : number) 
 : {x:number , y : number , z? : number} => {
    return {x , y, z}
}

const es2015printId = (id : number | string) => {
    console.log(id) // ok
}

const es2015printId2 = (id : number | string) => {
    if(typeof id === "number") {
        console.log(id) // ok
    }
    else {
        console.log(id.toLocaleLowerCase()) // ok
    }
}

const es2015welcomPepole = (x : string[] | string) => {
    if(Array.isArray(x)) {
        console.log(`Hello , ${x.join("and")}`)
    } else {
        console.log(`Hello ${x}`)
    }
}