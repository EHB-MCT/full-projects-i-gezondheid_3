// var hasAdjusted = false;

// $(window).scroll(function () {
//     if ($(document).width() > 400) {

//         var scrollAfstand = $(window).scrollTop();
//         //  var hoogteBlock1 = $("#home").outerHeight();
//         console.log(scrollAfstand)
//         if (scrollAfstand >= 300 && !hasAdjusted) {
//             //true
//             $("#main-menu").addClass("fixedNav");
//             $("#main-menu").stop();
//             $("#main-menu").animate({
//                 width: '80%',
//             }, 1000);
//             hasAdjusted = true;

//         } else if (hasAdjusted) {
//             // //false
//             // $("#main-menu").removeClass("fixedNav");
//             // $("#main-menu").stop();
//             // $("#main-menu").animate({
//             //     width: '100%'
//             // }, 1000);
//             hasAdjusted = false;
//         }
//     }
// });
// var myVideo = document.getElementById("myVideo");


function myFunction() {
    // myVideo.src = "videos/fullProject-Video-Contact-Active.mp4";
    document.getElementById("video-1").style.display = "none";
    document.getElementById("video-2").style.display = "inline";
}


document.getElementById('myVideo2').addEventListener('ended', function () {
    document.getElementById("video-1").style.display = "inline";
    document.getElementById("video-2").style.display = "none";
    location.reload();
});