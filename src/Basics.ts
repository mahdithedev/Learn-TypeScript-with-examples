//general types (strings , numbers , etc)

//string type
const str : string = "this is the string type"

//number type
const num : number = 123 
//

//boolean type
const bool : boolean = true

//any type
let varible : any = "this is the any type"

varible = 12 //no problem

varible = new Date() //no problem

varible = [1,2,3] //no problem

varible = {num: 10} //no problem

//...

// if a method can't be called on an object TypeScript will return an error

const exampleNumber : number = 12

// exampleNumber.toLowerCase() error , Property 'toLowerCase' does not exist on type 'number'.