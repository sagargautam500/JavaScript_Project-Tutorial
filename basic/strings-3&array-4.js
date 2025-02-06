// Qs1. Prompt the user to enter their full name. Generate a username for them based on the input.
// Start username with @, followed by their full name and ending with the fullname length.
// eg: user name =
// “shradhakhapra”
// , username should be “@shradhakhapra13”
/*let name=prompt(" enter your name");
let len=name.length;
let username=name.concat(len);
console.log(`@${username}`);
*/


// --------------Arrray--------------------------------------
let arr=[4,5,6,4,3,2,4];
console.log(arr);
console.log(arr[6]);
console.log(typeof arr );

// LET'S PRACTICE-----------------------
// qn:1.Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
//    Find the average marks of the entire class.
let marks=[85,97,44,37,76,60];
let sum=0;
/*for(let i of marks)
    {
        console.log(i);
        sum=sum+i;
    }
*/
/*for(let i in marks)
{
    // console.log(marks[i]);
    sum=sum+marks[i];
}*/

 marks.forEach(el => {
    console.log(el);
    sum=sum+el;
 });
console.log("sum=",sum);
let avg_sum=sum/marks.length;
console.log("Average_sum=",avg_sum);

// Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array to store final price after
// applying offer.
let prices=[250,645,300,900,50];
 /*for(let i of prices)
 {
 console.log(i-((i*10)/100));
 }*/

/*let discount_value=d=>{
   let discount=(d*10)/100;
   let discount_values=d-discount;
    console.log("value after discount="+discount_values);
}
prices.forEach(discount_value);
*/
console.log(prices);
for(let i in prices){
    // console.log("actual price=",prices[i]);
    prices[i]=prices[i]-((prices[i]*10)/100);
    console.log(` Price after offfer:${i}=${prices[i]}`);
}
console.log(prices);

// ------array method-----
console.log("array methods:::::::::::::::::");
let sagar=[2,4,53,6,8,6];
console.log(sagar.splice(2,2,100,200,300));
console.log(sagar);
sagar.splice(2,0,2000);
console.log(sagar);
