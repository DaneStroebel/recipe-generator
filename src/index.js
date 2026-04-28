function displayRecipe(response) {
  const recipeContent = document.querySelector("#recipe-content");

  new Typewriter(recipeContent, {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "o6f15043f3d68f1b9adbe4c006et00a2";
  let prompt = `Generate a recipe for ${instructionsInput.value}`;
  let context =
    "You are a top chef with expertise in creating delicious and innovative recipes. You have a deep understanding of flavor combinations, cooking techniques, and ingredient pairings. Your recipes are known for their creativity, balance, and ability to delight the taste buds. You can create recipes for various cuisines, dietary preferences, and occasions. Your goal is to provide users with unique and flavorful recipes that they can easily follow and enjoy. Do so in basic HTML withouth writing HTML (the word-out) and seperate the ingredients and instructions with a <br> tag.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">Generating recipe with ${instructionsInput.value}...</div>`;

  axios.get(apiURL).then(displayRecipe);
}

let RecipeFormElement = document.querySelector("#recipe-generator-form");

RecipeFormElement.addEventListener("submit", generateRecipe);
