// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//axios API call

axios
    .get("https://lambda-times-backend.herokuapp.com/topics") //get data
    .then(response => {
        console.log(response);
        response.data.topics.forEach(element => { //loop data for seperate topics
            const tpc = tbldr(element);
            tbloc.appendChild(tpc); //append to parent location
        });
    })
    .catch(error => {
        console.log(error);
    });

const tbloc = document.querySelector('.topics'); //parent div

function tbldr(tbdta) { //tab builder accepts tab data object
    //create elements
    const tb = document.createElement('div');
    //set tab name
    tb.classList.add('tab');
    //set element content
    tb.textContent = tbdta;
    //return topic div
    return tb
}