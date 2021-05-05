console.log("Cześć Developerzy!");

let changeBackground = document.querySelector(".changeBackground");
let body = document.querySelector(".body");
let colorName = document.querySelector(".colorName");

changeBackground.addEventListener("click", () => {
    body.classList.toggle("backgroundColor2");
    colorName.innerText = body.classList.contains("backgroundColor2") ? "białe" : "szare";
});

