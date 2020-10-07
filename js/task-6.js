const validationInput = document.querySelector("#validation-input");

function onValidationInputText() {
  if (validationInput.value.length < Number(validationInput.dataset.length)) {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  } else {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  }
}
validationInput.addEventListener("focus", () => {
  validationInput.classList = "";
});
validationInput.addEventListener("blur", onValidationInputText);
