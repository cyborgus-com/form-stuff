console.log("Form Fillerino is here and is going to mess you up");

const form = document.querySelector("#testform");

const email = document.querySelector("#email");
const emailError = document.querySelector("#email + span.error");

const country = document.querySelector("#country");
const countryError = document.querySelector("#country + span.error");

const postalcode = document.querySelector("#postalcode");
const postalcodeError = document.querySelector("#postalcode + span.error");

const password = document.querySelector("#password");
const passwordError = document.querySelector("#password + span.error");

const passwordrepeat = document.querySelector("#passwordrepeat");
const passwordrepeatError = document.querySelector(
  "#passwordrepeat + span.error",
);

// email.addEventListener("input", (event) => {
//   if (email.validity.valid) {
//     emailError.textContent = "Looks good!";
//     emailError.className = "error good";
//   } else {
//     emailError.textContent = "NO!";
//     emailError.className = "error bad";
//     // showError(event);
//   }
// });

form.querySelectorAll("input").forEach((input) => {
  input.addEventListener("input", () => {
    const errorSpan = input.parentElement.querySelector("span.error");

    if (input.validity.valid) {
      errorSpan.textContent = "Looking good so far";
      errorSpan.className = "error good"; // Remove 'active'
    } else {
      showError(input); // Now works for any input!
    }
  });
});

function showError(input) {
  // Find the error span next to this input (assumes structure: input + span.error)
  const errorSpan = input.parentElement.querySelector("span.error");

  let message = "";

  if (input.validity.valueMissing) {
    message = "This field is required.";
  } else if (input.validity.typeMismatch) {
    if (input.type === "email") {
      message = "Please enter a valid email address.";
    } else {
      message = "Please match the requested format.";
    }
  } else if (input.validity.tooShort) {
    message = `Please use at least ${input.minLength} characters (you are currently using ${input.value.length} characters).`;
  } else if (input.validity.patternMismatch) {
    message = "Please match the pattern requested.";
  } else if (input.validity.rangeUnderflow) {
    message = `Please enter a value greater than or equal to ${input.min}.`;
  } else if (input.validity.rangeOverflow) {
    message = `Please enter a value less than or equal to ${input.max}.`;
  } else if (input.validity.stepMismatch) {
    message = "Please enter a valid value.";
  } else if (input.validity.badInput) {
    message = "Please enter a valid number.";
  }
  // Add more conditions as needed...

  errorSpan.textContent = message;
  errorSpan.className = "error bad"; // Add 'active' for visibility/styling
}

const submit = document.querySelector("#submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    email.validity.valid &
    country.validity.valid &
    postalcode.validity.valid &
    password.validity.valid &
    passwordrepeat.validity.valid
  ) {
    form.reset();
    alert("Submission successful!");
  } else {
    alert(
      "Something's OFF - see the if there are RED error messages under some of the fields",
    );
  }
});
