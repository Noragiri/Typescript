export class CoffeesComponent {
    render(): HTMLElement {
        const coffees: string[] = ["Cappuccion", "Espresso", "Mocha"];

        const div = document.createElement("div");

        for (const coffee of coffees) {
            const p = document.createElement("p");
            p.textContent = coffee;
            div.append(p);
        }

        return div;
    }
}
