const openBtn = document.querySelector("#openOverlay");
const body = document.body;
const hello = createModal("hello!");

openBtn.addEventListener("click", e => {
    body.appendChild(hello)
})

function createModal(text) {
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    overlay.addEventListener("click", e => {
        if (e.target == overlay) {
            closeBtn.click();
        }
    })
    const container = document.createElement("div");
    container.classList.add("modal-container");
    overlay.appendChild(container);

    const closeBtn = document.createElement("a");
    closeBtn.href="#";
    closeBtn.classList.add("close");
    closeBtn.textContent="x";
    container.appendChild(closeBtn);
    closeBtn.addEventListener("click", e => {
        e.preventDefault();
        body.removeChild(overlay);
    })

    const content = document.createElement("div");
    content.classList.add("content");
    content.innerHTML = text;
    container.appendChild(content);

    return overlay;
}