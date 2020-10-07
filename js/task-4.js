const counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

function onDecrementBtnClick() {
  counterValue = ++document.querySelector("#value").textContent;
}
function onIncrementBtnClick() {
  counterValue = --document.querySelector("#value").textContent;
}

incrementBtn.addEventListener("click", onDecrementBtnClick);

decrementBtn.addEventListener("click", onIncrementBtnClick);
