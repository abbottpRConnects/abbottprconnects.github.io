// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Find the element with the specified classes
    var playButton = document.querySelector('.fp-icon.fp-playbtn');

    // Check if the element exists
    if (playButton) {
        // Programmatically click the element
        playButton.click();
        console.log("Play button clicked");
    } else {
        console.log("Play button not found");
    }
});
