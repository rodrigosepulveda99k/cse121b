/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Rodrigo Sepulveda",
    photo: "images/placeholder.png",
    favoriteFoods: [
        'Chaufa',
        'Milanesas',
        'Asado',
        'Ice Cream'
    ],
    hobbies: [
        'Futbol',
        'Videogames',
        'Test programs',
        'Play Truco'
    ],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
    place: "Mendoza",
    length: "25 years"
  });

  myProfile.placesLived.push({
    place: "Lima, Peru",
    length: "2 years"
  });  

  myProfile.placesLived.push({
    place: "Santiago, Chile",
    length: "2 years"
  });

/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});


