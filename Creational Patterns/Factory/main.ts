import { NYPizzaStore } from "./Abstract Pizza Store/nypizza-store.class";
import { PizzaStoreAbstract } from "./Abstract Pizza Store/pizza-store.abstract.class";
import { PizzaAbstract } from "./Abstract Pizza Class/pizza.abstract.class";

const newYorkPizzaStore: PizzaStoreAbstract = new NYPizzaStore();
newYorkPizzaStore.orderPizza("cheese");
