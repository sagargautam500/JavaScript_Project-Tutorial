// document.write("some quesstion practice");

// Let‘s Practice
// Qs. Create a H2 heading element with text - “Hello JavaScript”
// . Append “from Apna College students” to this text using JS.

let title=document.querySelector("h2");
console.log(title.innerText);
// let Append_text=title.innerText="from appan college";
// console.log(Append_text);
console.log(title.innerText+" from apna college");


// Qs. Create 3 divs with common class name - “box”. Access them & add some unique text to eachof them.
let box=document.querySelectorAll(".box");
// console.dir(box);
// console.log(box);

/*console.log(box[0]);
console.log(box[1]);
console.log(box[2]);*/
let idx=1;
for(divs of box){
    console.log(divs);
    divs.innerText=`this is box-${idx}`;
    idx++;

}

// document.body.style.background="blue";
/*console.log(box[0].innerText="this is a box-1");
console.log(box[1].innerText="this is a box-2");
box[2].innerText="this is a box-3";*/


// Qs. Create a new button element. Give it a text “click me”, background color of red & 
// text colorof white.Insert the button as the first element inside the body tag
let btn=document.createElement("button");
btn.innerText="click Me!";
btn.style.backgroundColor="red";
btn.style.Color="white";
document.querySelector("body").prepend(btn);


// Qs. Create a <p> tag in html, give it a class & some styling.
// Now create a new class in CSS and try to append this class to the <p> element.
// Solve this problem using classList.Did you notice, how you overwrite the class name when you add a new one?
let pag=document.createElement("p");
pag.innerText="This is a paragraph";
pag.setAttribute("class","paragraph");
pag.style.color="orange";
pag.style.fontSize="2rem";
pag.classList.add("new_class");//add to class 

document.querySelector("body").append(pag);
