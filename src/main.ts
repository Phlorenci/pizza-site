import "./style.css";
import { placeholderPizzas, placeholderProcessSteps } from "./data/placeholderData";
import { createMenuCard } from "./components/menuCard";
import { createProcessStep } from "./components/processStep";
import { initNav } from "./components/nav";
import { initFilterPills } from "./components/filterPills";
import { initScrollReveal } from "./components/scrollReveal";
import { initContactForm } from "./components/contactForm";

function renderMenu(): void {
  const grid = document.getElementById("menu-grid");
  if (!grid) return;
  placeholderPizzas.forEach((pizza) => grid.appendChild(createMenuCard(pizza)));
}

function renderProcessSteps(): void {
  const grid = document.getElementById("process-grid");
  if (!grid) return;
  placeholderProcessSteps.forEach((step) => grid.appendChild(createProcessStep(step)));
}

function init(): void {
  renderMenu();
  renderProcessSteps();
  initNav();
  initFilterPills();
  initContactForm();
  initScrollReveal(); // call last, after all .reveal elements exist in the DOM
}

document.addEventListener("DOMContentLoaded", init);