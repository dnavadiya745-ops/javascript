<h1>Example or Excercise:</h1>
<div>
<h3>Example 1 :</h3>
<p>console.log(nm);</p>
<p>let nm = "name";</p>
<p>Answer or Error: Error </p>
<p>Why : Cannot access 'nm' before initialization </p>
</div>
 
<div>
<h3>Example 2 :</h3>
<p>console.log(b);</p>-
<p>var b = "username";</p>
<p>Answer or Error: Error</p>
<p>Why : undefined</p>
</div>
 
<div>
<h3>Example 3 :</h3>
<p>var x = 1;</p>
<p>{  
    var x= 2;
}
</p>
<p>console.log(x);</p>
<p>Answer or Error: Answer 2</p>
<p>Why : priority of block scope</p>
</div>
 
<div>
<h3>Example 4 :</h3>
<p>let a = 10; </p>
<p>{
    let a = 20;
    console.log("Inside:", a);
}</p>
<p>
console.log("Outside:", a);
</p>
<p>Answer or Error: Inside: 20 , Outside: 10 </p>
<p>Why : let is not change the value </p>
</div>
 
<div>
<h3>Example 5 :</h3>
<p>const person = {name: "demo"}; </p>
on console.log
<p>person.name= "user"; ✅</p>
<p>person = {} ; ❌ </p>
<p>Answer or Error: </p>
<p>Why : enter the object than change the value  and without the add object otherwise not change the value</p>
</div>
      
<br>
<hr>
<br>
<h3>Example 1 :</h3>
<p>true + false </p>
<p>Answer or Error: 1</p>
</div>

<div>
<h3>Example 2 :</h3>
<p>null + 1 </p>
<p>Answer or Error: 1 </p>
</div>


<div>
<h3>Example 3 :</h3>
<p>"12" + 12 </p>
<p>Answer or Error:  1212</p>
</div>


<div>
<h3>Example 4 :</h3>
<p>!! undefined</p>
<p>Answer or Error: false </p>
</div>


<div>
<h3>Example 5 :</h3>
<p>"12" - 1 </p>
<p>Answer or Error: 11</p>
</div>

<div>
<h1>Example 1 :</h1>
<p>let x = 10;</p>
<p>let y = 20;</p>
<p>if(x>5 && y > 5){
    console.log("Both are greater than 5");
}else{
    console.log("One or both are not greater than 5");
}</p>
<p>Answer : Both are greater than 5</p>
</div>
 
<div>
<h1>Example 2 :</h1>
<p>let isAdmin = true;</p>
<p>let isLoggedIn = false;</p>
<p>if(isAdmin || isLoggedIn){
    console.log("Acess granted");
}else{
    console.log("Acess Denied");
}</p>
<p>Answer : Acess granted</p>
</div>
 
<div>
<h1>Example 3 :</h1>
<p>let temp = 35;</p>
<p>if(!(temp > 30)){
    console.log("Hot day");
}else{
    console.log("Pleasant day");
}</p>
<p>Answer : Pleasant day</p>
</div>
 
<div>
<h1>Example 4 :</h1>
<p>let a = 0;</p>
<p>if(a){
    console.log("Truthy value");
}else{
    console.log("Falsy value");
}</p>
<p>Answer : Falsy value</p> --> a = 1 answer is Truthy value
</div>
 
<div>
<h1>Example 5 :</h1>
<p>let score = 78;</p>
<p>let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";</p>
<p>console.log("Grade:", grade);</p>
<p>Answer : Grade: C</p>
</div>
 
<div>
<h1>Example 6 :</h1>
<p>let points = 120;</p>
<p>let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";</p>
<p>console.log("Status:", status);</p>
<p>Answer : Status: Gold</p>
</div>
 
<div>
<h1>Example 7:</h1>
<p>let loggedIn = true;</p>
<p>let hasToken = false;</p>
<p>let access = loggedIn && hasToken ? "Allow" : "Deny";</p>
<p>console.log("access:", access);</p>
<p>Answer : access: Deny</p>
</div>
 
<div>
<h1>Example 8:</h1>
<p>let a = 5;</p>
<p>a++</p>
<p>console.log(a);</p>
<p>Answer : 6</p>
</div>
 
