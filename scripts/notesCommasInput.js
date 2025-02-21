 /* 
 Search: "js how to allow commas in input number?"
 
 Google answer: AI:
 Commas are typically used for formatting and not as part of the numerical value itself for calculations. To handle this, one approach is to use an event listener to format the input value as the user types, and another is to remove commas before processing the value numerically.
Here's an example using an input event listener to format the number with commas:

const inputField = document.getElementById('numberInput');

inputField.addEventListener('input', function(event) {
  let value = event.target.value.replace(/,/g, ''); // Remove existing commas
  if (!/^\d*$/.test(value)) { // Check if the input consists only of digits
      value = value.replace(/[^\d]/g, ''); // Remove any non-digit characters
  }
  let formattedValue = value.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Add commas
  event.target.value = formattedValue; // Update the input field
});

function getValueWithoutCommas() {
    let value = document.getElementById('numberInput').value;
    return Number(value.replace(/,/g, ''));
}


In this example, the input event listener is used to format the number as the user types. The function getValueWithoutCommas retrieves the value without commas for use in calculations.

