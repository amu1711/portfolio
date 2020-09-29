$(function () {
    showHideNav();
    $(window).scroll(function () {
        showHideNav();
    });

    function showHideNav() {

        if ($(window).scrollTop() > 50) {
            $("nav").addClass("white-nav-top");
        
        } else {
            $("nav").removeClass("white-nav-top");
        
        }
    }
});
/*portfolio*/
$(window).on('load', function () {
    $("#isotope-container").isotope({});

    $("#isotope-filters").on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $("#isotope-container").isotope({
            filter: filterValue
        });
        $("#isotope-filters").find('active').removeClass('active');
        $(this).addClass('active');
    });

});
/* magnific popup*/
$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});



    /*mobile menu*/
$(function () {
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });
    $("#mobile-nav-close-btn,#mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });
});

$(function () {
    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);
        });
        this.destroy();
    }, {
        offset: "bottom-in-view"
    });

});
