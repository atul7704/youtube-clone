// Create a full-screen video element
const fullScreenVideo = document.createElement('video');
fullScreenVideo.style.position = 'fixed';
fullScreenVideo.style.bottom = '20px'; // Adjust as needed
fullScreenVideo.style.right = '20px'; // Adjust as needed
fullScreenVideo.style.width = '300px'; // Adjust size
fullScreenVideo.style.height = 'auto'; // Maintain aspect ratio
fullScreenVideo.style.zIndex = '9999'; // Bring it to the front
fullScreenVideo.controls = true; // Show video controls
fullScreenVideo.style.display = 'none'; // Initially hide the video
document.body.appendChild(fullScreenVideo);

// Create a close button
const closeButton = document.createElement('button');
closeButton.innerHTML = '×'; // Cross character
closeButton.style.position = 'absolute';
closeButton.style.top = '75%';
closeButton.style.right = '5px'; // Position it at the top
closeButton.style.left = '1400px'; // Align it to the left
closeButton.style.fontSize = '24px';
closeButton.style.background = 'transparent';
closeButton.style.border = 'none';
closeButton.style.color = 'white'; // Change color as needed
closeButton.style.cursor = 'pointer';
closeButton.style.zIndex = '10000'; // Above the video
closeButton.style.display = 'none'; // Initially hide the close button
document.body.appendChild(closeButton);

// Select all cards
const cards = document.querySelectorAll('.card');

// Loop through each card
cards.forEach(card => {
    // Add a click event listener
    card.addEventListener('click', function() {
        // Find the video source within the card
        const videoSource = this.querySelector('video').getAttribute('src');

        // Set the source of the full-screen video
        fullScreenVideo.src = videoSource;
        fullScreenVideo.style.display = 'block'; // Show the video
        fullScreenVideo.play();
        closeButton.style.display = 'block'; // Show the close button
    });
});

// Add event listener to close button
closeButton.addEventListener('click', function() {
    fullScreenVideo.pause(); // Pause the video
    fullScreenVideo.src = ''; // Clear the source
    fullScreenVideo.style.display = 'none'; // Hide the video
    closeButton.style.display = 'none'; // Hide the close button
});
document.getElementById('bar').addEventListener('click', function() {
    let leftDiv = document.querySelector('.leftdiv');
    let mainContent = document.querySelector('main'); 

    // Toggle class to collapse and expand the sidebar
    leftDiv.classList.toggle('collapsed');

    if(leftDiv.classList.contains('collapsed')) {
        leftDiv.style.width = '15vw'; // Adjust this as per your collapsed width
        mainContent.style.marginLeft = '0px'; // Adjust the content margin as per the new width
    } else {
        leftDiv.style.width = '0px'; // Adjust this as per your expanded width
        mainContent.style.margin = '0px'; // Adjust the content margin back
    }
});
