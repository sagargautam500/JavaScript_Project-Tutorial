let divv=document.querySelector("div");
console.log(divv);
console.log(divv.style);
// console.log(divv.style.backgroundColor="green");
divv.style.backgroundColor="green";
divv.style.textAlign="center";
divv.style.alignContent="center";
divv.innerText="I am a div"+ divv.innerText;
divv.style.fontSize="1.5rem";
divv.style.fontFamily="";

let id_div=divv.getAttribute("class");
console.log(id_div);

let parag=document.querySelector("p");
console.log(parag.getAttribute("id"));
// parag.setAttribute("id","new_parag");


// /create a new element and add to the html code:::::::::::::::::;;
let btn=document.createElement("button");
btn.innerText="Click me!";
console.log(btn);
// divv.prepend(btn);
divv.append(btn);
// btn.style.display="block"
divv.style.display="flex"
divv.style.flexDirection="column"
btn.style.backgroundColor="gray"
btn.style.border="2px solid red"


divv.before(btn);
divv.after(btn);

let new_head=document.createElement("h1");
new_head.innerHTML="<i>Hello Javascript</i>";
document.querySelector("body").prepend(new_head);

//Delete any node or Element of html code
/*let para=document.querySelector("p");
para.remove();*/
