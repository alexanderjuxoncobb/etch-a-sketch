const gridContainer = document.querySelector("#grid-container");

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const squareDiv = document.createElement("div");
    squareDiv.setAttribute("class", "square-div");
    gridContainer.appendChild(squareDiv);
  }
}
