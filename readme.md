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