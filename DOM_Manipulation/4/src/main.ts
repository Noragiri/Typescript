import { CoffeesComponent } from "./components/coffeesComponent";
import { ShopsComponent } from "./components/shopsComponent";

const output = document.querySelector("#output");
const coffeesButton =
    document.querySelector<HTMLButtonElement>("#coffeesButton");
const shopsButton = document.querySelector<HTMLButtonElement>("#shopsButton");
const themeInput = document.querySelector<HTMLInputElement>("#themeInput");

coffeesButton.addEventListener("click", () => {
    setLatestButtonToBold(coffeesButton);
    output.replaceChildren(new CoffeesComponent().render());
});

shopsButton.addEventListener("click", () => {
    setLatestButtonToBold(shopsButton);
    output.replaceChildren(new ShopsComponent().render());
});

themeInput.addEventListener("click", () => {
    themeInput.checked === true
        ? document.body.classList.toggle("dark-theme", true)
        : document.body.classList.toggle("dark-theme", false);
});

function setLatestButtonToBold(activeButton: HTMLButtonElement) {
    const buttons =
        document.querySelectorAll<HTMLButtonElement>("#menu button");
    buttons.forEach((button) =>
        button === activeButton
            ? button.classList.add("activeButton")
            : button.classList.remove("activeButton")
    );
}
