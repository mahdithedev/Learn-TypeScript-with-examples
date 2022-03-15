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