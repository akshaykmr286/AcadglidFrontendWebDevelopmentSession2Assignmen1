//master function

/*let details=function(name:string,age:number):string {
    return `${name} is ${age} years old`;
}*/

//another way of writing fat arrow function
/*let details=(name:string,age:number):string => { return `${name} is ${age} years old`;};*/

////fat arrow function returning string
let details=(name:string,age:number):string => `${name} is ${age} years old`;
document.write(details("Akshay",25));
console.log(details("Akshay",25));
