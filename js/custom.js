$(document).ready(function() {
    $('#hideP').click(function() {
        // $('.para').slideUp(1400, function() {
        //     $('.test').slideDown(1400);
        // });
        $('.para').hide(function() {
            $('.test').css({
                color: '#fff',
                border: '2px solid #080',
                padding: '40px',
                backgroundColor: '#900'
            });
        });
    });

    $('#showP').click(function() {
        // $('.para').slideDown(15000);
        $('.para').show();
    });



    //Height of Banner 
    function heightOfBanner() {
        let windowHeight = $(window).outerHeight();
        let navbarHeight = $('ul').outerHeight();
        let bannerHeight = windowHeight - navbarHeight;
        $('.banner').height(bannerHeight);
    }

    heightOfBanner();

    $(window).resize(heightOfBanner);

    //-------- Fixed Navbar 
    $(window).scroll(function() {
        let navHeight = $('ul').outerHeight();
        if ($(window).scrollTop() > navHeight) {
            $('ul').addClass('fixed-nav');
        } else {
            $('ul').removeClass('fixed-nav');
        }
    });

    // ------- Show Go Top Button

    $(window).scroll(function() {
        let firstSectionHeight = $('.banner').outerHeight();
        if ($(window).scrollTop() > firstSectionHeight) {
            $('.goTop').fadeIn();
        } else {
            $('.goTop').fadeOut();
        }
    });

    // --------- Go Top Function

    $('.goTop').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

});

$(document).ready(function() {
    $('.top-bar a').smoothScroll();
});