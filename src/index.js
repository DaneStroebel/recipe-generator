function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Generating your recipe...",
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

let RecipeFormElement = document.querySelector("#recipe-generator-form");

RecipeFormElement.addEventListener("submit", generateRecipe);
