import type { ProcessStep } from "../data/placeholderData";

export function createProcessStep(step: ProcessStep): HTMLElement {
  const el = document.createElement("div");
  el.className = "process-step reveal";

  el.innerHTML = `
    <div class="icon-placeholder" aria-hidden="true">icon</div>
    <h3>${step.title}</h3>
    <p>${step.text}</p>
  `;

  return el;
}