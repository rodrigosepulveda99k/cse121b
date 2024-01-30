/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Rodrigo Sepulveda";
let currentYear = 2024;
var profilePicture = "images/placeholder.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}<strong>`;
document.querySelector('img').setAttribute('src', profilePicture);
document.querySelector('img').setAttribute('alt', `Profile image of ${fullName}`);
yearElement.textContent = currentYear;


/* Step 5 - Array */
const favoriteFoods = ["Pizza", "Sushi", "Asado", "Burgers", "Milanesas"];
foodElement.textContent = favoriteFoods.join(";");

const anotherFavoriteFood = "Chaufa";
favoriteFoods.push(anotherFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`;

favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`;

favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`;









