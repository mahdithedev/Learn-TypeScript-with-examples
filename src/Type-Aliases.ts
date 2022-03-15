// this section is incomplete

//let's see an example of a functions that takes an object with specefied types as its aurgument

function printPoint1(pt : {x:number , y : number}) {
    console.log(`Point(${pt.x},${pt.y})`)
}

// We’ve been using object types and union types by writing them directly in type annotations. This is
//  convenient, but it’s common to want to use the same type more than once and refer to it by a single 
//  name.

// A type alias is exactly that - a name for any type. The syntax for a type alias is:

type Point = {
    x:number,
    y:number
}

function printPoint2(pt : Point) {
    console.log(`Point${pt.x}${pt.y}`)
}

function getPointObject(x : number , y : number) : Point {
    return {x,y}
}

type Point2 = {
    x:number,
    y:number,
    z?:number
}

type ID = number | string

function printId(id : ID) {
    console.log(printId)
}

//-----------------------------------------------

// ES2015/ES6/ECMAscript2015/etc version

// note: es2015 code will be compiled to older versions of ecmascript
// you can change this behavior with the "--target es6" flag

const es2015printPoint1 = (pt : {x:number , y : number}) => {
    console.log(`Point(${pt.x},${pt.y})`)
}

const es2015printPoint2 = (pt : Point) => {
    console.log(`Point${pt.x}${pt.y}`)
}

const es2015getPointObject = (x : number , y : number) : Point => {
    return {x,y}
}

const es2015printId = (id : ID) => {
    console.log(printId)
}