<div>
<h1>Example 9:</h1>
<p>let a = 8;</p>
<p>++a</p>
<p>console.log(a);</p>
<p>Answer : 9</p>
</div>
 
<div>
<h1>Example 10:</h1>
<p>let b = 4;</p>
<p>let c = b++</p>
<p>console.log(b, c);</p>
<p>Answer : 5 4</p>
</div>
 
<div>
<h1>Example 11:</h1>
<p>let b = 4;</p>
<p>let c = ++b</p>
<p>console.log(b, c);</p>
<p>Answer : 5 5</p>
</div>
 
<div>
<h1>Example 12:</h1>
<p>let m = 10;</p>
<p>console.log(m--)</p>
<p>console.log(m);</p>
<p>Answer : 10 9</p>
</div>
 
<div>
<h1>Example 13:</h1>
<p>let n = 5;</p>
<p>let result = n++ + ++n;</p>
<p>console.log(result);</p>
<p>Answer : 12</p>
</div>
 
<div>
<h1>Example 14:</h1>
<p>let likes = 100;</p>
<p>function likePost(){
return ++likes;
}</p>
<p>console.log(likePost());</p>
<p>Answer : 101</p>
</div>
 
<div>
<h1>Example 15:</h1>
<p>let count = 5;</p>
<p>if(count-- === 5){   
console.log("Matched");
}else{
    console.log("Not Matched"); 
}</p>
<p>Answer : Matched</p>
</div>

<div>
<h1>Example 1 :</h1>
<p>let x = 2;</p>
<p>switch(x){
    case 2:
    console.log("Two");
    case 3:
    console.log("Three");
}</P>
<p>Answer : Two , Three</p>
<div>
 
<div>
<h1>Example 2 :</h1>
<p>Write a function getGrade(score) that:</p>
<p> Takes A student's score as input (0 to 100)</P>
<p>Returns the grade based on below logic:</P>
<p>90-100 A+</P>
<p>80-89 A</P>
<p>70-79 B</P>
<p>60-69 C</P>
<p>33-59 D</P>
<p>0-32 Fail</P>
<p>Anything Else Invalid Marks</P>
<p>Answer :
       function score(value) {
   if (value >= 90 && value <= 100) {
      return "A";
   } else if (value >= 80 && value <= 90) {
      return "B";
   } else if (value >= 70 && value <= 80) {
      return "C";
   } else if (value >= 60 && value <= 70) {
      return "D";
   }  else if (value >= 33 && value <= 60) {
      return "E";
   } else if (value >= 0 && value <= 33) {
      return "Fail";
   }  
   else {
      return "Anything Else Invalid Marks";
   }
}
   </p>
<div>
 
<div>
<h1>Example 3 :</h1>
<p>Rock-Paper-Scissors:</p>
<p>rock - scissors --> rock</P>
<p>paper - rock --> paper</P>
<p>scissors - paper --> scissors</P>
<p>Answer : 
   function rps1(user, computer) {
   if(user === computer ) return "It's a Tie!!";
    else if(
      (user === "rock" && computer === "scissor")  ||
      (user === "paper" && computer === "rock")  ||
      (user === "scissor" && computer === "paper")  
    ) return "User Wins!!"
     else return "Computer Wins!!"
}
</p>
<div>

<div>
<h1>Example 1:</h1>
<p>Print number from 1 to 10 using a for loop.</p>
<p>Answer : 
      for (let i = 1; i <= 10; i++) {
    console.log(i)
}
      </p>
</div>
 
<div>
<h1>Example 2:</h1>
<p>Print number from 10 to 1 using while loop.</p>
<p>Answer : 
       for (let j = 10; j >= 1; j--) {
    console.log(j)
}
</p>
</div>
 
<div>
<h1>Example 3:</h1>
<p>Print even numbers from 1 to 20 using for loop.</p>
<p>for(let i=1; i<=20; i++){
    if(i%2 ===0){
    console.log(i);
    }
}</p>
<p>Answer : 2 4 6 8 10 12 14 16 18 20 </p>
</div>
 
