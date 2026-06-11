// function walk(){
//     console.log('Walking....')
// }
// function sing(){
//     console.log('Singing...')
// }
// function sleep(){
//     console.log('Sleeping...')
// }
// walk();
// sing();
// sleep();

// function greet(num){
//     console.log("Good ...",num)
// }
// greet(12)
// greet(15)
// greet()

//function declaration:
// function a1(){
//     console.log('Hlw Sher!!')
// }

//function expression 
// var b1=function(){
//     console.log('Hlw function!')
// }

//arrow function
// var c1=()=>{
    // console.log('Fat Arrow Function!')
// }

// one line of function
// var d1=()=>console.log('hlw one line of function!!')

//IIFE(Immidiatly Invoked Function Expression)
// (function(){
//     console.log('this is function!!')
// })();


// a1();
// b1();
// c1();
// d1();


// //Pure Function:
// function add(a,b){
//     return a+b
// }
// console.log(add(10,90))

//Impure Function:
// var a=10 
// function abc(){
//     a++;
//     return a;
// }
// console.log(abc())

// function hero(){ 
//     console.log("I am hero")

// }
// function main(a){
//     console.log("It is a main function")
//    a()
// }
// main(hero)

function parent(){
    console.log("parent...")
    function child(){
        console.log("I am child...")
    }
    return child
}
parent()()