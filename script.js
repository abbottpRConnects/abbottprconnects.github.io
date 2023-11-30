window.onload = function() {
    // Delay function execution by 5000 milliseconds (5 seconds)
    setTimeout(function() {
        // Find the play button
        var playButton = document.getElementById('videoEmbed');

        // Check if the play button exists
        if (playButton) {
            // Simulate a click on the play button
            playButton.click();
        } else {
            console.log("Play button not found");
        }
    }, 5000); // 5000 milliseconds = 5 seconds
};
