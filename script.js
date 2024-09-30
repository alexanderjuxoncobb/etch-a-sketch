const gridContainer = document.querySelector("#grid-container");
const squareDiv = document.createElement("div");
squareDiv.setAttribute("id", "square-div");

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    gridContainer.appendChild(squareDiv);
  }
}
