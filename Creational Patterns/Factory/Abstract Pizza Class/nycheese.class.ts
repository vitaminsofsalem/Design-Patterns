import { PizzaAbstract } from "./pizza.abstract.class";

export class NYCheesePizza extends PizzaAbstract {
	prepare(): void {
		console.log("Preparing NY Cheese Pizza...");
	}

	bake(): void {
		console.log("Baking NY Cheese Pizza...");
	}

	cut(): void {
		console.log("Cutting NY Cheese Pizza...");
	}

	box(): void {
		console.log("Boxing NY Cheese Pizza...");
	}
}
