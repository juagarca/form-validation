// TODO: Validate this form
// 1. Select elements (inputs, email, checkbox, button)
const allInputs = document.querySelectorAll(".form-control");
const emailInput = document.getElementById("email");
const checkbox = document.getElementById("tos");
const button = document.querySelector(".btn");

// 9. Check if all the fields are filled
const allFilled = () => {
  const arrayOfInputs = Array.from(allInputs);

  return arrayOfInputs.every((input) => {
    return input.classList.contains("is-valid");
  });
};

// 8. Check the rest of the form
const canEnableButton = () => {
  if (allFilled() && checkbox.checked) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
};

// 4. Check if email input value is valid
const emailIsValid = () => {
  return /^\w+@\w+(\.\w{2,6})+$/.test(emailInput.value);
};

// 5. Check the state of the element and update its class
const updateUI = (input, isValid) => {
  if (isValid) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
  } else {
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
  }
};

// 2. Listen for the user to interact with form
allInputs.forEach((input) => {
  input.addEventListener("keyup", () => {
    // 3. Check if the input is the email input or one of the others
    if (input === emailInput) {
      updateUI(emailInput, emailIsValid());
    } else {
      const isValid = input.value !== "";
      updateUI(input, isValid);
    }
    // 7. Check if we can enable the button
    canEnableButton();
  });
});

// 6. Check if the checkbox is ticked
checkbox.addEventListener("click", () => {
  // 7. Check if we can enable the button
  canEnableButton();
});
