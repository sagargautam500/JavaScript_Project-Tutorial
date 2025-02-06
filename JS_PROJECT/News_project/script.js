const API_Key="ff3d4b41f05c46e794a582c284302885";
const url="https://newsapi.org/v2/everything?q=";

function fillDataInCard(cardClone,article){
const newsImg=cardClone.querySelector("#news-img");
const newsTitle=cardClone.querySelector("#news-title");
const newsSource=cardClone.querySelector("#news-source");
const newsDesc=cardClone.querySelector("#news-desc");
newsImg.src=article.urlToImage;
newsTitle.innerHTML=article.title;
newsDesc.innerHTML=article.description;

const date = new Date(article.publishedAt).toLocaleString("en-US", {
    timeZone: "Asia/Kathmandu",
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
});
newsSource.innerHTML=article.source.name+"  ."+date;

cardClone.firstElementChild.addEventListener("click",()=>{
 window.open(article.url,"_blank");
});
  


}

function bindData(articles){
    const cardsContainer=document.getElementById("card-container");
    const newsCardTemplate=document.getElementById("template-news-card");
    cardsContainer.innerHTML="";

    articles.forEach(article=>{
         if(!article.urlToImage)return;
         const cardClone=newsCardTemplate.content.cloneNode(true);
         fillDataInCard(cardClone,article);//for data fillled in every template
         cardsContainer.appendChild(cardClone);
    })
}

async function fetchNews(query) {
    let res=await fetch(`${url}${query}&apiKey=${API_Key}`);
    let data=await res.json();
    bindData(data.articles);//for data binding in UI
}
window.addEventListener("load",fetchNews("Nepal"));




function logoClick(){
    window.location.reload();
}
function onNavItem(id){
  fetchNews(id);  
}

const newsInputs = document.getElementById("news-input");
const searchbutton = document.getElementById("search-button");
searchbutton.addEventListener("click", () => {
    const query = newsInputs.value; // Correctly get the value from the input
    if (!query) return;   
    fetchNews(query); // Make sure this function is defined elsewhere
});

const sportDiv = document.querySelector(".sports");
function onNavSport() {

    if (sportDiv.classList.contains("active")) {
        sportDiv.classList.remove("active");
        sportDiv.classList.add("sports");
    } else {
        sportDiv.classList.add("active");
        sportDiv.classList.remove("sports");
    }
}

