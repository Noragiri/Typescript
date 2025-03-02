// Write your TypeScript code here
const itemInput = document.querySelector<HTMLInputElement>("#itemInput");
const addButton = document.querySelector("#addButton");

addButton.addEventListener("click", addCoffee);

itemInput.addEventListener(
    "keypress",
    (event) => event.key === "Enter" && addCoffee()
);

const listOfCoffees = document.querySelector<HTMLUListElement>("#list");

function addCoffee() {
    const textNode = document.createTextNode(itemInput.value);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.style.margin = "2px 5px";
    removeButton.addEventListener("click", removeItem);

    const newCoffee = document.createElement("li");
    newCoffee.appendChild(textNode);
    newCoffee.appendChild(removeButton);

    listOfCoffees.appendChild(newCoffee);
    itemInput.value = "";
    itemInput.focus();
}

function removeItem(e: Event) {
    const removeButton = e.target as HTMLButtonElement;
    const listItem = removeButton.parentElement;
    listItem.remove();
}
