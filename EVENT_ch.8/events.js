let btn=document.querySelector(".Btn");
btn.onclick=()=>{
    console.log("click me 1 times");
}
let div1=document.querySelector("div");
div1.onmouseover=()=>{
    console.log("you are inside div");
}
let btn2=document.querySelector("#Btn2");
btn2.onclick=(e)=>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);
}



let btn3=document.querySelector(".Btn3");
btn3.addEventListener("click",()=>{
  console.log("event listner used");
});
btn3.addEventListener("click",(eve)=>{
  console.log("event listner used 2nd time");
  console.log(eve);
});
btn3.addEventListener("click",()=>{
  console.log("event listner used 3rd time");
  
});
const hand=()=>{
  console.log("event listner used 4th time");
  
}
btn3.addEventListener("click",hand);
btn3.removeEventListener("click",hand);

// Let‘s Practice
// Qs. Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again

let mode=document.querySelector("#mode");
let currMode="light"
mode.addEventListener("click",()=>{
// console.log("you are change the mode of display");
let ModeSet=document.querySelector("body");
if(currMode=="light")
{
    currMode="dark";
    // ModeSet.style.backgroundColor="#362d2d";
    ModeSet.classList.add("dark");
    ModeSet.classList.remove("Light");
    
}
else{
    currMode="light"
//    ModeSet.style.backgroundColor="#f9f3f3";
ModeSet.classList.add("Light");
ModeSet.classList.remove("dark");
}
console.log(currMode);
});