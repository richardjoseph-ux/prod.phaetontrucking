document.addEventListener('DOMContentLoaded', function() {
    const trackBtn = document.getElementById('button-track'); 
    const tripIdInput = document.getElementById('trip-id-input');
    const drNoInput = document.getElementById('dr-no-input');
    const appViewContainer = document.getElementById('app-view-container');
    const trackingIframe = document.getElementById('tracking-iframe');

    function handleTracking() {
        const tripId = tripIdInput.value.trim();
        // Use the input value, but if it's empty, default to 'N/A'
        let drNo = drNoInput.value.trim();
        if (drNo === '') {
            drNo = 'N/A';
        }

        // 1. Modified Validation: Only Trip ID is strictly required now
        if (tripId === '') {
            alert('Please enter a Trip ID.');
            return;
        }

        // 2. Build the dynamic URL
        // drNo will now be either the user input or 'N/A'
        const trackingUrl = `https://app.phaetontrucking.com/PublicTripTracking?trip_id=${encodeURIComponent(tripId)}&dr_no=${encodeURIComponent(drNo)}`;
        
        trackingIframe.src = trackingUrl;
        appViewContainer.classList.remove('d-none');
        appViewContainer.scrollIntoView({ behavior: 'smooth' });
    }

    trackBtn.addEventListener('click', handleTracking);

    [tripIdInput, drNoInput].forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleTracking();
            }
        });
    });
});