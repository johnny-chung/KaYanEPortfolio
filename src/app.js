let menuBtn;
let navMenu;
let visible=false;

window.onload = function() {
    menuBtn = document.querySelector(".menuBtn");
    navMenu = document.querySelector(".navMenu");
    menuBtn.addEventListener("click", () => {
        if (visible)
        {
            navMenu.style.display = "none";
            visible = false;
        }
        else
        {
            navMenu.style.display = "inline-flex";
            visible = true;
        }
        
    })
}