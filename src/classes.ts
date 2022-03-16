// lets see a basic class

// in type script you first need to declear fields
// fields create public properties (can be read from outside) that the class can use
class BasicPerson {
    // name is a field
    name = "my name" // names type is not "string"
    lastName : string = "my lastname" //we specefied the type this time
    age : number = 0
}

const person1 = new BasicPerson() // the type of person1 is BasicPerson
person1.name = "Amir Mahdi" // this is ok
// person1.name = 12 this is not ok

const person2 : BasicPerson = new BasicPerson() // this is ok

//now lets see a class with a constructor

class PersonWithConstructor {
    name : string
    lastName : string
    age : number
    constructor(n : string , l : string , a : number) {
        this.name = n
        this.lastName = l
        this.age = a
        // we can't use this.kids beacuse it's not declear 
        // this.kids = [] Property 'kids' does not exist on type 'PersonWithConstructor'.
    }
}

// we can use object modifiers with classes too

class ReadOnlyPerson {
    name : string = "my name"
    lastName : string = "my last name"
    readonly age : number = 16
}

const person3 : ReadOnlyPerson = new ReadOnlyPerson()
person3.name = "Amir Mahdi"
person3.lastName = "Askar Tajik"
// person3.age = 20 Cannot assign to 'age' because it is a read-only property.

class OptionalPerson {
    name : string = "my name"
    lastName : string = "my last name"
    age : number = 0
    kids : string[]
}

const person4 : OptionalPerson = new OptionalPerson()
person4.name = "Amir Mahdi"
person4.lastName = "Askar Tajik"
person4.age = 16
person4.kids = undefined // this is ok
person4.kids = [] // this is ok

// Index signitures

class MyArrayBasicArray {
    [index : number] : number | string
}

const arr1 : MyArrayBasicArray = new MyArrayBasicArray()
arr1[0] = 12 // this is ok
arr1[1] = "Amir mahdi" // this is also ok

//Constructor overLoading

// heres an example from the handook see Functions.ts for more detail

class example {
    // Overloads
    constructor(x: number, y: string);
    constructor(s: string);
    constructor(xs: any, y?: any) {
      // TBD
    }
  }

// extending a class

// imagin we have a Square class that extends the rectangle class

class Rectangle1 {
    width : number
    height : number
    constructor(w : number , h : number) {
        this.width = w
        this.height = h
    }
}

class Square1 extends Rectangle1 {
    constructor(w : number) {
        super(w , w) // call the base class constructor
    }
}

const sq : Square1 = new Square1(12)
console.log(sq.width , sq.height) // 12 12

// another example

class Base {
    // ...
}

class Derived extends Base {
    // ...
}

class NestedDerived extends Derived {
   // ...
}

// methods

class PersonWithMethods {

    name : string = "defualt name"
    lastName : string = "defualt last name"
    age : number = 0

    constructor(n : string , l : string , a : number) {
        this.name = n
        this.lastName = l
        this.age = a
    }

    sayName() {
        console.log(this.name)
    }

    greet() : string {
        return `Hello , i am ${this.name} ${this.lastName} and i am ${this.age} years old`
    }

    addToAge(years : number) : number {
        this.age += years
        return this.age
    }

}

// getters and setters

class Rectangle2 {

    width : number = 0
    height : number = 0
    isSquare : boolean = false

    constructor(w : number , h : number) {
        this.width = w
        this.height = h
        if(w === h)
        this.isSquare = true
    }

    // we don't need to store the diameter and update it every time we update the width and height
    // we can calculate it when we need it read more to understand the difrence between a getter 
    // and a normal method
    get diameter() : number {
        return Math.sqrt(this.width**2 + this.height**2)
    }

    // in this example updating the "width" effects the isSquare property
    // so we need to handle that to we can use a setter instead of writing
    // obj.width = something , or using a setWidthMethod() we can write obj.Width = someNumber
    // and handle the other effects in the setter
    set Width( newWidth : number ) {
        this.width = newWidth
        if(this.width === this.height) 
         this.isSquare = true
        else
         this.isSquare = false
    }

}

const rect = new Rectangle2(3,4)

console.log(rect.diameter) // if we use a normal methods for example "getDiameter" we needed to call it
// for using it white you don't need to call getters

// and lets see a setter example
rect.Width = 4
console.log(rect.isSquare) // true

// calling super methods

class Base2 {
    method() : void {
        console.log("Hello , World")
    }
}

class Derived2 extends Base2 {
    method(parameter? : string): void {
        if(parameter) {
            console.log(parameter)
        } else {
            super.method()
        }
    }
}

// lets see a fule examples

// you can see Generics.ts for more detail
class MyArray<T> {

    [index : number] : T
    arrayLength : number = 0

