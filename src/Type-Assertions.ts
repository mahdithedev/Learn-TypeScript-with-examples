// Sometimes you will have information about the type of a value that TypeScript can’t know about.

// for example here typescript knows that function getPointInSpace,
// returns an object with the point type but we know that it retuens an object with the Point3d type
// Point3d is an interface extending the point interface you can see Interfaces.ts for more detail

interface Point {
    x:number,
    y:number,
}

interface Point3d extends Point {
    z:number,
}

function getPointInSpace() : Point {
    const point3d : Point3d = {x:16 , y:16 , z:16}  
    return point3d
}

const point2d : Point = getPointInSpace() //this is ok
// console.log(point2d.z) error , Property 'z' does not exist on type 'Point'.

const point1 = getPointInSpace() //this is ok , the type of point1 is Point
// console.log(point2d.z) error , Property 'z' does not exist on type 'Point'.

// const point3d : Point3d = getPointInSpace() error , Property 'z' is missing in type 'Point'
//  but required in type 'Point3d'.

const point3d : Point3d = getPointInSpace() as Point3d //this is ok
console.log(point3d.z) // this is ok

const point2 = getPointInSpace() as Point3d // this is ok , type of point2 is Point3d
console.log(point2.z) // this is ok

//you can use the following syntax if the file extentions is .tsx

const point3 = <Point3d>getPointInSpace()
console.log(point3.z) // this is ok

function getName() : string {
    return "Amir Mahdi"
}

// const myName : string = getName() as number => error
// onversion of type 'string' to type 'number' may be a mistake
// because neither type sufficiently overlaps with the other.
// If this was intentional, convert the expression to 'unknown' first.

//-----------------------------------------------

// ES2015/ES6/ECMAscript2015/etc version

// note: es2015 code will be compiled to older versions of ecmascript
// you can change this behavior with the "--target es6" flag

const es2015getPointInSpace = () : Point => {
    const point3d : Point3d = {x:16 , y:16 , z:16}  
    return point3d
}

const es2015getName = () : string => {
    return "Amir Mahdi"
}