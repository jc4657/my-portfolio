const buttons = document.querySelectorAll("nav ul li a");
const changeNavbarColor = () => {
    const sections = document.querySelectorAll("section");

    if (window.scrollY === 0) {
        buttons.forEach(button => {
            button.style.color = "white";
        }); 
    } else {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            
            if (rect.top <= 60) {
                const bgColor = window.getComputedStyle(section).backgroundColor;
                if (bgColor === "rgb(0, 0, 0)") {
                    buttons.forEach(button => {
                        button.style.color = "white";
                    });
                } else if (bgColor === "rgb(255, 255, 255)") {
                    buttons.forEach(button => {
                        button.style.color = "black";
                    });
                }
            }
        });
    }
}

window.addEventListener("load", changeNavbarColor);
window.addEventListener("scroll", changeNavbarColor);

const changeNavbarHover = (button) => {
    button.style.color = "lightcoral";
}

buttons.forEach(button => {
    button.addEventListener("mouseover", () => {changeNavbarHover(button);});
    button.addEventListener("mouseout", changeNavbarColor);
});

const hamenu = document.querySelector("nav");
let isHamenuOpen = false;
const openHamenu = () => {
    const sections = ["contact", "project", "about"];
    let i = 0;
    buttons.forEach(button => {
        button.innerHTML = `${sections[i]}`;
        button.href = `#${sections[i]}`;
        button.style.padding = "0 0.6rem";
        button.style.border = "0.2rem solid";
        i += 1;
    });
    isHamenuOpen = true;
}

hamenu.addEventListener("click", (e) => {
    if (!isHamenuOpen) {
        e.preventDefault();
        openHamenu();
    }
});
hamenu.addEventListener("mouseover", () => {hamenu.style.cursor = "pointer";});