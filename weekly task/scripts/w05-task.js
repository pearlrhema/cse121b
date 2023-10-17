/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    for (const temple of temples) {
        const myArticle = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName;
        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.setAttribute('alt', `${temple.location}`);
        myArticle.appendChild(h3);
        myArticle.appendChild(img);
        templesElement.appendChild(myArticle);
    };
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    let templesData = await response.json();
    templeList = templesData;
    displayTemples(templeList);
}

/* reset Function */
const reset = () => {
    templesElement.textContent = "";
}

/* sortBy Function */
const sortBy = (temples) => {
    reset();
    const filter = document.getElementById("sortBy").value;
    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        default:
            displayTemples(templeList);
            break;
    }
}


getTemples();
//reset();

/* Event Listener */
document.getElementById("sortBy").addEventListener('change', () => {sortBy(templeList)});