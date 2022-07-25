import { NYCheesePizza } from "../Abstract Pizza Class/nycheese.class";
import { NYPepperoniPizza } from "../Abstract Pizza Class/nypepperoni.class";
import { PizzaAbstract } from "../Abstract Pizza Class/pizza.abstract.class";
import { PizzaStoreAbstract } from "./pizza-store.abstract.class";

export class NYPizzaStore extends PizzaStoreAbstract {
	createPizza(type: string): PizzaAbstract {
		let pizza!: PizzaAbstract;
		switch (type) {
			case "cheese":
				pizza = new NYCheesePizza();
				break;
			case "pepperoni":
				pizza = new NYPepperoniPizza();
				break;
		}

		return pizza;
	}
}
