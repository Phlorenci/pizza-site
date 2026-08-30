interface MenuFilterState {
  category: string;
  query: string;
}

const state: MenuFilterState = {
  category: "all",
  query: "",
};

export function initMenuFilters(): void {
  const pillsContainer = document.getElementById("filter-pills");
  const searchInput = document.getElementById("menu-search-input") as HTMLInputElement | null;

  if (pillsContainer) {
    pillsContainer.querySelectorAll<HTMLButtonElement>(".pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        pillsContainer.querySelectorAll(".pill").forEach((p) => p.classList.remove("active"));
        pill.classList.add("active");
        state.category = pill.dataset.filter ?? "all";
        applyFilters();
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      state.query = searchInput.value.trim().toLowerCase();
      applyFilters();
    });
  }
}

function applyFilters(): void {
  const cards = Array.from(document.querySelectorAll<HTMLElement>(".menu-card"));
  const noResultsEl = document.getElementById("menu-no-results");
  let visibleCount = 0;

  cards.forEach((card) => {
    const matchesCategory = state.category === "all" || card.dataset.category === state.category;

    const searchableText = [
      card.dataset.name ?? "",
      card.dataset.description ?? "",
      card.dataset.ingredients ?? "",
    ]
      .join(" ")
      .toLowerCase();

    const matchesQuery = state.query === "" || searchableText.includes(state.query);

    const show = matchesCategory && matchesQuery;
    card.style.display = show ? "" : "none";
    if (show) visibleCount++;
  });

  if (noResultsEl) {
    noResultsEl.hidden = visibleCount > 0;
  }
}