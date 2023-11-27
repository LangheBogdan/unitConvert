const feet = 3.281;
const gallon = 0.264;
const pound = 2.204;
// get the Input element from the DOM
const usrInput = document.querySelector("#usrInput");
// get the Select element from the DOM
const selectElement = document.querySelector("#conversionType");
//get the Button element form the DOM
const convertBtn = document.querySelector("#convert");
const meterToFeetEl = document.querySelector("#meter-to-feet");
const litersToGalonEl = document.querySelector("#liters-to-gallons");
const kilogramsToPoundsEl = document.querySelector("#kilograms-to-pounds");

convertBtn.addEventListener("click", function () {
  meterToFeetEl.textContent = meterToFeet();
  litersToGalonEl.textContent = literToGalon();
  kilogramsToPoundsEl.textContent = kilogramToPound();
});

function meterToFeet() {
  let userInputValue = parseFloat(usrInput.value); // Convert the input value to a Float.
  let conversionMsg;

  if (userInputValue <= 0 || isNaN(userInputValue)) {
    // If input is 0, less than 0 or NaN (Not a Number), the inputs are invalid, will return warning.
    conversionMsg = "Please enter a number greater than 0";
  } else {
    if (userInputValue === 1) {
      conversionMsg = `${userInputValue} meter = ${(
        userInputValue * feet
      ).toFixed(3)} feet | ${userInputValue} feet = ${(
        userInputValue / feet
      ).toFixed(3)} meters`;
    } else {
      conversionMsg = `${userInputValue} meters = ${(
        userInputValue * feet
      ).toFixed(3)} feet | ${userInputValue} feet = ${(
        userInputValue / feet
      ).toFixed(3)} feet`;
    }
  }
  return conversionMsg;
}

function literToGalon() {
  let userInputValue = parseFloat(usrInput.value); // Convert the input value to a Float.
  let conversionMsg;

  if (userInputValue <= 0 || isNaN(userInputValue)) {
    // If input is 0, less than 0 or NaN (Not a Number), the inputs are invalid, will return warning.
    conversionMsg = "Please enter a number greater than 0";
  } else if (userInputValue === 1) {
    conversionMsg = `${userInputValue} liter = ${(
      userInputValue * gallon
    ).toFixed(3)} | ${userInputValue} gallon = ${(
      userInputValue / gallon
    ).toFixed(3)} liters`;
  } else {
    conversionMsg = `${userInputValue} liters = ${(
      userInputValue * gallon
    ).toFixed(3)} gallons | ${userInputValue} gallons = ${(
      userInputValue / gallon
    ).toFixed(3)} liters`;
  }

  return conversionMsg;
}

function kilogramToPound() {
  let userInputValue = parseFloat(usrInput.value); // Convert the input value to a Float.
  let conversionMsg;

  if (userInputValue <= 0 || isNaN(userInputValue)) {
    // If input is 0, less than 0 or NaN (Not a Number), the inputs are invalid, will return warning.
    conversionMsg = "Please enter a number greater than 0";
  } else if (userInputValue === 1) {
    conversionMsg = `${userInputValue} kilogram = ${(
      userInputValue * pound
    ).toFixed(3)} | ${userInputValue} pound = ${(
      userInputValue / pound
    ).toFixed(3)} kilograms`;
  } else {
    conversionMsg = `${userInputValue} kilograms = ${(
      userInputValue * pound
    ).toFixed(3)} pounds | ${userInputValue} pounds = ${(
      userInputValue / pound
    ).toFixed(3)} kilograms`;
  }

  return conversionMsg;
}
