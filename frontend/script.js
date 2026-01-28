const toggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.body.classList.toggle("light", savedTheme === "light");
} else {
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    document.body.classList.toggle("light", prefersLight);
}

toggle?.addEventListener("click", () => {
    document.body.classList.toggle("light");
    localStorage.setItem(
        "theme",
        document.body.classList.contains("light") ? "light" : "dark"
    );
});


const form = document.getElementById("cl-form");
const output = document.getElementById("output");
const outputSection = document.getElementById("outputSection");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    output.innerHTML = `
            <div class="loading">
                <div class="spinner"></div>
                Generating cover letter...
            </div>
        `;

    setTimeout(() => {

      output.innerText =
        `Dear Hiring Manager,

I am excited to apply for this role. My skills and experience align closely with the job requirements, and I am confident I can contribute effectively to your team.

Sincerely,
Your Name`;

      // ✅ SAFE SCROLL (NO CRASH)
      if (outputSection) {
        requestAnimationFrame(() => {
          outputSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        });
      }

    }, 2000);
  });
}

window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});
