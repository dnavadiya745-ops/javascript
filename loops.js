// loops -- repeting code blocks
// 1 1 1 1 1 1 1 1 1 1
// 1 2 3 4 5 6 

// for loop
// why use for - loop ? whrn you mknow how many times you want to repeat a block of code.
// print 1 to 10 --> console.log(1); console.log(2); ... console.log(10);
// kyathi javanu chhe --> kya sdhi javanu che --> kevi rite javanu che
// for (ex. 1 -> 50 -> increment by 1)
//(start; end; change)

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// for (let j = 0; j <= 1; j--) {
//     console.log(j)
// }

// for (let d = 0; d < 5; d++) {
//     console.log("Hello")
// }

// while loop -- do while loop
// kyathi javanu chhe --> kya rokavanu chhe -->kevi rite javanu chhe
// while (ex. 1 --> hello world --> stop when condition false)
//start
//while(end){
// code
//change
//}
// let k = 5;
// while (k <= 20) 
// {
//     console.log("K with While Loop :" , k);
//     k++;
// }

// let a = 60;
// while (a >= 20){
//     console.log(a);
//     a--;
// }

// let c = 30;
// while ( c > 20) {
//     console.log(c);
//     a++;
// }

// let d = 1;
// while ( d >= 20 ) {
//     console.log("Hello");
//     d++;
// } 

// let f = 50;
// while ( f <= 60) {
//     console.log(f);
//     f--;
// }
// let q = 50;
// while ( q <= 60)  {
//     console.log(q);
//     --q;
// }

//do while loop
// do {} while (end);
// start
// do{
//code
// change}
// while (end);
// let j = 12; // start
// do {
//     console.log("do while loop : " , j); // code
//     j++; // change (condition)
// } while(j < 20);  // while check after executing code black(end)

// let z = 15; // start
// do {
//     console.log("do while loop error :" , z); // code
//     z++; // change (condition)
// } while(z < 10);  
// // why : answer is 15 otherwise 15 is more than to 10

// // break
// for (let k = 1; k <= 201; k++)  {
//     console.log("Loop With Break :" , k);
//     if(k === 24) {
//         break;
//     }
// }

// for (let k = 12; k <= 201; k++)  {
//     console.log("Loop With Break 1 :" , k);
//     if(k < 24) {
//         break;
//     }
// }

// // continue
// for (let a = 1; a<= 10; a++)  {
//     if(a === 5) {
//         continue;
//     }
//     console.log(a);
// }

// for (let A = 1; A<= 10; A++)  {
//     if(A >= 5) {
//         continue;
//     }
//     console.log("Loop That Skip Numbers :" , A);
// }

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
