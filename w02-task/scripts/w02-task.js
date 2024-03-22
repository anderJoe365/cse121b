/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Joseph Anderson';
let currentYear = 2024;
let profilePicture = 'images/Joseph.jpg';



/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');



/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = currentYear;

imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `profile image of ${fullName}`);





/* Step 5 - Array */
let foods = ['Rice', ' Salmon', ' Sushi', ' Chicken'];
foodElement.innerHTML = `<strong>${foods}</strong>`;

let newfood = ' Pizza'
foods.push(newfood);
foodElement.innerHTML += `<br>${foods}`;

foods.shift();
foodElement.innerHTML += `<br>${foods}`;

foods.pop();
foodElement.innerHTML += `<br>${foods}`;




