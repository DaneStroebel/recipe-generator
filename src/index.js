function displayRecipe(response) {
  const recipeContent = document.querySelector("#recipe-content");

  // safety check (prevents crash)
  if (!recipeContent) {
    console.error("Missing #recipe-content element in HTML");
    return;
  }

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

  const apiKey = "o6f15043f3d68f1b9adbe4c006et00a2";

  const prompt = `Generate a recipe for ${instructionsInput.value.trim()}`;

  const context =
    "You are a top chef. Create recipes in simple HTML format. Separate ingredients and instructions using <br> tags.";

  const apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt,
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">Generating recipe...</div>`;

  axios
    .get(apiURL)
    .then(displayRecipe)
    .catch((error) => {
      console.error(error);
      recipeElement.innerHTML =
        "<p>Something went wrong. Please try again.</p>";
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#recipe-generator-form");
  form.addEventListener("submit", generateRecipe);
});
