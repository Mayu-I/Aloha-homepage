//Header-scroll
$(document).ready(function () {
    let headerHight = 100;
    $('a[href^=#]').click(function () {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - headerHight;
        $("html, body").animate({ scrollTop: position }, 50, "swing");
        return false;
    });
});


//Form
function subscribeBtn() {
    let email = document.getElementById("updates__email").value;
    if (email.match(/@/)) {
        alert('Mahalo! Thank you for subscribing!');
        email = '';
    } else {
        alert('Please enter a valid email address');
    };
};


//Carousel
$(function () {
    $('.products__slider').slick({
        dots: true,
        autoplay: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }]
    });


    //Cart-icon
    let addBtns = document.getElementsByClassName("products__itemBtn");
    let cartNum = document.getElementsByClassName("header__cartNum header__cartNum-hide")[0];
    let num = 0;
    function clickBtn() {
        cartNum.className = "header__cartNum header__cartNum-visible";
        num += 1;
        cartNum.innerText = num;
    };



    // console.log("total buttons", addBtns.length);

    for (let i = 0; addBtns.length; ++i) {
        if (!addBtns[i]) {
            break;
        }
        addBtns[i].addEventListener('click', clickBtn, false);
        addBtns.oncli
    }
});

// [i]