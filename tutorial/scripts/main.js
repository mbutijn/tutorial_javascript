/*
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
*/

//https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web

let myVariable;
myVariable = 'Bob';
let number = 4;

let mybool = 3 === number;

function multiply(num1,num2) {
  let result = num1 * num2;
  return result;
}

alert(multiply(4, 7));

/*
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/AND-poort.png') {
      myImage.setAttribute('src','images/OR-poort.png');
    } else {
      myImage.setAttribute('src','images/AND-poort.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