<div>
<h1>Example 4:</h1>
<p>Print odd numbers from 1 to 15 using while loop.</p>
<p>let i= 1;</p>
<p>while(i<=15){
    if(i%2 !==0){ // or (i%2 ===1)
    console.log(i);
    }
    i++;
}</p>
<p>Answer : 1 3 5 7 9 11 13 15</p>
</div>
 
<div>
<h1>Example 5:</h1>
<p>Print the multiplication table of 5.</p>
<p>
for(let i=1; i<=10; i++){
    console.log(`5 x ${i} = ${5*i}`);
}
</p>
<p>Answer :
           5 x 1 = 5
           5 x 2 = 10
           5 x 3 = 15
           5 x 4 = 20
           5 x 5 = 25
           5 x 6 = 30
           5 x 7 = 35
           5 x 8 = 40
           5 x 9 = 45
           5 x 10 = 50
 </p>
</div>
 
<div>
<h1>Example 6:</h1>
<p>Find the sum of numbers from 1 to 100 using a loop.</p>
<p>
let sum = 0;
for(let i=1; i<=100; i++){
    // let sum =0;
    sum = sum + i;
    // console.log(sum);
}
console.log(sum);
</p>
<p>Answer : 5050 </p>
</div>
 
<div>
<h1>Example 7:</h1>
<p>Print all numbers between 1 to 50 that are divisible by 3.</p>
<p>
for(let i=1; i<=50; i++){
    if(i%3 === 0){
        console.log(i);
    }
}
</p>
<p>Answer :3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48 </p>
</div>
 
<div>
<h1>Example 8:</h1>
<p>Ask the user for a number and print whether each number from 1 to that number is even or odd.</p>
<p>
let num = prompt("give a number");
for(let i=1; i <=num; i++){
    if(i%2 ===0){
        console.log(i, " is even");
    }else{
        console.log(i, " is odd");
    }
}
</p>
<p>Answer : 
      1 ' is odd'
      2 ' is even'
      3 ' is odd'
      4 ' is even'
      5 ' is odd'
      6 ' is even'
      7 ' is odd'
      8 ' is even'
      9 ' is odd'
      10 ' is even'
</p>
</div>
 
<div>
<h1>Example 9:</h1>
<p>Count how many numbers between 1 to 100 are divisible by 3 or 5.</p>
<p>
for(let i=1; i<=100; i++){
    if(i%3 ===0 || i%5 ===0){
        console.log(i);
    }
}
</p>
<p>Answer :3,5,6,9,10,12,15,18,20,21,24,25,27,30,33,35,36,39,40,42,45,48,50,51,54,55,57,60,63,65,66,69,70,72,75,78,80,81,84,85,87,90,93,95,96,99, 100
</p>
</div>
 
<div>
<h1> (Break and Continue)Example 10:</h1>
<p>Stop at First Multiple of 7</p>
<p>Write a Loop from 1 to 100 that:</p>
<p>Prints Each number</p>
<p>Stop Completely when it finds the first number divisible by 7</p>
<p>
for(let i=1; i<=100; i++){
    console.log(i);
    if(i%7 ===0){
        break;
    }
}
</p>
<p>Answer : 1 2 3 4 5 6 7 </p>
</div>
 
<div>
<h1> (Break and Continue)Example 11:</h1>
<p>Skip Multiples of 3</p>
<p>Write a Loop From 1 to 20 that:</p>
<p>Skip number divisible by 3</p>
<p>Prints all other numbers</p>
<p>
for(let i=1; i<=20; i++){
    if(i%3 ===0){
        continue;
    }
    console.log(i);
 
}
</p>
<p>Answer : 1,2,4,5,7,8,10,11,13,14,16,17,19,20
</p>
</div>
 
<div>
<h1> (Break and Continue)Example 12:</h1>
<p>Print First 5 Odd Numbers</p>
<p>Write a loop from 1 to 100 that:</p>
<p>Prints only 5 odd numbers</p>
<p>Then stops the loop</p>
<p>Use Both if, continue and a counter + break</p>
<p>
count = 0;
for(let i =1; i<=100; i++){
    if(i%2 ===1){
        count++;
        console.log(i)
    }
    console.log(i);
    if(count ===5){
        break;
    }
}
</p>
<p>Answer : 1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8, 9,9
 9</p>
</div>