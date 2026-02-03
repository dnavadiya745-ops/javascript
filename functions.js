// function
// what --> function is a block of that perform a specific task.
// why --> to avoid code repetition and to make code modular and reusable.
// how --> function keyword, name, parameters, body, return statement

// type of function :
// function name(params) {} --> function declaration
 function abc() {}
 // let fnc = function () {} --> function expression
  let fnc = function () {};
  // let fnc = () => {} --> arrow function --> fat arrow function
  let fnc1 = () => {};
  

function temp_cart() {
    console.log("Adding Producat");
}

temp_cart();
temp_cart();
temp_cart();

// parameters vs arguments
// parameters are the names listed in the function definition(params -- () ni andar lakheli values)
// arguments are the real values passed to the function (args-> function call karti () ni andar lakheli(pass) kareli values)

function cartBtn(producat) { // producat -- parms
    console.log("Adding", producat, "to Cart");
}

cartBtn("Dell Laptop");  // Dell Laptop -- args
cartBtn("Apple 16");
cartBtn("PS 5");

function cartBtn_price(producat, price) {
    console.log("Adding", producat, "to Cart with", price);
}

cartBtn_price("Dell Laptop", 50000);
cartBtn_price("Apple 16", 56000);
cartBtn_price("PS 5", 60000);

function cartBtn(dessert) { // producat -- parms
    console.log("Adding", dessert, "to Cart");
}

cartBtn("Pastry");  // Pastry -- args
cartBtn("Choco Lava");
cartBtn("Cake");

function cartBtn_price(dessert, price) {
    console.log("Adding", dessert, "to Cart with", price);
}

cartBtn_price("Pastry", 120);
cartBtn_price("Choco Lava", 100);
cartBtn_price("Cake", 200);
// cartBtn_Price -- function declaration

// convert into function expression
// let fnc = function(){}

let fnc_expression = function (producat, price) {
  console.log("Adding", producat, "to Cart with", price);
};

fnc_expression("Dell Laptop", 50000);
fnc_expression("Apple 16", 56000);
fnc_expression("PS 5", 60000);


// convert into arrow function
// let fnc = () => {}
let fnc_arrow = (producat, price) => {
  console.log("Adding", producat, "to Cart with", price);
};
fnc_arrow("Dell Laptop", 50000);
fnc_arrow("Apple 16", 56000);
fnc_arrow("PS 5", 60000);

//defualt,rest parameters in function
//default
function def(v1,v2){
    console.log(v1,v1);
}
def();

function buynow(product = "Product Name" , price = "Product_Price"){
    console.log(product,price)
}
buynow("mobile");

//rest -- > jyare function multiple argumenta pass karva to vadhare params banava pade chhe mate te na karvu pade te mate rest paramaeter use kariye chia(rest --> ... jo function na paarameter ni andar lakhvama avae che)
function abcd(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10){
    console.log(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10);
}
abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function abcd1(v1,v2,v3, ...numbers){
    // ...numbers -- resters
    console.log("reset",v1,v2,v3,numbers);
}
abcd1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function abcd1( ...numbers){
    // ...numbers -- rest
    console.log("reset",numbers);
}
abcd1(1,2,3,4,5,6,7,8,9,10)

//return or early return
function temp_fnc(){
    if (10 > 9) return "true";
}
temp_fnc();

//first class function :
//function can be treated as variables
// let fnc1 = function (){} - function expression
// let fnc2 = () => {} - arrow function
const cart5 = function (product,price){
    console.log(`Addind ${product} at ${price}`);
};
cart5("function expression - S25 ultra", 69000);
//convert into arrow function
 const cart6 = (product,price) =>{
    console.log(`Addind ${product} at ${price}`);
 };
 cart6("function expression - S25 ultra", 69000);

 //function can be passed as argument to other function
 function temp_fnc2(params){
    params(); // args function
 }
 temp_fnc2(() => {
    console.log("Second Function")
 }); // function args --> function

 //function can be returned from other functions

 //function can be passed as argument to other function
 function temp_fnc3(params){
    params(); // args function
 }
 temp_fnc3(() => {
    console.log("Fine !!!")
 }); // function args --> function

 //function can be returned from other functions

 //function can be returned from other function
 function temp_fnc4() {
    return function fnc5() {
        console.log("Function 4");
        //return "function can be returned from other function"
    }
 }
 console.log(temp_fnc4()());

  //function can be returned from other function
 function temp_fnc7() {
    return function fnc8() {
        console.log("Function 7");
        return "function can be returned from other function"
    }
 }
 console.log(temp_fnc7()());

 //higher order function (HOF)
// function that takes ani=other function as an argumnet or returns a function as a result (eva function je return kare ek function athva acpect kare ek function params ma)

// function abcd(val){val();}
// --> abcd(function(){console.log("hello")})
// function abcd(val){} --> higher order function 

// function abcd(){return function(){} } abcd()() --> higher order

// pure vs impure function
// pure function --> function je same input par same output aapse ane koi bahar na state ne modify na kare (pure function --> je function bahar na state ne modify na kare)
let temp_a = 20; // state
function temp_change(){
    return "hello";
} // pure function 
console.log(temp_change());

console.log("value of temp_a before change :" , temp_a);

//impure function --> function je same input par  diffrent output aapse athva bahar na state  ne modify kare (impure function --> je function bahar na state ne modify kare)

function temp_change1() {
    temp_a++;
} // --> impure function

temp_change1();
console.log("Value Of temp_a after change", temp_a);
temp_change1();
console.log("Value Of temp_a after change", temp_a);
temp_change1();
console.log("Value Of temp_a after change", temp_a);

//closure function
// function je potana parent function na variable ne access kari shake (returnthava valo function use karshe parent function na koi variable) (function within function)
function outer(){
    let outer_var = 50 ; // parent function variable
    function inner() {
        outer_var--;
        console.log(outer_var); // child function console
    }
    return inner();
}
console.log(outer())

function outer1(){
    let outer_var1 = 50 ; // parent function variable
    function inner1() {
        outer_var1 +=2 ;
        console.log(outer_var1); // child function console
    }
    return inner1();
}
console.log(outer1())

//lexical scope --> nested function can access variables declared in their outer scope
function outer2() {
    let temp_outer ="outer function variable";
    function inner2() {
        let temp_inner = "inner function variable";
        console.log(temp_outer);
        function most_inner() {
            console.log("Most_inner Function Output",temp_outer);
            console.log("Most_inner Function Output",temp_inner);
           function most_most__inner() {
            console.log("Most_Most_inner Function Output",temp_outer);
            console.log("Most_Most_inner Function Output",temp_inner);
        }
        most_most__inner();
    }
        most_inner();
    }
    inner2();
}
outer2();

// IIFE - Immediately Invoked Function Expression
(function () {})(); // function je declare karta j call tahi jaye
(function temp_IIFE() {
     console.log("IIFE Function")
}) ();

// Hoisting in Function
temp_abc();
function temp_abc() {
    console.log("Hoisted Function");
}

// // function expression
// hoistedFunction1(); // error hoistedFunction1 is not a function
// let hoistedFunction1 = function () {
//     console.log("hoistedFunction1");
// } 

// // arrow expression
// hoistedFunction2(); // error hoistedFunction2 is not a function
// let hoistedFunction2 =  () => {
//     console.log("hoistedFunction2");
// } 

