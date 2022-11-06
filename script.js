"use strict";

// let form = document.getElementById('firstNameForm');
//  let firstN = document.getElementById("firstName");
// let lastN = document.getElementById("lastName");

// form.onsubmit = function(event) {
// event.preventDefault();
// let input = form.elements.firstName
// let input2 = form.elements.lastName

// alert("Hello " + input.value + " " + input2.value);

// alert(`Hello ${firstN.value} ${lastN.value}`);
// } 

async function getData() {
    const res = await fetch("https://random.dog/woof.json");
    const data = await res.json("");
    const img = document.createElement("img");
    img.src = data.url;
    // document.body.append(img);
    successMessage.append(img);

    // console.log(Math.round(data.main.temp));
}

async function getData1() {
    const res1 = await fetch (
        "https://api.openweathermap.org/data/2.5/weather?lat=59.3293&lon=18.0686&units=metric&appid=6b97edc11e828cae4df4e9c1271376fa"
        ); 
    const data1 = await res1.json("");

    document.body.append((Math.round(data1.main.temp)) + " degrees celsius outside in Stockholm.");
    // successMessage.append(img);
}


const counterEl = document.getElementById("counter");
 const addEl = document.getElementById("add");
 const minusEl = document.getElementById("subtract");
 const resetEl = document.getElementById("reset");

 let counter = 0;

 addEl.onclick = function () {
     counter += 1;
     counterEl.innerHTML = counter;
 }

 resetEl.onclick = function () {
     counter = 0;
     counterEl.innerHTML = counter;    
 }

 minusEl.onclick = function () {
    counter -= 1;
    counterEl.innerHTML = counter;
 }


const form = document.getElementById("guessForm");
const errorMessage = document.getElementById("errorMessage");
const successMessage = document.getElementById("successMessage");




let number = Math.floor(Math.random() * 10) + 1;



function showErrorMessage (message) {
    errorMessage.classList.add("visible");
    errorMessage.innerHTML = message; 

    setTimeout(function () {
        errorMessage.classList.remove("visible");
    }, 1000)
}

function showSuccessMessage (message) {
    successMessage.classList.add("visible");
    successMessage.innerHTML = message;

    setTimeout(function () {
        successMessage.classList.remove("visible");
    }, 5000)    
}


form.onsubmit = function (event) {
    event.preventDefault();
    
    let guess = Number(form.elements.guess.value);
    form.elements.guess.value = "";

    if (Number.isNaN(guess)) {
        showErrorMessage("That is not a number...");
    } else if (counter === number) {
        // showSuccessMessage("Correct! And it is " + getData() + " degrees celsius in Stockholm");
        showSuccessMessage("Correct, here's a picture of a dog."), getData(), getData1();
    } else if (counter < number) {
        showErrorMessage("That number is too low!")
    } else if (counter > number) {
        showErrorMessage("That number is too high!")
    }
}

