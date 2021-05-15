{
    const message = () => {
        console.log("Cześć Developerzy!");
    }

    const changeBackgroundcolor = () => {
        const changeBackground = document.querySelector(".changeBackground");
        const body = document.querySelector(".body");
        const colorName = document.querySelector(".colorName");
        changeBackground.addEventListener("click", () => {
            body.classList.toggle("backgroundColor2");
            colorName.innerText = body.classList.contains("backgroundColor2") ? "białe" : "szare";
        });
    }
    
    const init = () => {
        changeBackgroundcolor();
    }

    message();
    init();
}
