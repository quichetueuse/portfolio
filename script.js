function scrollToElement(elementSelector, instance = 0) {
  // Select all elements that match the given selector
  const elements = document.querySelectorAll(elementSelector);
  // Check if there are elements matching the selector and if the requested instance exists
  if (elements.length > instance) {
    // Scroll to the specified instance of the element
    elements[instance].scrollIntoView({ behavior: "smooth" });
  }
}

const link_competences = document.getElementById("link1");
const link_bts = document.getElementById("link2");
const link_stage = document.getElementById("link3");
const link_projets = document.getElementById("link4");
const link_veille = document.getElementById("link5");
const link_apropos = document.getElementById("link6");

link_competences.addEventListener("click", () => {
  scrollToElement(".header");
});

link_bts.addEventListener("click", () => {
  // Scroll to bts part
  scrollToElement(".header", 1);
});

link_stage.addEventListener("click", () => {
  // Scroll to projects part
  scrollToElement(".header", 2);
});

link_projets.addEventListener("click", () => {
  // Scroll to stages parts
  scrollToElement(".header", 3);
});

link_veille.addEventListener("click", () => {
  // Scroll to veille part
  scrollToElement("#veille");
});

link_apropos.addEventListener("click", () => {
  // Scroll to about part
  scrollToElement(".column");
});
