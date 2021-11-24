const listElement = document.createElement("div");
listElement.className = "max-w-screen-sm mx-auto py-3";

const ItemComponent = (item) =>
  `<li class="px-2 py-3 bg-gray-700">Item ${item}</li>`;

const ListComponent = (items) => {
  let listTemplate = "";
  items.forEach((item) => {
    listTemplate += ItemComponent(item);
  });
  return `<ul>${listTemplate}</ul>`;
};

const ListModule = (counter) => {
  const emptyListText = !counter ? "Empty list" : "Loading...";
  const itemsList = [];
  listElement.innerHTML = `<p>${emptyListText}</p>`;

  if (!!counter) {
    for (let i = 1; i <= counter; i++) {
      setTimeout(() => {
        itemsList.push(i);
        listElement.innerHTML = ListComponent(itemsList);
      }, i * 1000);
    }
  }

  return listElement;
};

export default ListModule;
