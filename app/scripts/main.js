const menuToggle = document.querySelector(".header-toggle");
const menuHeader = document.querySelector(".header-menu");
const expandClass = "is-expand";

console.log(menuHeader, menuToggle);

menuToggle.addEventListener("click", () => {
    menuHeader.classList.add(expandClass);
});

window.addEventListener("click", (e) => {
    if (!menuHeader.contains(e.target) && !e.target.matches(".header-toggle")) {
        menuHeader.classList.remove(expandClass);
    }
});

// SLICK SLIDDER
$(document).ready(function () {
    $(".quote-container").slick({
        prevArrow:
            "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:
            "<button type='button' class='slick-next pull-right'><i class='fa  fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                },
            },
        ],
    });
});
