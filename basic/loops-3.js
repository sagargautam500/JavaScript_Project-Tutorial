/*
//For Loops::::print the sum 1 to 5
let i, sum=0;
for(i=1;i<=5;i++)
{
    sum=sum+i;
}
console.log("sum="+sum);

//for-of loops----------------------------
let str="sagar gtm";
for(let i of str){
    console.log("i="+i);
}

// let str="sagar gtm";
// for(let val of str){
//     console.log("value="+val);
// }
let name="sagar gtm";
for(let i of name[3]){
    console.log("i="+i);
}
*/

//for-in loops-------------------------------
/*let student={
    name:"Sagar gautam",
    age:24,
    gpa:3.6,
    isPass:true
};
for(let i in student){
    // console.log("key="+i);
    // console.log("key="+i+" and their value :"+student[i]);
    // console.log(i+ "= "+student[i]);
    console.log(i, "= ",student[i]);
} */
    
// Let's practice question--------------------------------
// Qs1. Print all even numbers from 0 to 100
/*let i=0; 
while(i<=100){
    if(i%2===0)
    {
        console.log(i);
    }
    i++;
}
for(let num=0;num<=100;num++)
{
    if(num%2===0)
        {
            console.log(num);
        }  
}*/
// Qs:2.Create a game where you start with any random game number. Ask the user to keep
// guessing the game number until the user enters correct value.

// let correct_num=45;
let correct_num=parseInt(Math.random()*100);
let user_num=parseInt(prompt("Guess the  number"));
let score=0;

while(user_num!==correct_num)
    {
        if(user_num<correct_num){
            
         
            user_num=parseInt(prompt("smaller than current number.So again enter number"));
            score++;
        }
        else{
            
            user_num=parseInt(prompt("Bigger than current number.So again enter number"));
            score++;
        }
        
    }
    console.log("user number=",user_num);
console.log(`Congratulation !! ${user_num} is a correct Number`);
console.log("no.of chances=",score);

