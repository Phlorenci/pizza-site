import type { PizzaItem } from "../data/placeholderData";

export function createMenuCard(item: PizzaItem): HTMLElement {
  const card = document.createElement("article");
  card.className = "menu-card reveal";
  card.dataset.category = item.category;

  card.innerHTML = `
    <div class="img-placeholder" aria-hidden="true">img</div>
    <h3>${item.name}</h3>
    <p class="description">${item.description}</p>
    <p class="ingredients">${item.ingredients}</p>
    <span class="price">${item.price}</span>
    ${item.label ? `<span class="tag">${item.label}</span>` : ""}
  `;

  return card;
}