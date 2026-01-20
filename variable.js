// var a = "temp";
// var _123 = "Hello";
// var $123 = "Hello";
// b = 24; //never USE
// let abc = "abc";
// const temp_const = "Hello Word";


// // declaration and intilization
// var d;
// var d = 12;
// // var add value into window
// //var is function scoped
// //var can be redeclared and reassigned
// var name = "user";
// var name1 = "name";


// // reassignment , redeclartion
// var temp = 12;
// temp = "number";
// var temp = "24";

// //scope(global ,block ,functional)
// var e = 23;
// console.log("global scope " + e);
// {
//     var e = 25;  // block scope
//     console.log("block scope " + e);
// }
// function abcd() {
//     var e = 30;   // functional scope
//     console.log("functioal scope " + e);
// }
// abcd();
// console.log(e);

// //scope(global ,block ,functional)
// let r = 23;
// console.log("global scope " + r);
// {
//     let r = 25;  // block scope
//     console.log("block scope " + r);
// }
// function abcd() {
//     let r = 30;   // functional scope
//     console.log("functioal scope " + r);
// }
// abcd();
// console.log(r);

// //temporal dead zone
// //TDZ not working on var
// console.log(temp_b);
// let temp_b = 24;   //on var there is no TDZ

// // console.log(g);
// console.log(j);
// let j = 12;


// //Hoisting Impact
// // Hoisting --> when your create a variable into js that break into two part first is declare part that go to up and there intialization part that go down
// var temp_d = 12;
// //var temp_d; --> underfined; -->that go to up
// //temp_d = 12; -->that go to down (means stuck into line 64)
// //if you use console.log beore initialization that give you undefined;
// let temp_d_let = 24;
// //let variable not use before initializaton
// //if you use console.log beore initialization that give you error;
// //hoisting impact on var ,let ,const
// /*
// var --> hoist -->undefined
// let -->hoist -->error
// const -->hoist --> error
// */

// console.log(nm);
// let nm = "name";


// console.log(b);
// var b = "username";

// var x = 1;
// {  
//     var x= 2;
// }
// console.log(x);

// let a = 10; 
// {
//     let a = 20;
//     console.log("Inside:", a);
// }
// console.log("Outside:", a);

// const person = {name: "demo"}; 
