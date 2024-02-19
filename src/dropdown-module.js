const OptionComponent = ({ value, title, selected }) => {
  const optionElement = document.createElement("option");
  optionElement.setAttribute("value", value);
  optionElement.setAttribute("selected", !!selected);
  optionElement.textContent = !title ? value : title;

  return optionElement;
};

const SelectComponent = (options, cb) => {
  const selectElement = document.createElement("select");
  selectElement.className = "mx-1 px-1 bg-gray-500";

  if (cb) selectElement.addEventListener("change", cb);

  options.map((item) => selectElement.append(OptionComponent(item)));

  return selectElement;
};

const DropdownModule = (counter, cb) => {
  const optionsList = [];

  for (let i = 0; i <= counter; i++) {
    switch (i) {
      case 0:
        optionsList.push({ value: i, title: "None" });
        break;
      case counter:
        optionsList.push({ value: i, selected: true });
        break;
      default:
        optionsList.push({ value: i });
    }
  }

  const optionClick = !cb ? null : cb;

  return SelectComponent(optionsList, optionClick);
};

export default DropdownModule;
