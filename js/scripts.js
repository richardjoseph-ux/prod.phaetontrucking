document.addEventListener('DOMContentLoaded', function() {
    const trackBtn = document.getElementById('button-track'); 
    const tripIdInput = document.getElementById('trip-id-input');
    const drNoInput = document.getElementById('dr-no-input');
    const appViewContainer = document.getElementById('app-view-container');
    const trackingIframe = document.getElementById('tracking-iframe');

    function handleTracking() {
        const tripId = tripIdInput.value.trim();
        const drNo = drNoInput.value.trim(); // This will be "" if empty

        // 1. Validation: Only Trip ID is required
        if (tripId === '') {
            alert('Please enter a Trip ID.');
            return;
        }

        // 2. Build the URL
        // If drNo is empty, the URL will end with "...&dr_no="
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