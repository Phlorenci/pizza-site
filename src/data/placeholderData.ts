export interface PizzaItem {
  name: string;
  description: string;
  ingredients: string;
  price: string;
  label?: string;
  category: "classic" | "vegetarian" | "spicy";
  imageUrl?: string;
}

export const placeholderPizzas: PizzaItem[] = [
  { name: "Margherita", description: "Description", ingredients: "Sauce, Mozzarella cheese and Fresh Basil", price: "Price", label: "Label", category: "classic", imageUrl: "/images/pizzas/margherita.jpg" },
  { name: "Pepperoni", description: "Description", ingredients: "Sauce, Mozzarella cheese and Pepperoni", price: "Price", category: "classic", imageUrl: "/images/pizzas/pepperoni.jpg" },
  { name: "Meat Mania", description: "Description", ingredients: "Sauce, Mozzarella cheese, Pepperoni, Ham, Sausage and Bacon", price: "Price", label: "Label", category: "spicy", imageUrl: "/images/pizzas/meat-mania.jpg" },
  { name: "Hawaiian", description: "Description", ingredients: "Sauce, Mozzarella cheese, Pineapple, Sausage and Bacon", price: "Price", category: "classic", imageUrl: "/images/pizzas/hawaiian.jpg" },
  { name: "Gorgonzola", description: "Description", ingredients: "Mozzarella and Gorgonzola cheese", price: "Price", label: "Label", category: "classic", imageUrl: "/images/pizzas/gorgonzola.jpg" },
  { name: "Mushroom", description: "Description", ingredients: "Sauce, Mozzarella cheese, Black olives, Onion and Mushrooms", price: "Price", category: "vegetarian", imageUrl: "/images/pizzas/mushroom.jpg" },
  { name: "SpecialCombination", description: "Description", ingredients: "Sauce, Mozzarella cheese, Pepperoni, Ham, Sausage, Bacon, onion, black olives and capsicum", price: "Price", label: "Label", category: "classic", imageUrl: "/images/pizzas/special-combination.jpg" },
  { name: "Rucola", description: "Description", ingredients: "Sauce, Mozzarella cheese and Rucola ", price: "Price", label: "Label", category: "vegetarian", imageUrl: "/images/pizzas/rucola.jpg" },
  { name: "Deep cheese", description: "Description", ingredients: "Sauce, Mozzarella cheese 3x", price: "Price", category: "classic", imageUrl: "/images/pizzas/deep-cheese.jpg" },
];

export interface ProcessStep {
  title: string;
  text: string;
}

export const placeholderProcessSteps: ProcessStep[] = [
  { title: "Dough", text: "Dough info placeholder" },
  { title: "Sauce", text: "Sauce info placeholder" },
  { title: "Cheese", text: "Cheese info placeholder" },
  { title: "Fresh Ingredients", text: "Fresh ingredients info placeholder" },
];