// 1. Select elements (inputs, email, checkbox and button)
const allInputs = document.querySelectorAll(".form-control");
const emailInput = document.querySelector("#email");
const checkbox = document.querySelector("#tos");
const button = document.querySelector(".btn");

// 4. Check if email is valid
const validEmail = () => {
  return /^\w+@\w+(\.\w{2,6})+$/.test(emailInput.value);
};

// 7. Check if all inputs are filled
const allFilled = () => {
  const arrayOfInputs = Array.from(allInputs);

  return arrayOfInputs.every((input) => {
    return input.classList.contains("is-valid");
  });
};

// 6. Check if we can enable the button
const enableButton = () => {
  if (allFilled() && checkbox.checked) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
};

// 5. Update the input with the correct state
const updateUI = (input, isValid) => {
  if (isValid) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
  }
};

// 2.a Listen to the "keyup" event on each field
allInputs.forEach((input) => {
  input.addEventListener("keyup", () => {
    // 3.a If it is the email input we check we need to check if the email is valid
    if (input === emailInput) {
      updateUI(input, validEmail());
      // 3.b If it is any of the other inputs we check we need to check the input value
    } else {
      updateUI(input, input.value !== "");
    }
    enableButton();
  });
});

// 2.b. Listen to the "click" event on checkbox
checkbox.addEventListener("click", enableButton);
