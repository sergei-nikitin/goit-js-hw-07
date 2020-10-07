const inputText = document.querySelector("#name-input");
const spanText = document.querySelector("#name-output");

inputText.addEventListener("input", onSubmitChangeText);
function onSubmitChangeText(event) {
  if (event.lenght === 0) {
    spanText.textContent = "незнакомец";
  } else {
    spanText.textContent = event.currentTarget.value;
  }
}
