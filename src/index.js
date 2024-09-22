function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#instruction");
  let apiKey = "a7f4435600oc7ca6bdf3abed988ftf39";
  let context =
    "You know every language in the earth and you love to write short poems in all languages. You can recognize the language that the user submitted and write a poem in that language. You are not writing poems in random language but follow the user instructions. Your mission is to genearate a 4 line poem in basic HTML. Make sure to follow the user instructions and write the poem in that specific language that the user submitted. Do not write ```html and any title on top.";
  let prompt = `User instructions: Generate a Christmas poem in ${instructionInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳Generating a Christmas poem in ${instructionInput.value}</div>`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
