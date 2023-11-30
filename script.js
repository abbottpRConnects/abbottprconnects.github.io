/*// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function() {
        // Find the element with the specified classes
        var playButton = document.querySelector('.fp-play.fp-visible .fp-icon.fp-playbtn');

        // Check if the element exists
        if (playButton) {
            // Programmatically click the element
            playButton.click();
            console.log("Play button clicked");
        } else {
            console.log("Play button not found");
        }
    }, 5000); // Delay for 5000 milliseconds (5 seconds)
});*/

// Function to execute when mutations are observed
var observerCallback = function(mutationsList, observer) {
    let playButton = document.querySelector('.fp-play.fp-visible .fp-icon.fp-playbtn');
    if (playButton) {
        playButton.click();
        observer.disconnect(); // Stop observing after the click
    }
};

// Create an observer instance linked to the callback function
var observer = new MutationObserver(observerCallback);

// Start observing the document body for DOM mutations
observer.observe(document.body, { childList: true, subtree: true });

// Set a timeout to stop observing after a certain period if the button is not found
setTimeout(() => {
    observer.disconnect();
}, 10000); // Adjust time as necessary
