export function initContactForm(): void {
  const form = document.getElementById("contact-form") as HTMLFormElement | null;
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Placeholder behavior only — real submission logic (API call) comes later
    console.log("Contact form submitted (placeholder — no backend wired yet)");
    form.reset();
  });
}