    get length() : number {
        return this.arrayLength
    }

    push(element : T) : void {
        this[this.arrayLength] = element
    }

    map( fn : (v : T , i? : number) => T ) : T[] {
        const newArr : T[] = []
        for(let i = 0 ; i < this.arrayLength ; i++) {
            newArr.push(fn(this[i]))
        }
        return newArr   
    }

    forEach( fn : (v : T , i? : number) => any ) : void {
        for(let i = 0 ; i < this.arrayLength ; i++) {
            fn(this[i])
        }
    }

    // constructor overloading
    constructor();
    constructor(arr : MyArray<T> | Array<T>);
    constructor(arr? : MyArray<T> | Array<T>) {
        if(!arr)
        return
        for(let i = 0 ; i < arr.length ; i++) {
            this[i] = arr[i]
        }
    }

}

// Class Heritage
// Like other languages with object-oriented features, classes in JavaScript can inherit from base classes.

// implements
// Clauses
// You can use an implements clause to check that a class satisfies a particular interface.
//  An error will be issued if a class fails to correctly implement it:

interface Pingable {
  ping(): void;
}
 
class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
}
 
// class Ball implements Pingable {
// Class 'Ball' incorrectly implements interface 'Pingable'.
//   Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
//   pong() {
//     console.log("pong!");
//   }
// }

// Classes may also implement multiple interfaces, e.g. class C implements A, B {.

// Cautions
// It’s important to understand that an implements clause is only a check
//  that the class can be treated as the interface type.
//  It doesn’t change the type of the class or its methods at all.
//  A common source of error is to assume that an implements clause will change the class type - it doesn’t!

interface Checkable {
  check(name: string): boolean;
}
 
// class NameChecker implements Checkable {
//   check(s) {
// Parameter 's' implicitly has an 'any' type.
//     // Notice no error here
//     return s.toLowercse() === "ok";
                 
// any
//   }
// }

// In this example, we perhaps expected that s’s type would be influenced by the name:
//  string parameter of check. It is not - implements clauses don’t change how the class body is checked
//  or its type inferred.

// Similarly, implementing an interface with an optional property doesn’t create that property:

interface A {
  x: number;
  y?: number;
}
class C implements A {
  x = 0;
}
const c = new C();
// c.y = 10;
// Property 'y' does not exist on type 'C'.

// member visibilty

// finally we can talk about this
// sometime you want some methods or fileds to be hidden from the outsize world
// and only be used inside the class , no problem we can use visibility modfiers
// lets see an example

class Employee {

    public name : string = "" // name is public so anyone can see it
    public lastName : string = ""
    public age : number = 0
    public pronouns : [string , string] = ["they" , "their"]
    public baseSalary : number = 100

    private EmployeeSalary : number = 100 // no one can see this by using obj.salary

    get salary() : string { // we will give an estamation of the salary and not the exact salary
        return `${this.pronouns[0]} receives a ${this.EmployeeSalary.toString().length} figure salary`
    }

    // this method can be used by the outside world
    public doSomethingWithSalary() : void {
        const salary = this.EmployeeSalary // we can use it in methods within our class
        // ...
    }

    public sameAs(other : Employee) : boolean {
        // you can check other instances fileds with no problem
        // No error
        return (this.EmployeeSalary === other.EmployeeSalary)
    }

    constructor(
        n : string,
        l : string,
        a : number,
    ) {
        this.name = n
        this.lastName = l
        this.age = a
    }
    
     // methods can be private too mabey we are using a helper method only within the class
     // and we don't want that method to be visible to the outside world
     // we can use public , protected , private on methods too
    private privateMethod() {
        // ...
    }

}

const employee = new Employee("Amir Mahdi" , "Askar Tajik" , 16)

console.log(employee.name) // ok

// console.log(employee.EmployeeSalary) Property 'EmployeeSalary' is private
//  and only accessible within class 'Employee'.

console.log(employee.salary) // ok

// console.log(employee.privateMethod())
// Property 'privateMethod' is private and only accessible within class 'Employee'.

// note that private methods can't be used in drived clasess

class GoogleEmployee extends Employee {

    public baseSalary: number = 200

    constructor(
        n : string,
        l : string,
        a : number,
    ) {
        super( n , l , a)
    }

    get salary() : string {

        // return `${this.pronouns[0]} receives a ${this.EmployeeSalary.toString().length} figure salary`
        // this will throw an error 
        // Property 'EmployeeSalary' is private and only accessible within class 'Employee'

        return `sorry we can't get the EmployeeSalary property`

    }

}

// we can solve this by using the protected visibility moodfier

class ProtectedEmployee {
    
