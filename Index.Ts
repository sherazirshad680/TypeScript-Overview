// Section 1: TypeScript Overview

//     What is TypeScript and how does it relate to JavaScript?

// Answer = TypeScript is the Frame work of Javascript  Ts Support All Js libraries.

//     List three features of TypeScript.
// Answer = 1: Ts and Js Both are same and in this difference between only of type
//              2:Ts Protect us From Errors,
//              3:Ts Support All Js libraries,

//                 Explain why using TypeScript might be beneficial for a project.
// Ts Protect us From Errors, We give it a hunt and it takes us quite far For example, if we write F So this would give us a function to write the entire function


// Section 2: Environment Setup

// Describe the steps to set up a local environment for TypeScript development.

// Answer = For setup First we download node.js Then we download the autocompiler Then we write from the command,

// How can you use the online "Try it Option" for TypeScript?
// Skipped
// Name one Integrated Development Environment (IDE) that provides support for TypeScript.
// Skipped


// Section 3: Basic Syntax and Operators

//     Write a TypeScript code snippet to declare a variable and assign it a value of type number.
// Answer var a = 10;
//     Explain the differences between the == and === operators in TypeScript.
// Answer : we use double equal == Operator for compare two values are Equel or not Equel.
// We use tripple Equel === also for compare and in this we are also check that the Type of values are Equel or Not.

//     What are short-circuit operators in TypeScript? Provide an example.
// Answer
// if (10 < 5 && 15 < 10) {
//     console.log(`This is True`);
// }
// else {
//     console.log(`This is False`);

// }

// if (10 < 15 || 10 < 18) {
//     console.log(`This is True`);
// } else {
//     console.log(`This is False`);

// }

// Section 4: Decision Making and Loops

//     Write a TypeScript for...of loop to iterate over an array of strings and print each element.
var Arraynums: any[] = [, 1, 2, 3, 4, 5]
for (let i of Arraynums) {
    console.log(i);
}

//     Explain the difference between the if statement and the switch statement in TypeScript.
// Defination :These Work Almost Similar only diffrence between syntax and syntax's names and also in switch statement we are use break;Even That we are not write in the If statement.
// // Syntax Of switch Statement :
// switch(`Give the key or any name`)
// case : (`give the Condition`)
// print here your answer and you can also log here

// Syntax Of If Statement:
// if (`Give any Condition`) {
//     console.log(`You can log your Output`);
//     // and also you can print
// }
//     Write a TypeScript do...while loop that calculates the sum of integers from 1 to 10.
// let a = 2
// do {
//     console.log(i);
//     i++;
// }
// while (a <= 10)


// Section 5: Functions
//     Define a TypeScript function called calculateAverage that takes an array of numbers as a parameter and returns the average.

var calculateAverage = (grade: number[], totalnumber: number) => {
    var totalgrade = grade.reduce((sum1, sum2) => sum1 + sum2);
    return (totalgrade / totalnumber) * 100;
};
console.log(calculateAverage([70, 80, 90, 100, 65], 100));

// Section 6: Data Types

//     Describe the purpose of the any type in TypeScript.
// Answer with the help of type any we can write All data type
//     How do you declare a tuple in TypeScript? Provide an example.
// write any key word for example var,let,const after that write the name of tuples and give the type in square[] brackets.
// // For Example:
let Tuple: [string, number, boolean, number[]];
Tuple = [`This is an example of tuple`, 5, true, [1, 2, 3, 4, 5]];

//     What are rest parameters in TypeScript? Provide an example of how to use them.
// Answer There are rest parameter are unlimited and then his type always in the array but we are write argument in square brackets[]. 
function infiniteparameter(...number: number[]): number {
    var sum: number = 0;
    for (let i = 0; i < number.length; i++) {
        sum += number[i];
    }
    return sum;
}
var infinite: number = infiniteparameter(1, 2, 3, 4, 5, 6);
console.log(infinite);
//     Explain the concept of function overloads in TypeScript.



// // Section 7: Classes and Objects
// // Create a TypeScript class Person with properties name and age. Include  a constructor to initialize these properties.
class Person {
    name: string;
    age: number;
    constructor(age: number, name: string) {
        this.name = name;
        this.age = age;
    }
}
var person1 = new Person(15, `Sheraz`);
// console.log(person1);