const gridContainer = document.querySelector("#grid-container");
const btn = document.querySelector("button");

function createGrid(N) {
  gridContainer.innerHTML = "";
  for (let i = 0; i < N * N; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.setAttribute("class", "square-div");
    squareDiv.setAttribute("style", `flex: 0 0 calc(100% / ${N});`);
    gridContainer.appendChild(squareDiv);
  }
}

function addSketchListeners() {
  let squareDivs = document.querySelectorAll(".square-div");
  let isMouseDown = false;

  document.addEventListener("mousedown", function (event) {
    if (event.button === 0) {
      // Left mouse button
      isMouseDown = true;
    }
  });

  document.addEventListener("mouseup", function () {
    isMouseDown = false;
  });

  squareDivs.forEach((squareDiv) => {
    squareDiv.addEventListener("mousedown", function () {
      squareDiv.style.backgroundColor = "black";
    });
    squareDiv.addEventListener("mouseenter", function () {
      if (isMouseDown) {
        squareDiv.style.backgroundColor = "black";
      }
    });
  });
}

createGrid(16);
addSketchListeners();

btn.addEventListener("click", function (e) {
  let N = Number(prompt("How many squares? "));
  while (N > 100) N = Number(prompt("Please enter a value between 1 and 100 "));
  createGrid(N);
  addSketchListeners();
});
