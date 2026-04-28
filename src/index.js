function displayRecipe(response) {
  const recipeContent = document.querySelector("#recipe-content");
  if (!recipeContent) return;

  recipeContent.innerHTML = "";

  new Typewriter(recipeContent, {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  const instructionsInput = document.querySelector("#user-instructions");
  const recipeElement = document.querySelector("#recipe");
  const recipeContent = document.querySelector("#recipe-content");

  const apiKey = "o6f15043f3d68f1b9adbe4c006et00a2";
  const prompt = `Generate a recipe for ${instructionsInput.value.trim()}`;
  const context =
    "You are a top chef. Create recipes in simple HTML format. Separate ingredients and instructions using <br> tags. Do not mention html in your answer. Just start with the recipe. Do not include any explanations or introductions. The recipe should be concise and easy to follow.";
  const apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  recipeElement.classList.remove("hidden");
  recipeContent.innerHTML = `<div class="generating">Generating recipe...</div>`;

  axios.get(apiURL).then(displayRecipe);
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#recipe-generator-form");
  if (form) {
    form.addEventListener("submit", generateRecipe);
  }
});
