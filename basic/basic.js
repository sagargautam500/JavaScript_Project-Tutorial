// -----------------------------conditional statement------------------
console.log("hey sagar vai")

// // alert("hey sagar vai") 
// document.write("this is document write")
// console.warn("this is warning")
// console.error("this is error")

const item={
    aa:"ram",
    bb:"shyam",
    cc:"hari"
}
item.aa="sagar gtm"//changes object name 
console.log(item.aa)
let a=5;
let b=5;
let c=a+b;
console.log(c);
console.log(typeof(a,b));
console.log(typeof(item.aa))
console.log((c>10)?"yes":"No");

// let age=prompt("enter your age???");
// age=parseInt(age);
// let age=parseInt(prompt("enter your age?"));
let age=30
console.log("age=",age);
console.log(typeof(age));
if(16>age>0)
{
 console.log("you are child");
}
else if (16<age<45) {
    console.log("you can younger people");
} else if(45<age){
   console.log("you are older") ;
}
else{
    console.log("not valid AGE:")
}

// console.clear()
// console.assert(4==(6-2))