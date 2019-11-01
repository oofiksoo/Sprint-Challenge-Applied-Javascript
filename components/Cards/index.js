// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardEntry = document.querySelector(".cards-container"); //parent div
//api call
axios
    .get("https://lambda-times-backend.herokuapp.com/articles") //get data
    .then(response => {
        const articles = Object.entries(response.data.articles); //create array from obj to loop
        articles.forEach(item => { //loop array
            item[1].forEach(i => { //loop building cards
                const newArticle = Crdbldr(i);
                cardEntry.appendChild(newArticle); //append card to parent div
            });
        });
    });

function Crdbldr(obj) { //card builder access obj data
    const card = document.createElement("div"), //card container div
        cardHeadline = document.createElement("div"), //card title div
        cardAuthor = document.createElement("div"), //card author div
        imgContainer = document.createElement("div"), //card image div
        authorImg = document.createElement("img"), //card img
        authorName = document.createElement("span"); //card name span
    //set card names
    card.classList.add("card");
    cardHeadline.classList.add("headline");
    cardAuthor.classList.add("author");
    imgContainer.classList.add("img-container");
    //set element structure        
    card.appendChild(cardHeadline);
    card.appendChild(cardAuthor);
    cardAuthor.appendChild(imgContainer);
    imgContainer.appendChild(authorImg);
    cardAuthor.appendChild(authorName);
    //set element content
    cardHeadline.textContent = obj.headline;
    authorName.textContent = obj.authorName;
    authorImg.src = obj.authorPhoto;
    //return built card
    return card;
};