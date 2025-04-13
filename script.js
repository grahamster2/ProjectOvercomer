// Define the library of video file paths
const videoLibrary = [
  "videos/video1.mp4",
  "videos/video2.mp4",
  "videos/video3.mp4",
  "videos/video4.mp4" // Add more video files as needed
];

// Utility function: Select a random video from the library
function getRandomVideo() {
  const randomIndex = Math.floor(Math.random() * videoLibrary.length); // Generate random index
  return videoLibrary[randomIndex]; // Return the video at the random index
}

// Function to update the "Last pressed" time
function updateLastPressTime() {
  const lastPressTime = localStorage.getItem("lastPressTime"); // Retrieve from localStorage
  const displayText = lastPressTime ? `Last pressed: ${lastPressTime}` : "Last pressed: Never";
  document.getElementById("lastPressTime").textContent = displayText;
}

// Event handler: Triggered when "Press Me" button is clicked
function handlePressButtonClick() {
  const currentTime = new Date().toLocaleString(); // Current timestamp
  localStorage.setItem("lastPressTime", currentTime); // Store in localStorage
  document.getElementById("lastPressTime").textContent = `Last pressed: ${currentTime}`;
}

// Event handler: Triggered when "Want to go on?" button is clicked
function handleGoOnButtonClick() {
  // Select a random video and update the <source> element
  const randomVideo = getRandomVideo();
  const videoElement = document.getElementById("popupVideo");
  const sourceElement = document.getElementById("videoSource");

  sourceElement.src = randomVideo + "?nocache=" + new Date().getTime(); // Add cache-busting query string
  videoElement.load(); // Reload video element
  videoElement.play(); // Start playing the video

  // Error handling for video loading
  videoElement.onerror = function () {
    console.error("Error loading video:", randomVideo);
  };

  // Display the modal
  document.getElementById("popupModal").style.display = "flex";
}

// Event handler: Triggered when "Close" button is clicked
function handleCloseModalButtonClick() {
  const modal = document.getElementById("popupModal");
  const videoElement = document.getElementById("popupVideo");

  modal.style.display = "none"; // Hide the modal
  videoElement.pause(); // Stop video playback
  videoElement.currentTime = 0; // Reset video to the beginning
}

// Initialization: Attach event listeners and update page on load
function initializePage() {
  document.getElementById("pressButton").addEventListener("click", handlePressButtonClick);
  document.getElementById("goOnButton").addEventListener("click", handleGoOnButtonClick);
  document.getElementById("closeModalButton").addEventListener("click", handleCloseModalButtonClick);

  updateLastPressTime(); // Update "Last pressed" info on page load
}

// Run initialization when the page loads
initializePage();
