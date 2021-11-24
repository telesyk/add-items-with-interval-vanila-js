import ListModule from "./list-module";
import DropdownModule from "./dropdown-module";

const initialValue = 5;
let stateValue = null;

const getStateValue = () =>
  stateValue !== 0 && !stateValue ? initialValue : stateValue;

const handleClick = (e) => {
  const target = e.target;
  stateValue = parseInt(target.value, 10);
  renderApp();
};

const appElement = document.getElementById("app");
const containerElement = document.createElement("div");
const dropdownElement = DropdownModule(initialValue, handleClick);
appElement.className = "h-screen p-5 bg-gray-800 text-white";
appElement.appendChild(dropdownElement);

function renderApp() {
  const currentValue = getStateValue();
  containerElement.innerHTML = "";

  const headerTemplate = `<h1 class="text-lg">Create list of <samp class="mx-1 px-1 bg-gray-500">${currentValue}</samp> items with interval <samp class="mx-1 px-1 bg-gray-500">1 sec</samp></h1>`;
  containerElement.innerHTML = headerTemplate;
  containerElement.appendChild(ListModule(currentValue));
}
renderApp();

appElement.appendChild(containerElement);
