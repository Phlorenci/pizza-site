import type { PizzaItem } from "../data/placeholderData";

export function createMenuCard(item: PizzaItem): HTMLElement {
  const card = document.createElement("article");
  card.className = "menu-card reveal";
  card.dataset.category = item.category;
  card.dataset.name = item.name;
  card.dataset.description = item.description;
  card.dataset.ingredients = item.ingredients;

  const resolvedImageUrl = item.imageUrl
    ? `${import.meta.env.BASE_URL}${item.imageUrl}`
    : undefined;

  const imageMarkup = resolvedImageUrl
    ? `<img class="menu-card-img" src="${resolvedImageUrl}" alt="${item.name}" loading="lazy" />`
    : `<div class="img-placeholder" aria-hidden="true">img</div>`;

  card.innerHTML = `
    ${imageMarkup}
    <h3>${item.name}</h3>
    <p class="description">${item.description}</p>
    <p class="ingredients">${item.ingredients}</p>
    <span class="price">${item.price}</span>
    ${item.label ? `<span class="tag">${item.label}</span>` : ""}
  `;

  return card;
}