function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "It is hot, the sky is blue...",
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
