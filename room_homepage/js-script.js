function showNav() {
    const x = document.getElementById("nav-container");
    if (x.className === "nav-container") {
        x.className += " responsive";
    } else {
        x.className = "nav-container";
    }

    const y = document.getElementById("wrapper");
    if (y.className === "wrapper") {
        y.className += " responsive";
    } else {
        y.className = "wrapper";
    }
}


function hideNav() {
    const element = document.getElementById("nav-container");
    element.classList.remove("responsive");

    const background = document.getElementById("wrapper");
    background.classList.remove("responsive");
}