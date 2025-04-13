// Array of video file paths for the library
const videoLibrary = [
  "videos/video1.mp4",
  "videos/video2.mp4",
  "videos/video3.mp4",
  "videos/video4.mp4" // Add more videos as needed
];

// Function to update the last press time display
function updateLastPressTime() {
  const lastTime = localStorage.getItem("lastPressTime"); // Retrieve the stored time from localStorage
  if (lastTime) {
    document.getElementById("lastPressTime").textContent = `Last pressed: ${lastTime}`;
  } else {
    document.getElementById("lastPressTime").textContent = "Last pressed: Never"; // Default display
  }
}

// Event listener for the "Press Me" button
document.getElementById("pressButton").addEventListener("click", () => {
  const currentTime = new Date().toLocaleString(); // Get the current time
  localStorage.setItem("lastPressTime", currentTime); // Save the time to localStorage
  document.getElementById("lastPressTime").textContent = `Last pressed: ${currentTime}`;
});

// Event listener for the "Want to go on?" button
document.getElementById("goOnButton").addEventListener("click", () => {
  // Select a random video from the array
  const randomVideo = videoLibrary[Math.floor(Math.random() * videoLibrary.length)];

  // Set the video source dynamically
  const videoElement = document.getElementById("popupVideo");
  const sourceElement = document.getElementById("videoSource");
  
  sourceElement.src = randomVideo; // Set the new video source
  videoElement.load(); // Reload video element with the new source
  videoElement.play(); // Automatically play the selected video

  // Show the modal popup
  const modal = document.getElementById("popupModal");
  modal.style.display = "flex"; // Make the modal visible
});

// Event listener for the "Close" button in the modal
document.getElementById("closeModalButton").addEventListener("click", () => {
  const modal = document.getElementById("popupModal");
  modal.style.display = "none"; // Hide the modal

  // Stop and reset the video when closing the modal
  const videoElement = document.getElementById("popupVideo");
  videoElement.pause();
  videoElement.currentTime = 0; // Reset video to the beginning
});

// Run the update function on page load
updateLastPressTime();
