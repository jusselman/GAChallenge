// message in the console
console.log('Hi there, welcome to the JavaScript console!');

// initialize the application
var app = new Object();

app.shakePokeball = function shakePokeball() {
  // code BELOW this line for challenge #1 -->
  var ball = document.getElementById('pokeball');
  ball.classList.add('shake');
}; // <-- code ABOVE this line for challenge #1

app.setName = function setName() {
  // code BELOW this line for challenge #2 -->
  var userName = prompt('What is your name?');
  var firstName = document.getElementById('first-name');
  firstName.innerHTML = userName;
}; // <-- code ABOVE this line for challenge #2

app.setWebsite = function setWebsite() {
  // code BELOW this line for challenge #3 & bonus -->
  var userInput = prompt('What is your favorite website?');
  var favWeb = document.getElementById('favorite-website');
  // .setAttribute('href', userInput);
  favWeb.innerHTML =
    '<a href="https://' + userInput + '">' + userInput + '</a>';
}; // <-- code ABOVE this line for challenge #3 & bonus
