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

anime({
    targets: ".paw",
    translateX: 50,
    direction: "alternate",
    loop: true,
    duration: 1000,
    easing: 'easeInOutSine',
    scaleX: 1.1,
    scaleY: 1.1
});

const slideTitle = document.querySelector(".titleEnd");
const slideDesc = document.querySelector(".slideDesc");
let i = 0;
const titles = ["am studying Computer Science at Drexel!","like to draw!"];
const descs = ["I have a particular interest in software engineering and game development, but am more than happy to explore new topics.",
              "Well, when I feel inspired. Usually with a lead pencil and sketchbook, sometimes on Krita with a cheap HUION tablet."];

const nextSlide = () => {
    var t1 = anime.timeline({
        easing: "easeInOutExpo"
    });
    t1
    .add({ // Reach
        targets: ".paw",
        translateX: -100,
        duration: 500,
    })
    .add({ // Pull title
        targets: slideTitle,
        translateX: 1050,
        duration: 500,
        complete: function() {
            if (++i == titles.length) {
                i = 0;
            }
            slideTitle.innerHTML = titles[i];
        }
    })
    .add({ // Pull paw
        targets: ".paw",
        translateX: 1050,
        duration: 500,
    }, "-=500")
    .add({ // Push title
        targets: slideTitle,
        translateX: 0,
        duration: 1000,
    })
    .add({ // Push paw
        targets: ".paw",
        translateX: -100,
        duration: 1000,
    }, "-=1000")
    .add({ // Move paw to desc
        targets: ".paw",
        translateX: 1050,
        translateY: 100,
        duration: 500,
    })
    .add({ // Reach
        targets: ".paw",
        translateX: -50,
        duration: 500,
    }, "-=100")
    .add({ // Pull desc
        targets: slideDesc,
        translateX: 1050,
        duration: 500,
        complete: function() {
            slideDesc.innerHTML = descs[i];
        }
    })
    .add({ // Pull paw
        targets: ".paw",
        translateX: 1050,
        duration: 500,
    }, "-=500")
    .add({ // Push desc
        targets: slideDesc,
        translateX: 0,
        duration: 1000,
    })
    .add({ // Push paw
        targets: ".paw",
        translateX: -100,
        duration: 1000,
    }, "-=1000")
    .add({ // Reset paw
        targets: ".paw",
        translateX: 0,
        translateY: 0,
        duration: 500,
    })
}