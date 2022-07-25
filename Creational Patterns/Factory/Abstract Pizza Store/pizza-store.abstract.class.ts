import { PizzaAbstract } from "../Abstract Pizza Class/pizza.abstract.class";

export abstract class PizzaStoreAbstract {
	orderPizza(type: string): PizzaAbstract {
		const pizza: PizzaAbstract = this.createPizza(type);

		pizza.prepare();
		pizza.bake();
		pizza.cut();
		pizza.box();

		return pizza;
	}

	abstract createPizza(type: string): PizzaAbstract;
}
