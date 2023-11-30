window.onload = function() {
    // Delay function execution by 5000 milliseconds (5 seconds)
    setTimeout(function() {
        // Find the play button
        var playButton = document.querySelector('.fp-player');

        // Check if the play button exists
        if (playButton) {
            // Simulate a click on the play button
            playButton.click();
        } else {
            console.log("Play button not found");
        }
    }, 1000); // 1000 milliseconds = 1 second
};
