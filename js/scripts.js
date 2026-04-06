document.addEventListener('DOMContentLoaded', function() {
    // 1. Grab the elements from the DOM
    const trackBtn = document.getElementById('button-newsletter'); // Matches your HTML button ID
    const trackingInput = document.getElementById('tracking-input');
    const appViewContainer = document.getElementById('app-view-container');
    const trackingIframe = document.getElementById('tracking-iframe');

    // 2. Add the click event listener to the button
    trackBtn.addEventListener('click', function() {
        const tripId = trackingInput.value.trim();

        if (tripId === '') {
            alert('Please enter a valid tracking ID.');
            return;
        }

        // Build the dynamic URL
        const trackingUrl = `https://app.phaetontrucking.com/PublicTripTracking?dr_no=${encodeURIComponent(tripId)}`;
        
        // Point the iframe to the new URL
        trackingIframe.src = trackingUrl;
        
        // Reveal the iframe container by removing Bootstrap's 'd-none' class
        appViewContainer.classList.remove('d-none');
    });

    // 3. Allow user to press 'Enter' to track
    trackingInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            trackBtn.click();
        }
    });
});