    public name : string = "" // name is public so anyone can see it
    public lastName : string = ""
    public age : number = 0
    public pronouns : [string , string] = ["undefined" , "undefined"]
    public baseSalary : number = 100

    protected EmployeeSalary : number = 100 // no one can see this by using obj.salary

    get salary() : string { // we will give an estamation of the salary and not the exact salary
        return `${this.pronouns[0]} receives a ${this.EmployeeSalary.toString().length} figure salary`
    }

    // this method can be used by the outside world
    public doSomethingWithSalary() : void {
        const salary = this.EmployeeSalary // we can use it in methods within our class
        // ...
    }

    constructor(
        n : string,
        l : string,
        a : number,
    ) {
        this.name = n
        this.lastName = l
        this.age = a
    }
    
     // methods can be private too mabey we are using a helper method only within the class
     // and we don't want that method to be visible to the outside world
     // we can use public , protected , private on methods too
    private privateMethod() {
        // ...
    }

}

class GoogleEmployee2 extends ProtectedEmployee {

    public baseSalary: number = 200

    constructor(
        n : string,
        l : string,
        a : number,
    ) {
        super( n , l , a )
    }

    get salary() : string { // this is ok
        return `${this.pronouns[0]} receives a ${this.EmployeeSalary.toString().length} figure salary`
    }

}

const employee2 = new ProtectedEmployee("Amir mahdi" , "Askar Tajik" , 16 )
const employee3 = new GoogleEmployee2("Amir mahdi" , "Askar Tajik" , 16 )

employee2.salary // ok
employee3.salary // ok

// employee2.EmployeeSalary
// Property 'EmployeeSalary'
// is protected and only accessible within class 'ProtectedEmployee' and its subclasses.ts(2445)

// employee3.EmployeeSalary
// Property 'EmployeeSalary'
//  is protected and only accessible within class 'ProtectedEmployee' and its subclasses.

// Like other aspects of TypeScript’s type system, private and protected are only enforced during type checking.

// This means that JavaScript runtime constructs like in or simple property lookup can still access
//  a private or protected member:

class MySafe {
  private secretKey = 12345;
}
 
const s = new MySafe();
 
// Not allowed during type checking
// console.log(s.secretKey);
// Property 'secretKey' is private and only accessible within class 'MySafe'.
 
// OK
console.log(s["secretKey"]);

// Unlike typescripts private filed the javascript private field (#field) remains privat
// after compilation

class FullyPrivateEmployee {
    
    public name : string = "" // name is public so anyone can see it
    public lastName : string = ""
    public age : number = 0
    public pronouns : [string , string] = ["they" , "their"]
    public baseSalary : number = 100

    // private identfire
    #EmployeeSalary : number = 100 // no one can see this by using obj.salary

    get salary() : string { // we will give an estamation of the salary and not the exact salary
        return `${this.pronouns[0]} receives a ${this.#EmployeeSalary.toString().length} figure salary`
    }

    // this method can be used by the outside world
    public doSomethingWithSalary() : void {
        const salary = this.#EmployeeSalary // we can use it in methods within our class
        // ...
    }

    public sameAs(other : FullyPrivateEmployee) : boolean {
        // you can check other instances fileds with no problem
        // No error
        return (this.#EmployeeSalary === other.#EmployeeSalary)
    }

    constructor(
        n : string,
        l : string,
        a : number,
    ) {
        this.name = n
        this.lastName = l
        this.age = a
    }
    
     // methods can be private too mabey we are using a helper method only within the class
     // and we don't want that method to be visible to the outside world
     // we can use public , protected , private on methods too
    private privateMethod() {
        // ...
    }

}

const employee4 = new FullyPrivateEmployee("Amir Mahdi" , "Askar Tajik" , 16)

// employee4.#EmployeeSalary
// Property '#EmployeeSalary' is not accessible outside class 'FullyPrivateEmployee'
//  because it has a private identifier.

console.log(employee4["#EmployeeSalary"]) // will print "undefined"

// imagine that we need to create lot of instances of a class
// for example we may create so many instances of a packet class

class Packet {
    public MAX_PACKET_SIZE = 25000
    public data : any[] = [] // some data
}

// this is inefficient bacuse all the class share the same value for MAX_PACKET_SIZE
// and this value can be shared accross all of them or basic stored on the Class itself

class Packet2 {

    static MAX_PACKET_SIZE = 25000
    public data : any[] = []

    public validate() : boolean {
        return this.data.length < Packet2.MAX_PACKET_SIZE
    }

}

// this is better especialy if instead of a single number we are storing a really masive
// varible

// we also have static methods

class Packet3 {

    static MAX_PACKET_SIZE = 25000
    public data : any[] = []

