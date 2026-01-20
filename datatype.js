// two type of data type:

//1.Primitive Data Types
//copy --> real value
let a = 25;
let b = a ;
//Types : String , Number , Boolean ,Null ,Underfined .Symbol ,bigint


//2.Non - Primitive dat type (Reference data type) [] ,{} ,()
//copy --> give refrence of parent 
 let d = [1, 2, 3];
 let e = d ;
 //Types : arrys[], Objects{}, fuctions()

 // <------------Primitive Data Type ----------------------->
//Types : String , Number , Boolean ,Null ,Underfined .Symbol ,bigint
// string
// '' - single quotes
// "" - Double quotes
// `` - backticks
let d1 = "name";
d2 = "username";
d2 = `firstname`;

//number
let e1 = 12;
e1 = 12.25;
e1 = -25;

//boolean
let f = true;
f = false;

//null
// you give a value
let g = null;

//undefine
// you dont give a value , by default value
let h;

//symbol
//unique immutable value
let u1 = Symbol("uid");
let u2 =  Symbol("uid");
//check u1===u2
let obj = { uid:1, name: "test", email:"test@test.com"} ;
let u3 = "uid";
let u4 = Symbol("uid");
//obj[u3] = "001";

//bigint
// check range of number , Number.Max_SAFE_INTEGER
let number = 30188954878585;
number = number + 6;
let num2 = 458622455212323n;
num2 + 3n;

// <-----------Non-primitive  Data Types--------->
//types arrry[] , object{},function()
let temp_array = ["user1","user2","user3"];
let temp_obj = {name : "test", age :9,phone_number:8952165841456};
let profiles =[
    { name: "test1", age: 10, phone_number:7895814552521},
    { name: "test2", age: 20, phone_number:78955894552521},
    { name: "test3", age: 30, phone_number:78955564552521}
];
function name(params){}

//dynamic typing
let u_name = "username";
u_name = 123;
u_name = {};

//typeof quirks
//typeof 12
//check type of variable use --> ex.typeof NaN ,typeof null, 1 + "1", 1== "1", 1 === "1"
//why typeof NaN --> number
//NaN is a failed number Operation that why that type is number 
// ex ."hello" - 5 -->NaN


//type coeration
// "5" + 1 // + --> value add and coeration(Mix)
// "5" - 1

//truthy vs falsy values
// 0, false, "", null, undefined, NaN, document.all, -- false
//ex. !!0 -- check value is true and false
//ex. if(null){}, js convert it into false
//ex. if(-1){}, js convert it into true
// all -->true
