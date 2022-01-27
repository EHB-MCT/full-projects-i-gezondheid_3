$(window).scroll(function () {
    var scrollAfstand = $(window).scrollTop();
    var hoogteBlock1 = $("#home").outerHeight();

    if (scrollAfstand >= 100) {
        //true
        $("#main-menu").addClass("fixedNav");
        $("#main-menu").stop();
        // $("#main-menu").animate({
        //     width: '70%',
        //     margin: "auto"
        // }, 2000);

    } else {
        //false
        $("#main-menu").removeClass("fixedNav");
        $("#main-menu").stop();
        // $("#main-menu").animate({
        //     width: '100%'
        // }, 2000);
    }
});