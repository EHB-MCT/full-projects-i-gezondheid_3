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