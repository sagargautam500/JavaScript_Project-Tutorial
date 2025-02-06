const accordians=document.querySelectorAll(".accordian");

accordians.forEach(accordian=>{
const icon=accordian.querySelector(".icon");
const answer=accordian.querySelector(".answer");
 
accordian.addEventListener("click",()=>{
// icon.classList.toggle("icn");
// answer.classList.toggle("active");
if(icon.classList.contains("icn")){
 icon.classList.remove("icn") ;
 answer.style.maxHeight=null;  
}else{
   icon.classList.add("icn");
   answer.style.maxHeight=answer.scrollHeight+"px";
}
})
})