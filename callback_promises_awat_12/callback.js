document.body.style.backgroundColor="orange";
let h1=document.createElement("h1");
h1.innerText="Callback details";
h1.style.color="white";
h1.style.backgroundColor="black";
document.body.prepend(h1);
document.body.style.textAlign="center";

//setTimeout() method:::::::::::::::;;
/*console.log("one");
function hello(){
    console.log("hello JS");
}
setTimeout(hello,2000);//Timeout:2s=2000ms
 
setTimeout(()=>{
  console.log("i am 3 seconds");
},3000);
console.log("two");
console.log("three");
console.log("four");
console.log("five");
*/

//callbacks method::::::::::::::::::::::;
function sum(a,b){
    console.log(a+b);
}
function sub(c,d){
    console.log(c-d);
}
function calculator(x,y,sumCall){
    sumCall(x,y);
}
calculator(2,4,sum);
calculator(4,2,sub);

  calculator(4,5,(a,b)=>{
    console.log("sum=",a+b);
});

//callback Hell::::::::::::::
function getData(dataId,getNext){
    setTimeout(()=>{
        console.log("data=",dataId);
        if(getNext){
            getNext();
        }
    },2000);
}
//call back hell occur .which has very diffficult to understand::
getData(1,()=>{
    console.log("getting data2......");
    getData(2,()=>{
        console.log("getting data2......");
        getData(3);
    });
});