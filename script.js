window.onload = function() {
    // Find the play button
    var playButton = document.querySelector('.fp-play .fp-icon.fp-playbtn');

    // Check if the play button exists
    if (playButton) {
        // Simulate a click on the play button
        playButton.click();
    } else {
        console.log("Play button not found");
    }
};
