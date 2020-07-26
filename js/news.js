document.addEventListener("DOMContentLoaded", function() {
    var menu_header = document.querySelector(".menu-header");
    var vitrimenu = menu_header.offsetTop;
    var trangthaiMenu = true;
    console.log(vitrimenu);

    window.addEventListener("scroll", function() {
        if (window.pageYOffset > vitrimenu) {
            if (trangthaiMenu == true) {
                menu_header.classList.add("menu-den");
                trangthaiMenu = false;
            }
        } else if (window.pageYOffset <= vitrimenu) {
            if (trangthaiMenu == false) {
                menu_header.classList.remove("menu-den");
                trangthaiMenu = true
            }
        }
    });

    var nut_link2 = document.getElementsByClassName("click-to-head");

    for (let i = 0; i < nut_link2.length; i++) {
        nut_link2[i].onclick = function() {
            if (this.classList[1] == "" || this.classList[1] == undefined) {
                for (let j = 0; j < nut_link2.length; j++) {
                    nut_link2[j].classList.remove("active");
                }
                this.classList.add("active");
            }
        }
    }
}, false);