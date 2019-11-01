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
const cardloc = document.querySelector(".cards-container"); //parent div
//api call
axios
    .get("https://lambda-times-backend.herokuapp.com/articles") //get data
    .then(response => {
        const arts = Object.entries(response.data.articles); //create array from obj to loop
        arts.forEach(dta => { //loop array
            dta[1].forEach(i => { //loop building cards
                const newcrd = crdbldr(i);
                cardloc.appendChild(newcrd); //append card to parent div
            });
        });
    });

function crdbldr(obj) { //card builder access obj data
    const crd = document.createElement("div"), //card container div
        crdhdln = document.createElement("div"), //card title div
        crdath = document.createElement("div"), //card author div
        crdimg = document.createElement("div"), //card image div
        athimg = document.createElement("img"), //card img
        athnm = document.createElement("span"); //card name span
    //set card names
    crd.classList.add("card");
    crdhdln.classList.add("headline");
    crdath.classList.add("author");
    crdimg.classList.add("img-container");
    //set element structure        
    crd.appendChild(crdhdln);
    crd.appendChild(crdath);
    crdath.appendChild(crdimg);
    crdimg.appendChild(athimg);
    crdath.appendChild(athnm);
    //set element content
    crdhdln.textContent = obj.headline;
    athnm.textContent = obj.authorName;
    athimg.src = obj.authorPhoto;
    //return built card
    return crd;
};