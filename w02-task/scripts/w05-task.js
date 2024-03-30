/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templeElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    templeList.forEach(function(temple) {
        
    
        let article = document.createElement("article");
        let h3 = document.createElement("h3");

        h3.textContent = temple.templeName;

        let img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.location;

        article.appendChild(h3);
        article.appendChild(img);

        templeElement.appendChild(article);

    });
}

/* async getTemples Function using fetch()*/
const getTemples = async() =>{
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"); 

    if (response.ok){
        templeList = await response.json();

        displayTemples(templeList);
    }
}

/* reset Function */
let reset = function(){
    templeElement.textContent = " ";
}

/* filterTemples Function */
let filterTemples = function(temples){
    reset();
    let filter = document.querySelector("#filtered").value;
    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple["location"].includes("Utah")));
            break;
        case "noutah":
            displayTemples(temples.filter(temple => !temple["location"].includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple["dedicated"]) <= new Date(1950, 0, 1)));
            break;
        default:
            displayTemples(temples);
            break;
    }
}

getTemples();

/* Event Listener */
document.querySelector("#filtered"),addEventListener("change", () => {filterTemples(templeList)});