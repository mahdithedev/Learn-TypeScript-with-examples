// first go and read Type-Aliases and Interface sections of you haven't already otherwise continue

// we can group data togheter using objects in javascript

function getData( person : {name : string , lastName : string}) : string {
    return `name is ${person.name} , last name is ${person.lastName}`
}

// we use type Aliases but mostly interfaces for naming object

interface Person {
    name : string
    lastName : string
}

function getData2(person : Person) : string {
    return `name is ${person.name} , last name is ${person.lastName}`
}

// and using type aliases

type Person2 = {
    name : string
    lastName : string
}

function getData3(person : Person2) : string {
    return `name is ${person.name} , last name is ${person.lastName}`
}

// Property modifiers
// note that interfaces and type aliases are just a way to name object types,
// so this modifiers will work on normal object types

// optional property

interface Point {
    x : number
    y : number
    z? : number
} // point can either be 2d or 3d and this is determined by the presents of the "z" parameter
// note that if the property "z" is not present then its value will be "undefined"

function printPoint(point : Point) : void {
    // if "z" is defined (z !== undefined) then also print z
    console.log(`${point.x},${point.y}${point.z ? "," + point.z : ""}`)
}

// readonly property

interface User {
    readonly ID : number
    userName : string
    password : number
}

function printID(user : User) {
    console.log(user.ID)
} // this is ok

function printUsername(user : User) {
    console.log(user.userName)
} // this is ok

function changeUsername(user : User , newUsername : string) {
    user.userName = newUsername
} // this is ok

function changeID(user : User , newID : number ) {
    // user.ID = newID error Cannot assign to 'ID' because it is a read-only property.
}

// Index Signatures

// Sometimes you don’t know all the names of a type’s properties ahead of time,
// but you do know the shape of the values.

// In those cases you can use an index signature to describe the types of possible values, for example:

// example of a basic array
interface BasicArray<T> { // read Generics.ts for more detail
    [index : number] : T
}

const arr1 : BasicArray<number> = [1,2,3]
const arr2 : BasicArray<number | string> = [2,3,"hello"]

// but you may say that BasicArray doesn't have any length property so we can't get the last item
// we can solve the problem like the following

interface MyArray<T> {
    [index : number] : T
    length : number
}

const arr3 : MyArray<number> = [1,2,3]
arr3.length = 3

function append<T>(arr : MyArray<T> , item : T) : MyArray<T> {
    const copyArr = {...arr} as MyArray<T>
    copyArr[copyArr.length] = item
    return copyArr
}

console.log(append(arr3 , 10)) //[1,2,3,10]

// example of a map
interface MyMap<T> {
    [index : string] : T
}

const myMap : MyMap<string> = {
    "key1":"value1"
}

myMap["key2"] = "value2"

console.log(myMap["key1"] , myMap["key2"]) // value1 , value2

interface NumberDictionary {
    [index: string]: number;
   
    length: number; // ok
    // name: string;
//   Property 'name' of type 'string' is not assignable to 'string' index type 'number'.
}

interface NumberOrStringDictionary {
    [index: string]: number | string;
    length: number; // ok, length is a number
    name: string; // ok, name is a string
}

// and you can mix this with read only

// so we can implement a ReadOnly Array read Array.ts for more detail

interface MyReadOnlyArray<T> {
    readonly [index : number] : T
    length : number
}

const arr4 : MyReadOnlyArray<number> = [1,2,3]
// arr4[2] = 3 Index signature in type 'MyReadOnlyArray<number>' only permits reading.