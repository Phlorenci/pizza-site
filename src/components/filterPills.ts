export function initFilterPills(): void {
  const pillsContainer = document.getElementById("filter-pills");
  const cards = () => Array.from(document.querySelectorAll<HTMLElement>(".menu-card"));

  if (!pillsContainer) return;

  pillsContainer.querySelectorAll<HTMLButtonElement>(".pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      pillsContainer.querySelectorAll(".pill").forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");

      const filter = pill.dataset.filter;
      cards().forEach((card) => {
        const show = filter === "all" || card.dataset.category === filter;
        card.style.display = show ? "" : "none";
      });
    });
  });
}