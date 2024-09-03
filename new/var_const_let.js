// var a = 10
// function f() {
//     var b = 20
//     console.log(a, b)
// }
// f();
// console.log(a);
// console.log(b)

// var is a global scope and functional scope-------------------------------------

// var a=2 
// function f(){
//     console.log(a)
//     var b=12
// }
// f()
// // console.log(b)

// let is a block scope

// let a=23
// var c=8
// var c=9

// we cannaot declare let keyword twice with the same variable----------------

// function f(){
//     if (true) {
//         // let b=7              we cannot use let keyword inside a if conditon / block scope and console outside the block scope

//         let b=8
//         console.log(b)
//     }
//     console.log(b)
// }
// f()


// ----------------------------------const------------------------

// it has a block scope and we cant change the value of const varaible

// const a=9


// function f() {
//     // a=7   not allowed
//     console.log(a)
    
// }
// f()

// function g(){
//     if (a>6){
//         const b=8
//         console.log(b)  

//     }
//     // console.log(b)   Not allowed bcoz of block scope 
// }

// g()



// const a = {
//     prop1: 10,
//     prop2: 9
// };

// console.log(a.prop1); // Output: 10

// // Modify the property
// a.prop1 = 3;

// console.log(a.prop1); // Output: 3

// //----------------- If you want to prevent modifications to the properties of an object, you can use Object.freeze():




const a = Object.freeze({
    prop1: 10,
    prop2: 9
});

console.log(a.prop1); // Output: 10

// Attempt to modify the property
a.prop1 = 3;

console.log(a.prop1); // Output: 10 (remains unchanged)

