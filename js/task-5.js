const inputText = document.querySelector("#name-input");
const spanText = document.querySelector("#name-output");

inputText.addEventListener("input", onSubmitChangeText);
function onSubmitChangeText(event) {
  if (event.currentTarget.value.length !== 0) {
    spanText.textContent = event.currentTarget.value;
  } else {
    spanText.textContent = "незнакомец";
  }
}
