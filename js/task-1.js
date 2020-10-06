const itemList = document.querySelectorAll("li.item");
console.log(`В списке ${itemList.length} категории`);

itemList.forEach((num) =>
  console.log(`Категория: ${num.firstElementChild.textContent}
  Количество элементов ${num.querySelectorAll("li").length}`)
);

console.log(itemList);
