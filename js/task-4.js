const counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const referenceToValue = document.querySelector("#value");

function onDecrementBtnClick() {
  counterValue = ++referenceToValue.textContent;
}
function onIncrementBtnClick() {
  counterValue = --referenceToValue.textContent;
}

incrementBtn.addEventListener("click", onDecrementBtnClick);

decrementBtn.addEventListener("click", onIncrementBtnClick);
