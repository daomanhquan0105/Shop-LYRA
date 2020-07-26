document.addEventListener("DOMContentLoaded", function() {

    var menu_header = document.querySelector(".menu-header");
    var menu = document.querySelector(".row.no-gutters.navbar-menu");
    var vitrimenu = menu.offsetTop;
    var trangthaimenu = true;



    window.addEventListener("scroll", function() {
        if (window.pageYOffset > vitrimenu) {
            if (trangthaimenu == true) {
                menu_header.classList.add("menu-den");
                trangthaimenu = false;
            }
        } else if (window.pageYOffset <= vitrimenu) {
            if (trangthaimenu == false) {
                menu_header.classList.remove("menu-den");
                trangthaimenu = true;
            }
        }
    }, false);

    var nut_link = document.getElementsByClassName("click-to");
    var nut_link2 = document.getElementsByClassName("click-to-head");

    for (let i = 0; i < nut_link2.length; i++) {
        nut_link[i].onclick = function() {
            if (this.classList[1] == "" || this.classList[1] == undefined) {
                for (let j = 0; j < nut_link.length; j++) {
                    nut_link[j].classList.remove("active");
                    nut_link2[j].classList.remove("active");
                }
                this.classList.add("active");
                nut_link2[i].classList.add("active");
            }
        };
        nut_link2[i].onclick = function() {
            if (this.classList[1] == "" || this.classList[1] == undefined) {
                for (let j = 0; j < nut_link.length; j++) {
                    nut_link2[j].classList.remove("active");
                    nut_link[j].classList.remove("active");
                }
                this.classList.add("active");
                nut_link[i].classList.add("active");
            }
        }
    }

}, false);

$(document).ready(function() {
    $('.post-wrapper').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: $(".next-second"),
        prevArrow: $(".prev-second"),
        responsive: [{
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
    $(".post-wrapper-4").slick({
        slidesToScroll: 1,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        nextArrow: $(".next-first"),
        prevArrow: $(".prev-first"),
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 756,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".post-wrapper-4-second").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: $(".next-3rd"),
        prevArrow: $(".prev-3rd"),
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
})