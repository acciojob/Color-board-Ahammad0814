const container = document.querySelector(".container");

for (let i = 1; i <= 800; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
}

const squareElements = document.querySelectorAll(".square");

squareElements.forEach(square => {
  square.addEventListener("mouseover", function() {
	const colors = ["#e74c3c", "#2b678f", "#98412a", "#23603c", "#543063"];
	const colorIndex = Math.floor(Math.random() * 5);
    this.style.backgroundColor = colors[colorIndex];
  });

  square.addEventListener("mouseout", function() {
    this.style.backgroundColor = "#80808050";
  });
});