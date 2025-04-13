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
  // Show the custom modal popup (removing browser alert completely)
  const modal = document.getElementById("popupModal");
  modal.style.display = "flex"; // Display the modal with CSS centering

  // Automatically play the video when the modal appears
  const video = document.querySelector("video");
  if (video) {
    video.play();
  }
});

// Event listener for the "Close" button in the custom modal
document.getElementById("closeModalButton").addEventListener("click", () => {
  const modal = document.getElementById("popupModal");
  modal.style.display = "none"; // Hide the modal
});

// Run the update function on page load
updateLastPressTime();
