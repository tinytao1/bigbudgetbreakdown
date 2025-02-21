// References
let amount = 0;
let timespan = 0;

let perYear = 0;
let perDay = 0;
let perHour = 0;
let perMinute = 0;
let perSecond = 0;

// Use event listeners to format (add commas) the input values AS THE USER TYPES.
const inputField = document.getElementsByClassName('addCommas');

inputField[0].addEventListener('input', function(event) {
  let value = event.target.value.replace(/,/g, ''); // Remove existing commas
  if (!/^\d*$/.test(value)) { // Check if the input consists only of digits
      value = value.replace(/[^\d]/g, ''); // Remove any non-digit characters
  }
  let formattedValue = value.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Add commas
  event.target.value = formattedValue; // Update the input field
});

// Repeat code above for second input.
inputField[1].addEventListener('input', function(event) {
  let value = event.target.value.replace(/,/g, ''); // Remove existing commas
  if (!/^\d*$/.test(value)) { // Check if the input consists only of digits
      value = value.replace(/[^\d]/g, ''); // Remove any non-digit characters
  }
  let formattedValue = value.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Add commas
  event.target.value = formattedValue; // Update the input field
});

// Event listeners for 3 buttons.
document.getElementById("enter_button")
    .addEventListener("click", getInputs);
document.getElementById("shortcut_button")
    .addEventListener("click", shortcutInput);
document.getElementById("clear-btn")
    .addEventListener("click", clearForm);

// Functions for buttons:

function shortcutInput() {
       document.getElementById('amount_enter').value = '1,700,000,000,000';
       document.getElementById('timespan_enter').value = 30;
       getInputs();
}

function clearForm() {
       // Clear the form inputs.
       document.getElementById('amount_enter').value = null;
       document.getElementById('timespan_enter').value = null;
       
       // Clear the confirmation element, and the amount and timespan confirmation elements.
       document.getElementById('confirmation').innerHTML = null;
       document.getElementById('amount_print').innerHTML = 0;
       document.getElementById('timespan_print').innerHTML = '0 years.';

       // Clear the breakdown printouts.
       document.getElementById('per_year').innerHTML = null;
       document.getElementById('per_day').innerHTML = null;
       document.getElementById('per_hour').innerHTML = null;
       document.getElementById('per_minute').innerHTML = null;
       document.getElementById('per_second').innerHTML = null;

return;
}

function getInputs() {

/* GENERAL PROCESS
       
       1. Get inputs via:  variable = document.getElementById('id').value;
              -Value from input is a string.
              - If inputs are NaNs, display NaN message under input.
       2. Convert string to number via:   variable = Number(variable);
       3. Convert number to an integer via:    variable = Math.round(variable);
       4. Add comma-formatting for display via:  variable =  variable.toLocaleString('en');
              -Steps 3 & 4 can be combined via: Math.round(variable).toLocaleString('en');
*/
       // Get user inputs.
       amount = document.getElementById('amount_enter').value;
       amount = Number(amount.replace(/,/g, ''));  // Remove commas.
       timespan = document.getElementById('timespan_enter').value;
       timespan = Number(timespan.replace(/,/g, ''));   // Remove commas.

       
       // Convert values to numbers; Round them to integers; Add commas via toLocaleString('en')
       amount = Number(amount);
       amount = Math.round(amount);
       timespan = Number(timespan);

       // print the inputs below the Enter button for confirmation
       document.getElementById('confirmation')
              .innerHTML = "You entered:";
       document.getElementById('amount_print')
              .innerHTML = amount.toLocaleString('en') + ".";
       document.getElementById('timespan_print')
              .innerHTML = `${timespan} years.`;

       // Do the math
       perYear = amount / timespan;
       perDay = amount / timespan / 365;
       perHour = amount / timespan / 365 / 24;
       perMinute = amount / timespan / 365 / 24 / 60;
       perSecond = amount / timespan / 365 / 24 / 60 / 60;

       // Round the results, and print them
       document.getElementById('per_year').innerHTML =
              Math.round(perYear).toLocaleString('en')
              + '.';

       if (Math.round(perDay) > 0) {
              document.getElementById('per_day').innerHTML =
              Math.round(perDay).toLocaleString('en')
              + '.';
       } else {document.getElementById('per_day').innerHTML =
              ' (less than $1)';}
       
       if (Math.round(perHour) > 0) {
              document.getElementById('per_hour').innerHTML =
              Math.round(perHour).toLocaleString('en')
              + '.';
       } else {document.getElementById('per_hour').innerHTML =
              ' (less than $1)';}

       if (Math.round(perMinute) > 0) {
              document.getElementById('per_minute').innerHTML =
              Math.round(perMinute).toLocaleString('en')
              + '.';
       } else {document.getElementById('per_minute').innerHTML =
              ' (less than $1)';}

       if (Math.round(perSecond) > 0) {
              document.getElementById('per_second').innerHTML =
              Math.round(perSecond).toLocaleString('en')
              + '.';
       } else {document.getElementById('per_second').innerHTML =
              ' (less than $1)';}
       return;
}

shortcutInput();
document.getElementById('confirmation').innerHTML = null;

