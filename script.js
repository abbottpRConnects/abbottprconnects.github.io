window.onload = function() {
    var embed = document.getElementById('videoEmbed');

    if (embed) {
        // Request Fullscreen
        if (embed.requestFullscreen) {
            embed.requestFullscreen();
        } else if (embed.mozRequestFullScreen) { /* Firefox */
            embed.mozRequestFullScreen();
        } else if (embed.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            embed.webkitRequestFullscreen();
        } else if (embed.msRequestFullscreen) { /* IE/Edge */
            embed.msRequestFullscreen();
        }
    } else {
        console.log("Embed element not found");
    }
};
