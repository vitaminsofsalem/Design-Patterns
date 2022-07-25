import { PizzaAbstract } from "./pizza.abstract.class";

export class NYPepperoniPizza extends PizzaAbstract {
	prepare(): void {
		console.log("Preparing NY Pepperoni Pizza...");
	}

	bake(): void {
		console.log("Baking NY Pepperoni Pizza...");
	}

	cut(): void {
		console.log("Cutting NY Pepperoni Pizza...");
	}

	box(): void {
		console.log("Boxing NY Pepperoni Pizza...");
	}
}
