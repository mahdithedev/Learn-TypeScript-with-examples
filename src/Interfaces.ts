// this section is incomplete

// interfaces like type aliases are another way of naming types

// example of using interfaces

interface Point {
    x:number,
    y:number
}

function printPoint(pt : Point) {
    console.log(`Point${pt.x}${pt.y}`)
}

function getPointObject(x : number , y : number) : Point {
    return {x,y}
}

//differences between type aliases and interfaces
//https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces

// extending an interface

interface BaseInterface {
    varible1:string,
}

interface ExtendedInterface extends BaseInterface {
    varible2:string,
}

function test() : ExtendedInterface {
    return {varible1:"hello" , varible2:"world"}
}

const object1 : BaseInterface = test() // this is ok

function test2() : BaseInterface {
    const returnObj : ExtendedInterface = {varible1:"hello" , varible2:"world"} 
    return returnObj // this is ok
}

const object2 : BaseInterface = test2() // this is ok

const object3 : ExtendedInterface = test() // this is ok

const object4 = test() as ExtendedInterface // this is ok see Type-Assertions.js fore more detail

// extending an type aliases

type BaseType = {
    varible1:number,
}

type ExtendedType = BaseType & {
    varible2:number,
}

// interface type checking

function isInstanceOfBaseType(obj : Object) : Boolean {
    return "varible1" in obj
}

// Intersecting types

// in typescript we can combine types in the difrent ways one was extending wich we talked about
// and intersecting i will show you an example so you can understand it and its usage

// imagin we have a pen that is also a spy weapon

interface Pen {
    color : string
}

interface spyWeapon {
    damage : number
}

const myPen : Pen & spyWeapon = {color:"black" , damage:100} // this is ok

// Interfaces vs. Intersections
// We just looked at two ways to combine types which are similar,
// but are actually subtly different. With interfaces,
// we could use an extends clause to extend from other types,
// and we were able to do something similar with intersections and name the result with a type alias.
// The principle difference between the two is how conflicts are handled,
// and that difference is typically one of the main reasons why you’d pick one over 
// the other between an interface and a type alias of an intersection type.

// Generics with interfaces and type aliases
// read Generics.ts for more detail

