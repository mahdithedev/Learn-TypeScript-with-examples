// Generics
// so what are generics if you google it you well get the following awnser

// Generic programming is a style of computer programming
// in which algorithms are written in terms of types to-be-specified-later
// that are then instantiated when needed for specific types provided as parameters.

// if you didn't get googles awnser let me show you some examples

// imagin we need we need a data structure that can store sometype of data 
// and return the sametype of data in one of it's methods  
// and it's type is not specefied so it can be string , number , object , etc

interface StructureWithNumber {
    data : number
    getData : () => number
}

const structureWithNumber : StructureWithNumber = {
    data: 0,
    getData: function() : number {
        return this.data
    }
}

interface StructureWithString {
    data : string
    getData: () => string
}

const structureWithString : StructureWithString = {
    data:"data",
    getData : function() : string {
        return this.data
    }
}

// and we need repeat the same process for every type
// here is where generics come handy

interface Structure<T> {
    data : T
    getData : () => T
}

const structure1 : Structure<number> = {
    data : 10,
    getData : function() : number {
        return this.data
    }
}

const structure2 : Structure<string> = {
    data:"data",
    getData : function() : string {
        return this.data
    }
}

// and we can use this with every type

// explanation 

// the syntax for using generics is like this: interface InterFaceName<typeName1 , typeName2 , ...>
// typeName is works like a placeholder and we can replace that placeholder with every type we want.
// for example we may know that the type of property1 is the same as the return type of method1,
// but we don't know the exact type and we don't need the exact type we want our structure
// to function no matter the type.   

// we can use more than 1 generic as said above

interface Pair<T,U> {
    first : T,
    second : U
}

const point : Pair<number,number> = {
    first:16,
    second:20,
}

point.second = 10 // this is ok
// point.second = "10" this is not ok

// you can use generics with unions
const person : Pair<string , string | number> = {
    first:"Amir Mahdi",
    second:"100",
}

person.second = 100 // this is ok

// we can use them with type aliases too

const Block : Pair<string,Object> = {
    first:"ID",
    second:{size:123}
}

type Pair2<T,U> = {
    first : T,
    second : U
}

// lets say you have a function that only accepts a parameter with the Pair<number,number> type
// you can solve the issue with the code below

type NumberPair = Pair<number,number>

function add(pair : NumberPair) {
    return (pair.first + pair.second)
}

// you can also do this 
type example = Pair<string , number | string>

// or

interface StringPair extends Pair<string,string> {

}

function greet(pair : StringPair) {
    console.log(`Hello, ${pair.first.toUpperCase()} ${pair.second.toUpperCase()}`)
}

// or

function greet2(pair : Pair<string,string> ) {
    console.log(`Hello, ${pair.first.toUpperCase()} ${pair.second.toUpperCase()}`)
}

// you can also do another trick

interface User<T extends {username:string , password:string}> {
    credentials : T
    getCredentials : () => T
}

// explanation
// this says that the given type MUST extend the {username:string,password:string} type

// const user : User<{username : string}> = { something } 
// this will give an error because the generic doesn't extend the {username:string , password:type}

// basic array usage
const array : Array<number> = [1,2,3]

// Geerics with functions

// yes you can use generics with functions too

// lets see a basic logging example

function log<T>(messages : T[]) {
    console.log(messages.join(""))
}

// note: if you don't sepcefy a type the type will the parameters type

log<string>(["hello" , "world"]) //this is ok
log(["hello" , "world"]) //this is also ok

// other examples

function firstElement<T>(arr : T[] ) : T {
    return arr[0]
}

const f = firstElement([1,2,3])
console.log(f)

function lastElement<T>(arr : T[]) : T {
    return arr[arr.length - 1]
}

const l = lastElement([1,2,3])
console.log(l)

// example from the typescript hand book
function map<Input,Output>( arr : Input[] , fn : (parameter : Input) => Output ) : Output[] {
    return arr.map(fn)
}

let newArr : any = map<number,number>([1,2,3] , function(parameter : number) {
    return (parameter+1)
})

function combine<T>(arr1 : T[] , arr2 : T[]) {
    return arr1.concat(arr2)
}

newArr = combine([1,2,3] , [4,5,6]) // this is ok
newArr = combine<number>([1,2,3],[4,5,6]) // this is ok
// newArr = combine([1,2,3]["hello" , "worlds"]) this will give an error
newArr = combine<number | string>([1,2,3],["hello","world"]) // this is ok

// another example

function createPair<T,U>(first : T , second : U) : Pair<T,U> {
    return {first , second}
}


//Guidelines for Writing Good Generic Functions
//https://www.typescriptlang.org/docs/handbook/2/functions.html#guidelines-for-writing-good-generic-functions