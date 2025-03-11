const buttons = document.querySelectorAll(".button");
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

let hamenuOpen = false;

const toggleHamenu = () => {
    hamenuOpen = !hamenuOpen;

    anime({
        targets: ".buttons",
        translateX: hamenuOpen ? -410 : 410,
        duration: 500,
        easing: "spring(1, 80, 10, 5)"
    });

    anime({
        targets: ".bar",
        rotate: hamenuOpen ? 30 : 0,
        duration: 100,
        scaleX: hamenuOpen ? 0.5 : 1,
        translateX: hamenuOpen ? 18 : 0,
        translateY: hamenuOpen ? 3 : 0,
    });

    anime({
        targets: ".bar:nth-child(2)",
        rotate: 0,
    });

    anime({
        targets: ".bar:nth-child(3)",
        rotate: hamenuOpen ? -30 : 0,
        duration: 100,
        scaleX: hamenuOpen ? 0.5 : 1,
        translateX: hamenuOpen ? 18 : 0,
        translateY: hamenuOpen ? -3 : 0,
    });
}