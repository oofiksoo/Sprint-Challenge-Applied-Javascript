// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
const hdrloc = document.querySelector('.header-container')
hdrloc.appendChild(Header());

function Header() {
    //create elements
    const hdr = document.createElement('div'), //header div
        spdate = document.createElement('span'), //date span
        httl = document.createElement('h1'), //title h1
        sptemp = document.createElement('span'); //temp span
    //name classes
    hdr.classList.add('header');
    spdate.classList.add('date');
    sptemp.classList.add('temp');
    //append element structure
    hdr.appendChild(spdate);
    hdr.appendChild(httl);
    hdr.appendChild(sptemp);
    //set content source
    spdate.textContent = 'MARCH 28, 2019';
    httl.textContent = 'Lambda Times';
    sptemp.textContent = '98°';

    //return build header div
    return hdr
}