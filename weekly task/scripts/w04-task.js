/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Godwin Akpan Essien',
    photo: 'images/me.jpg',
    favoriteFoods: ['Afang Soup', 'Ekpang', 'rice', 'Banana Cream Pie'],
    hobbies: ['Scripture Reading', 'Playing keyboard', 'Singing'],
    placesLived: {
        place: 'Ikot Ekpene, Akwa Ibom',
        length: '20 years',
        place: 'Portharcourt',
        length: '1 month',
        place: 'Cross River',
        length: '2 weeks'
    }
};

/* Populate Profile Object with placesLive objects 
let myPlace = {
    place: 'Ikot Ekpene, Akwa Ibom',
    length: '20 years',
    place: 'Portharcourt',
    length: '1 month',
    place: 'Cross River',
    length: '2 weeks'
}*/
//myProfile.placesLived.push(myPlace);



/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
const imageElement = document.querySelector('#photo');
imageElement.src = myProfile.photo;
imageElement.setAttribute('alt', `Profile image of ${myProfile.name}`);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement('ul');
    li.textContent = hobbie;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.place.forEach(place => {
    let dl = document.createElement('dt');
    dl.textContent = place;
    document.querySelector('#places-lived') = myProfile.placesLived;
});
