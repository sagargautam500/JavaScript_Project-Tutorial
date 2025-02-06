document.body.style.backgroundColor="orange";
let p1=document.createElement("p");
let p2=document.createElement("p");
let p3=document.createElement("p");
document.body.prepend(p3);
document.body.prepend(p2);
document.body.prepend(p1);
let p4=document.createElement("p");
document.body.prepend(p4);
p4.classList.add("para");
let Para=document.querySelector(".para");
let Btn=document.createElement("button");
Btn.innerText="Click!";
Btn.style.width="6rem";
Btn.style.height="3rem";
Btn.style.border="2px solid black";
Btn.style.borderRadius="1rem";
Btn.style.fontSize="1.5rem";
document.body.prepend(Btn);
document.body.style.textAlign="center";

const URL = "https://cat-fact.herokuapp.com/facts";

const getsData = async () => {
    let response = await fetch(URL);
    console.log(response);
    console.log(response.status);
    console.log(response.json); // This logs the json function itself, not the data
    // console.log(response.headers);
    // console.log(response.blob);
    
    let data = await response.json(); // Correctly parse the JSON data
    console.log(data);
    // console.log(data[0].text);
    // console.log(data[1].text);
    // console.log(data[2].text);
    // console.log(data[3].text);
    // console.log(data[4].text);
    p1.innerText=data[0].text;
    p2.innerText=data[1].text;
    p3.innerText=data[2].text;
    Para.innerText=data[3].text;
}
Btn.addEventListener("click",getsData);
// getsData(); // Just call the function without logging it, since it's async

