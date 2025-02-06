// document.write("hello guys!!!!!!");
// console.log(document.body);
// console.dir(document.body);

/*let headingg=document.getElementById("heading");
console.log(headingg);
console.dir(headingg);*/

/*let headingg2=document.getElementsByClassName("heading2");
console.log(headingg2);
console.dir(headingg2);

let para=document.getElementsByTagName("p");
console.dir(para);
console.log(para);*/

/*let paragraph=document.querySelector("p");
console.log(paragraph);

let allParagraph=document.querySelectorAll("p");
console.log(allParagraph)
console.dir(allParagraph)

let heading22= document.querySelector(".heading2");
console.dir(heading22);
let allheading22= document.querySelectorAll(".heading2");
console.dir(allheading22);
let btn=document.querySelector("#btn");
console.log(btn);
*/
let butt=document.querySelector("button");
// console.dir(button);
console.log(butt);
console.log(butt.tagName);
console.log(butt.innerText);
console.log(butt.innerText="No Click me ok");
console.dir(butt.innerHTML="<i>No Click me ok</i>");

let firstchild=document.body.children[0];
console.dir(firstchild);
console.dir(firstchild.innerText);
console.dir(firstchild.textContent);
console.dir(firstchild.innerHTML);

let secondchild=document.body.children[1];
console.dir(secondchild);
let Allchild=document.body.childNodes;
console.log(Allchild);
let child_num=document.body.childNodes.length;
console.log(child_num);
let first_child=document.body.firstChild;
console.log(first_child);
let lastChild=document.body.lastChild;
console.log(lastChild);

let Fruit=document.querySelector(".fruit");
console.dir(Fruit);
let text=Fruit.innerText;
console.log(text);
console.dir(Fruit.innerHTML);
// console.log(Fruit.innerText="my name is sagar gautam");
console.log(Fruit.innerHTML="<div>Inner div</div>");

