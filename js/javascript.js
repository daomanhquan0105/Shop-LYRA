document.addEventListener("DOMContentLoaded", function() {

    var animation_bottom_left = document.querySelectorAll(".products-hight .animation-bottom-left .col-md-3");
    var location_bottom_left = 750;
    var status_location_left = true;

    var animation_bottom_right = document.querySelectorAll(".products-hight .animation-bottom-right .col-md-3");
    var location_bottom_right = 850;
    var status_location_right = true;

    var animation_product_detail = document.querySelectorAll(".products-detail .col-md");
    var product_detail_location = 1300;
    var status_product_detail = true;

    var customer = document.querySelector(".customers-say");
    var customer_comment_location = 2400;
    var status_customer_comment = true;

    window.addEventListener("scroll", function() {
        if (window.pageYOffset > location_bottom_left) {
            if (status_location_left === true) {
                for (var i = 0; i < animation_bottom_left.length; i++) {
                    if (i % 2 == 0) {
                        animation_bottom_left[i].classList.add("animate__animated", "animate__fadeInLeft");
                    } else {
                        animation_bottom_left[i].classList.add("animate__animated", "animate__fadeInRight");
                    }
                }
                status_location_left = false;
            }
        }

        if (window.pageYOffset > location_bottom_right) {
            if (status_location_right === true) {
                for (var j = 0; j < animation_bottom_right.length; j++) {
                    if (j % 2 == 0) {
                        animation_bottom_right[j].classList.add("animate__animated", "animate__fadeInLeft", "animate__delay-1s");
                    } else {
                        animation_bottom_right[j].classList.add("animate__animated", "animate__fadeInRight", "animate__delay-1s");
                    }
                }
                status_location_right = false;
            }
        }

        if (window.pageYOffset > product_detail_location) {
            if (status_product_detail === true) {
                for (var i = 0; i < animation_product_detail.length; i++) {
                    if (i % 2 == 0) {
                        animation_product_detail[i].classList.add("animate__animated", "animate__backInLeft");
                    } else {
                        animation_product_detail[i].classList.add("animate__animated", "animate__backInRight");
                    }
                    if (i > 4) {
                        animation_product_detail[i].classList.add("animate__delay-2s")
                    }
                }
                status_product_detail = false;
            }
        }

        if (window.pageYOffset > customer_comment_location) {
            if (status_customer_comment === true) {
                customer.classList.add("animate__animated", "animate__backInUp");
                status_customer_comment = false;
            }
        }
    }, false);
}, false);