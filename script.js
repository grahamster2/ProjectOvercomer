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
  // Show the custom modal popup
  const modal = document.getElementById("popupModal");
  modal.style.display = "flex"; // Activate modal visibility

  // Automatically play the video when the modal appears
  const video = document.getElementById("popupVideo"); // Target video inside the modal
  if (video) {
    video.play();
  }
});

// Event listener for the "Close" button in the custom modal
document.getElementById("closeModalButton").addEventListener("click", () => {
  const modal = document.getElementById("popupModal");
  modal.style.display = "none"; // Hide the modal

  // Stop and reset the video when closing the modal
  const video = document.getElementById("popupVideo");
  if (video) {
    video.pause();
    video.currentTime = 0; // Reset video to the beginning
  }
});

// Run the update function on page load
updateLastPressTime();
