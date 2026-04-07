document.addEventListener('DOMContentLoaded', function() {
    // 1. Grab the elements from the DOM
    const trackBtn = document.getElementById('button-track'); 
    const tripIdInput = document.getElementById('trip-id-input');
    const drNoInput = document.getElementById('dr-no-input');
    const appViewContainer = document.getElementById('app-view-container');
    const trackingIframe = document.getElementById('tracking-iframe');

    // 2. Function to execute tracking logic
    function handleTracking() {
        const tripId = tripIdInput.value.trim();
        const drNo = drNoInput.value.trim();

        // Validate both fields
        if (tripId === '' || drNo === '') {
            alert('Please enter both Trip ID and DR #.');
            return;
        }

        // Build the dynamic URL with both parameters
        // Format: https://app.phaetontrucking.com/PublicTripTracking?trip_id=777427&dr_no=Joseph123
        const trackingUrl = `https://app.phaetontrucking.com/PublicTripTracking?trip_id=${encodeURIComponent(tripId)}&dr_no=${encodeURIComponent(drNo)}`;
        
        // Point the iframe to the new URL
        trackingIframe.src = trackingUrl;
        
        // Reveal the iframe container
        appViewContainer.classList.remove('d-none');

        // Optional: Scroll down to the iframe so the user sees the result immediately
        appViewContainer.scrollIntoView({ behavior: 'smooth' });
    }

    // 3. Add the click event listener to the button
    trackBtn.addEventListener('click', handleTracking);

    // 4. Allow user to press 'Enter' in either input field
    [tripIdInput, drNoInput].forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleTracking();
            }
        });
    });
});