    static validate(packet : Packet3) {
        return packet.data.length < Packet3.MAX_PACKET_SIZE
    }

}

const packet = new Packet3()

Packet3.validate(packet) // the validate mthod is stored on the class

// in general we get statis properties like this -> Class.statisProperty

// static Blocks in Classes
// Static blocks allow you to write a sequence of statements with their own scope
//  that can access private fields within the containing class.
//  This means that we can write initialization code with all the capabilities of writing statements,
//  no leakage of variables, and full access to our class’s internals.

function loadLastInstances() : any[] {
    // ...
    return []
}

class Foo {
    static #count = 0;
 
    get count() {
        return Foo.#count;
    }
 
    static {
        try {
            const lastInstances = loadLastInstances();
            Foo.#count += lastInstances.length;
        }
        catch {}
    }
}

// Generic classes
// see generics.ts for more detail

// this based type guards
// You can use this is Type in the return position for methods in classes and interfaces.
//  When mixed with a type narrowing (e.g. if statements)
//  the type of the target object would be narrowed to the specified Type.

class FileSystemObject {
  isFile(): this is FileRep {
    return this instanceof FileRep;
  }
  isDirectory(): this is Directory {
    return this instanceof Directory;
  }
  isNetworked(): this is Networked & this {
    return this.networked;
  }
  constructor(public path: string, private networked: boolean) {}
}
 
class FileRep extends FileSystemObject {
  constructor(path: string, public content: string) {
    super(path, false);
  }
}
 
class Directory extends FileSystemObject {
  children: FileSystemObject[];
}
 
interface Networked {
  host: string;
}
 
const fso: FileSystemObject = new FileRep("foo/bar.txt", "foo");
 
if (fso.isFile()) {
  fso.content;
  // fso is now a file fso : FileRep
} else if (fso.isDirectory()) {
  // fso now is a directory fso : Directory
  fso.children;
} else if (fso.isNetworked()) {
    // fso now is a Networked fso : Networked
  fso.host;
}

// A common use-case for a this-based type guard is to allow for lazy validation of a particular field.
//  For example, this case removes an undefined from the value held inside box
//  when hasValue has been verified to be true:

class Box<T> {
  value?: T;
 
  hasValue(): this is { value: T } {
    return this.value !== undefined;
  }
}
 
const box = new Box();
box.value = "Gameboy";
 
box.value;
// (property) Box<unknown>.value?: unknown
 
if (box.hasValue()) {
  box.value;
// (property) value: unknown
}

// Parameter properties

// i love this syntax just see it by youre self

class Block<T> {

    constructor(
        public readonly id : number,
        public timeStamp : string,
        public data : T[],
        private creator : string
    ) {
        // no body needed
    }

}

const block = new Block<number>(123 , "100" , [1,2,3] , "Amir Mahdi")

block.id // ok
block.data // ok
block.timeStamp // ok

// block.creator Property 'creator' is private and only accessible within class 'Block<T>'.
// block.id = 100 read only property

// Abstract classes

// Abstract classes contain abstarct fields and methods with non abstract fields and methods
// So waht are abstract fields and abstract field or method is one that hasn't had an implementation provided

abstract class AbstractBase {

    abstract doSomething() : string

    printClassName() {
        console.log("AbstractBase")
    }

}

// const obj = new AbstractBase() Cannot create an instance of an abstract class.

// The role of abstract classes is to serve as a base class for subclasses
//  which do implement all the abstract members.
//  When a class doesn’t have any abstract members, it is said to be concrete.

class Derived3 extends AbstractBase {

    doSomething(): string {
        return `i did something`
    }
    
}

const d = new Derived3()
d.doSomething()

// class Derived extends Base {
    // Non-abstract class 'Derived' does not implement inherited abstract member 'getName' from class 'Base'.
      // forgot to do anything
// }

// Relationships Between Classes
// In most cases, classes in TypeScript are compared structurally, the same as other types.

// For example, these two classes can be used in place of each other because they’re identical:

class Point1 {
  x = 0;
  y = 0;
}
 
class Point2 {
  x = 0;
  y = 0;
}
 
// OK
const p : Point1 = new Point2();

// Similarly, subtype relationships between classes exist even if there’s no explicit inheritance:

class Person {
  name: string;
  age: number;
}
 
class Employee2 {
  name: string;
  age: number;
  salary: number;
}
 
// OK
const person : Person = new Employee2();

// This sounds straightforward, but there are a few cases that seem stranger than others.

// Empty classes have no members. In a structural type system,
// a type with no members is generally a supertype of anything else.
//  So if you write an empty class (don’t!), anything can be used in place of it:

class Empty {}
 
function fn(x: Empty) {
  // can't do anything with 'x', so I won't
}
 
// All OK!
fn(window);
fn({});
fn(fn);