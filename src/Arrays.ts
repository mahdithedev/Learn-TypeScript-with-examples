// const array : T[] = [ V1 : T , V2 : T , ... , Vn : T ]

// const array : Array<T> = [ V1 : T , V2 : T , ... , Vn : T ] 
//you can see more about generitcs in the generics.ts file

//some array examples

//string array
const stringArray : string[] = ["this" , "is" , "a" , "string" , "array"]

//number array
const numberArray : number[] = [1,2,3,4]

//Date array
const DateArray : Date[] = [new Date() , new Date() , new Date()]

//some array examples with generics

//string array using generics 
const stringArrayGenerics : Array<string> = ["this" , "is" , "a" , "string" , "array" , "with generics"]

//number array using generics
const numberArrayGenerics : Array<number> = [1,2,3,4]

//you can see more about generitcs in the generics.ts file