// let currentLocation = navigator.geolocation;
// let dataDiv = document.getElementById('data');

// if(currentLocation){
//     currentLocation.getCurrentPosition(position => {
//         let latitude = position.coords.latitude;
//         let longitude = position.coords.longitude;
//         let latParagraph = document.createElement("p");
//         let latContent = document.createTextNode(`Your current latitude is: ${latitude}`);
//         let lonParagraph = document.createElement("p");
//         let lonContent = document.createTextNode(`Your current longitude is: ${longitude}`);

//         dataDiv.appendChild(latParagraph.appendChild(latContent));
//         dataDiv.appendChild(lonParagraph.appendChild(lonContent));

//         console.log(latParagraph);
//         console.log(lonParagraph);
//         console.log(dataDiv);
//     });
// }

// const addNumbers = (num1, num2) => {
//     return num1 + num2;
// }

// let numSection = document.createElement("p");
// let numSectionContent = document.createTextNode(`your added number is ${addNumbers(3,18)}`);
// numSection.appendChild(numSectionContent);

// dataDiv.appendChild(numSection);

// // Random Number

// let numbersArray = [1,2,16,17,28,67,87, 33];

// let randomNumber = Math.floor(Math.random() * numbersArray.length);


// console.log(randomNumber);

// Reverse

const inputFunction = document.getElementById('input-function');
const inputValue = document.getElementById('input-value').value;
const inputValueButton = document.getElementById('input-value-btn');
const resultDiv = document.getElementById("result");

function reverseWord(inputValue) {
    console.log(inputValue);
}

inputValueButton.addEventListener('click', () => {
    reverseWord();
});

