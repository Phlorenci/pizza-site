export interface PizzaItem {
  name: string;
  description: string;
  ingredients: string;
  price: string;
  label?: string;
  category: "classic" | "vegetarian" | "spicy";
}

export const placeholderPizzas: PizzaItem[] = [
  { name: "Pizza Name", description: "Description", ingredients: "Ingredients", price: "Price", label: "Label", category: "classic" },
  { name: "Pizza Name", description: "Description", ingredients: "Ingredients", price: "Price", category: "vegetarian" },
  { name: "Pizza Name", description: "Description", ingredients: "Ingredients", price: "Price", label: "Label", category: "spicy" },
  { name: "Pizza Name", description: "Description", ingredients: "Ingredients", price: "Price", category: "classic" },
  { name: "Pizza Name", description: "Description", ingredients: "Ingredients", price: "Price", label: "Label", category: "vegetarian" },
  { name: "Pizza Name", description: "Description", ingredients: "Ingredients", price: "Price", category: "spicy" },
  { name: "Pizza Name", description: "Description", ingredients: "Ingredients", price: "Price", category: "classic" },
  { name: "Pizza Name", description: "Description", ingredients: "Ingredients", price: "Price", label: "Label", category: "vegetarian" },
  { name: "Pizza Name", description: "Description", ingredients: "Ingredients", price: "Price", category: "spicy" },
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