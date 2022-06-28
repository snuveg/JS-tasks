const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const list = document.querySelector("#items");
const items = document.querySelectorAll(".item");
const listStyle = getComputedStyle(list);

const step = parseInt(getComputedStyle(items[0]).width);
const minPos = 0;
const maxPos = (items.length - 3) * step;

let pos = parseInt(listStyle.right);

rightBtn.addEventListener("click", e => {
    e.preventDefault();
    if (pos < maxPos) {
        pos += step;
        list.style.right = `${pos}px`;
    }
});

leftBtn.addEventListener("click", e => {
    e.preventDefault();
    if (pos > minPos) {
        pos -= step;
        list.style.right = `${pos}px`;
    }
});