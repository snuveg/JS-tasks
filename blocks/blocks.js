const qs = document.querySelector(".quantity-selector");
const cs = document.querySelector(".color-selector");
const blocks = document.querySelector(".blocks");
let odd = true;

const createMarkup = quantity => {
  let markup = "";
  for (let i=0; i<quantity; i++) {
    let block = document.createElement("div");
    block.classList.add("item");
    block.innerText = i + 1;
    markup += block.outerHTML;
  }
  return markup;
}

qs.addEventListener("change", (e) => {
  blocks.innerHTML = createMarkup(e.target.value);
})


cs.addEventListener("change", (e) => {
  const csVal = e.target.value;
  const items = document.querySelectorAll(".item");
  let color = "";

  for (let i=0; i<items.length; i++) {
    if (odd) {
      color = i % 2 == 0 ? csVal : "#fff";
    } else {
      color = i % 2 == 0 ? "#fff" : csVal;
    }

    coloring(items[i], color);
  }

  odd = !odd;
})

const coloring = (block, color) => {
  block.style.background = color;
}
