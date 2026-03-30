const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme");

  if (currentTheme === "dark") {
    body.removeAttribute("data-theme");
  } else {
    body.setAttribute("data-theme", "dark");
  }
});
console.log("JS is connected! 🚀");
