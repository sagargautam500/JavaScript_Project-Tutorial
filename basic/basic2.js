// ----------------------conditional Statement---------------------------

// let num=prompt("enter number")
// num=Number.parseInt(num)

// console.log(num)
// console.log(typeof num)

/*let num=parseInt(prompt("enter number you want"));-----imp:::
if(num%5===0){
        // console.log(`${num} is a multiple of 5`);
        console.log(num,"is a multiple of 5");
        console.log(num,'is a multiple of 5');
        console.log(" multiple of 5 nbr is ",num);
    }
    else{
        console.log(`${num} is not a multiple of 5`);
    }*/

// Qs2. Write a code which can give grades to students according to their scores-------------------
//     90-100, A+
// 80-89,A
// 70-79, B
// 60-69, C
// 50-59, D
// 30-49, E
// 0-29,F


 let score = parseInt(prompt("Enter your number"));
 console.log("Your Number is", score);
 
 if (score >= 90 && score <= 100) {
     console.log("Obtain A+ grade!");
 }
 else if (score >= 80 && score < 90) {
     console.log("Obtain A grade!");
 }
 else if (score >= 70 && score < 80) {
     console.log("Obtain B grade!");
 }
 else if (score >= 60 && score < 70) {
     console.log("Obtain C grade!");
 }
 else if (score >= 50 && score < 60) {
     console.log("Obtain D grade!");
 }
 else if (score >= 30 && score < 50) {
     console.log("Obtain E grade!");
 }
 else if (score >= 0 && score < 30) {
     console.log("Obtain F grade!");
 }
 else {
     console.log("The score should be between 0 and 100.");
 }
 